# Date: 2020-07-12
# @author : Hyunjin Park
# @PGM desc : APT 실거래가, 국토교통부 실시간 API 호출 및 최근 거래가 INSERT

import requests
from bs4 import BeautifulSoup
import pandas as pd

# DB Con
import cx_Oracle
cx_Oracle.init_oracle_client(lib_dir=r"C:\instantclient_18_5")
con = cx_Oracle.connect("phantom", "1", "localhost:/orcl")
cursor = con.cursor()

# 파일 입출력 처리
api_key="o5i6RzX%2FRUqXjqw6iQbxeUZ6h1DnOg%2BLLDbQtvX9OleW0Y0%2FijNnBVjcb4maX22KrxTuZ79YZCPB4%2B8I%2FCZfwA%3D%3D"

def searchByRegionYM(deal_ymd,lawd_code): #년월, 지역코드(시군구 5자리)
    numOfRows = '10000' # 한번 노출 시 불러들이는 거래정보 량
    pageNo = '1' # 시작 페이지... 1회 호출에 10000건이 넘을 경우 다음페이지로 다시 호출 해야 함. 
    
    url = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?LAWD_CD=%s&DEAL_YMD=%s&ServiceKey=%s&numOfRows=%s&pageNo=%s' %(lawd_code, deal_ymd, api_key, numOfRows, pageNo)
    res = requests.get(url)

    soup = BeautifulSoup(res.text,'lxml-xml')
    it = soup.select('item')
    
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
        trans_price = node.find('거래금액').text 
        trans_yy = node.find('년').text
        trans_mm = node.find('월').text
        trans_dd = node.find('일').text
        addr_region_cd = node.find('법정동시군구코드').text
        addr_dong_cd = node.find('법정동읍면동코드').text
        trans_yymm = trans_yy +''+ trans_mm.rjust(2,'0')
        audit_id = 'bat_prc_hst'
        sql_insert = """
            INSERT INTO apt_trans_price_hst VALUES(
                :serial_num,
                :apt_name,
                :apt_floor,
                :apt_capacity,
                :apt_build_yy
                :trans_yymm,
                :trans_price,
                :trans_dd,
                :addr_cd,
                :addr_region_cd,
                :addr_dong_cd,
                :addr_dong_nm,
                sysdate,
                :audit_id
            )
            """

        cur.execute(sql_insert, (serial_num, apt_name, apt_floor, apt_capacity, apt_build_yy, trans_yymm, trans_price, trans_dd, addr_cd,
                                 addr_region_cd, addr_dong_cd, addr_dong_nm, audit_id) )
    
        
    return "true"

# 현재시간
from datetime import datetime
import time
cur_ym = datetime.today().strftime('%Y%m')

#
cursor.execute("""
    SELECT count(1) FROM apt_trans_price_hst
    """)

result = cursor.fetchall()
len_result = result[0][0] #count 했기 때문에 결과는 무조건 1개

# 지역코드 query
cursor.execute("""
    SELECT region_cd FROM apt_region_spc GROUP BY region_cd
    """)

# Daily Job
# 중복 데이터 제거하면서 현재 시스템 날짜 기준으로 fetch
if(len_result > 1):
    for i in cursor:
        region_cd = i[0]
        df = searchByRegionYM(cur_ym, region_cd)
        time.sleep(5)
        print (i[1]+ 'complete')
        con.commit()

# 최초 자료 MIG
elif(len_result == 0):
    print ('Initial APT_PRICE Migration Start')
    print ('Start since 2000-01 data')
    
    for i in cursor:
        region_cd = i[0]
        
        for year in range(200001, 202007):
            df = searchByRegionYM(i, region_cd)
            print (str(year) + 'is done' + region_cd)
            time.sleep(5)
            
        # 지역별로 commit
        print (i[1]+ 'complete')
        con.commit()
    
