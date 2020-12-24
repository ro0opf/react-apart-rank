# Date: 2020-07-12
# @author : Hyunjin Park
# @PGM desc : 지역코드가 저장된 csv 파일을 불러와 DB에 저장

import csv
import pymysql
import pandas as pd

# AUDIT_ID : bat_reg_cd

# Login 정보 파일 입출력
# git.ignroe 파일에 Login 정보 제외 처리
# oracle_client 경로 파일 입출력 처리 


# Maria DB Connection
apt_db = pymysql.connect(
    user='root', 
    passwd='1129', 
    host='127.0.0.1', 
    db='apt', 
    charset='utf8'
)

cur = apt_db.cursor(pymysql.cursors.DictCursor)

print ('현진')

# Read Region Code
f = open('resource/region_dtl_v2.csv', 'r', encoding='utf-8'  )
rdr = csv.reader(f)


print(rdr)

for line in rdr:

    sql_insert = 'INSERT INTO apt_region_cd_dtl VALUES(%s, %s, %s, %s, %s, %s, SYSDATE(), %s)'

    #column명 제외
    if 'province' in line[0] :
        continue
    else:
        province_cd = line[0]
        city_cd = line[1]
        dong_cd = line[2]
        province_nm = line[3]
        city_nm = line[4]
        dong_nm = line[5]
        bat_id = 'bat_reg_cd'
	
        cur.execute(sql_insert, (province_cd, city_cd, dong_cd, province_nm, city_nm, dong_nm, bat_id) )

apt_db.commit()
f.close()	

