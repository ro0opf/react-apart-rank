# Date: 2020-07-12
# @author : Hyunjin Park
# @PGM desc : APT 실거래가, 국토교통부 실시간 API 호출 및 최근 거래가 INSERT
# RETURN : 99 배치 요청 횟수 초과

import math
import requests
from bs4 import BeautifulSoup
import pandas as pd

# DB Con
import cx_Oracle
cx_Oracle.init_oracle_client(lib_dir=r"C:\instantclient_18_5")
con = cx_Oracle.connect("phantom", "1129", "localhost:/orcl")
cursor = con.cursor()
page_cursor = con.cursor()
tmp_cursor = con.cursor()
# 파일 입출력 처리
api_key="o5i6RzX%2FRUqXjqw6iQbxeUZ6h1DnOg%2BLLDbQtvX9OleW0Y0%2FijNnBVjcb4maX22KrxTuZ79YZCPB4%2B8I%2FCZfwA%3D%3D"
audit_id = 'bat_pc_hst'

def searchByRegionYM(deal_ymd,lawd_code): #년월, 지역코드(시군구 5자리)
    numOfRows = '10000' # 한번 노출 시 불러들이는 거래정보 량
    pageNo = '1' # 시작 페이지... 1회 호출에 10000건이 넘을 경우 다음페이지로 다시 호출 해야 함. 

    url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?LAWD_CD=%s&DEAL_YMD=%s&ServiceKey=%s&numOfRows=%s&pageNo=%s' %(lawd_code, deal_ymd, api_key, numOfRows, pageNo)
    res = requests.get(url)

    soup = BeautifulSoup(res.text,'lxml-xml')

    resultCode = soup.find('resultCode').text

    # API 요청 횟수 초과
    if(resultCode == '99'):
        result_nm = 'Exceed Request'
        error_log = 'INSERT INTO batch_log VALUES(:result_cd, :result_nm, sysdate, :audit_id, :last_region_cd, :last_trans_yymm, :last_page)'
        tmp_cursor.execute(error_log, (resultCode, result_nm, audit_id, lawd_code, deal_ymd, pageNo))
        con.commit()
        return '99'
    
    #soup.find('resultMsg').text)
    it = soup.select('item')

    resultCnt = len(it)

    if(resultCnt == 0): return False
    
    rows = []
    for node in it:

        try:
            serial_num = node.find('일련번호').text # 새로 생긴 단지의 경우 일련번호 없는 단지 있음. 
        except:
            serial_num =''
        
        try:
            addr_cd = node.find('지번').text # 지번이 없는 단지도 있음. 
        except:
            addr_cd = ''
        
        apt_build_yy = node.find('건축년도').text
        addr_dong_nm = node.find('법정동').text
        apt_name = node.find('아파트').text
        apt_capacity = node.find('전용면적').text
        apt_floor = node.find('층').text
        # 콤마제외
        trans_price = node.find('거래금액').text
        trans_price = trans_price.replace(',' , '')
        
        trans_yy = node.find('년').text
        trans_mm = node.find('월').text
        trans_dd = node.find('일').text
        addr_region_cd = node.find('법정동시군구코드').text
        addr_dong_cd = node.find('법정동읍면동코드').text
        trans_yymm = trans_yy +''+ trans_mm.rjust(2,'0')

        addr_pr_cd = addr_region_cd[:2]
        addr_ct_cd = addr_region_cd[2:len(addr_region_cd)]

        unit_price = round(float(trans_price) / float(apt_capacity))
        trans_yymmdd = trans_yy+trans_mm
        
        sql_insert = """
            MERGE INTO apt_trans_price_dtl atph
                USING DUAL
                   ON (atph.apt_name = :apt_name AND atph.trans_yymm = :trans_yymm AND atph.trans_dd = :trans_dd AND atph.addr_pr_cd = :addr_pr_cd AND atph.addr_ct_cd = :addr_ct_cd)
                WHEN NOT MATCHED THEN
                    INSERT (
                    atph.serial_num
                    , atph.apt_name
                    , atph.apt_floor
                    , atph.apt_capacity
                    , atph.apt_build_yy
                    , atph.trans_yymm
                    , atph.trans_price
                    , atph.addr_cd
                    , atph.addr_pr_cd
                    , atph.addr_ct_cd
                    , atph.addr_dong_cd
                    , atph.addr_dong_nm
                    , atph.audit_dtm
                    , atph.audit_id
                    , atph.trans_dd
                    , atph.unit_price
                    , atph.trans_yymmdd
                    )
                    VALUES (
                    :serial_num
                    , :apt_name
                    , :apt_floor
                    , :apt_capacity
                    , :apt_build_yy
                    , :trans_yymm
                    , :trans_price
                    , :addr_cd
                    , :addr_pr_cd
                    , :addr_ct_cd
                    , :addr_dong_cd
                    , :addr_dong_nm
                    , sysdate
                    , :audit_id
                    , :trans_dd
                    , :unit_price
                    , :trans_yymmdd
                    )
            """
        
        tmp_cursor.execute(sql_insert, (apt_name, trans_yymm, trans_dd, addr_pr_cd, addr_ct_cd, serial_num, apt_name, apt_floor, apt_capacity, apt_build_yy, trans_yymm, trans_price, addr_cd,
                                 addr_pr_cd, addr_ct_cd, addr_dong_cd, addr_dong_nm, audit_id, trans_dd, unit_price, trans_yymmdd) )
    con.commit()
    time.sleep(0.1)
    return True

# 현재시간
from datetime import datetime
import time
cur_ym = datetime.today().strftime('%Y%m')

#
cursor.execute("""
    SELECT count(1) FROM apt_trans_price_dtl
    """)

result = cursor.fetchall()
len_result = result[0][0] #count 했기 때문에 결과는 무조건 1개

# 지역코드 query
local_code = cursor.execute("""
    SELECT region_cd FROM apt_region_spc GROUP BY region_cd 
    """)


# API 호출 횟수 제한으로 가장 마지막에 호출한 지역번호와 거래년월
page_cursor.execute("""
    SELECT log.region_cd, log.trans_yymm
    FROM (
        SELECT ROWNUM idx, LAST_REGION_CD region_cd, LAST_TRANS_YYMM trans_yymm
        FROM batch_log
        WHERE to_char(AUDIT_DTM,'yyyymmdd') = TO_CHAR(SYSDATE-1, 'yyyymmdd')
        ORDER BY audit_dtm DESC
    ) log
    WHERE log.idx = 1
    """)
last_request_info = page_cursor.fetchall()[0]

last_region_cd = last_request_info[0]
last_trans_yymm = last_request_info[1]

# 지워야함
len_result = 0

# Daily Job
# 중복 데이터 제거하면서 현재 시스템 날짜 기준으로 fetch
if(len_result > 1):
    
    for i in local_code:
        region_cd = i[0]
        df = searchByRegionYM(cur_ym, region_cd)
        print (i[0]+ 'complete')
        
# 최초 자료 MIG
elif(len_result == 0):
    print ('Initial APT_PRICE Migration Start')
    print ('Start since 2015-01 data')

    status = True
    
    for i in cursor:
        region_cd = i[0]

        if(status is False):
            print ('배치 수행 종료')
            break

        #이미 수행 한 지역코드
        if(region_cd < last_region_cd):
            continue
    
        if(region_cd == '11000') : continue
        
        for year in range(2015, 2021):
            
            if(status is False):
                break

            for month in range(1, 13):
                tmp_month = ''
                if( month < 10) :
                    tmp_month = '0' + str(month)
                else:
                    tmp_month = str(month)
                deal_ym = str(year)+str(tmp_month)

                # 배치 수행 중이었던 지역
                if(region_cd <= last_region_cd) :
                    if(deal_ym < last_trans_yymm):
                        continue
                
                df = searchByRegionYM(str(year)+ str(tmp_month), region_cd)

                if (df == True):
                    print (str(year) +'-' +str(tmp_month)+ ' is done ' + region_cd)
                    
                elif(df == '99'):
                    print ('Log: Request Exceed')
                    status = False
                    break
                else :
                    print ('null Data')

            print (i[0]+ 'year ' + str(year) + ' complete')
       
        # 지역별로 commit

        
    
