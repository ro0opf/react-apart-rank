# Date: 2020-07-12
# @author : Hyunjin Park
# @PGM desc : 지역코드가 저장된 csv 파일을 불러와 DB에 저장

import csv
import cx_Oracle

# AUDIT_ID : bat_reg_cd

# Login 정보 파일 입출력
# git.ignroe 파일에 Login 정보 제외 처리
# oracle_client 경로 파일 입출력 처리 

# Execute Client
cx_Oracle.init_oracle_client(lib_dir=r"C:\instantclient_18_5")

# Oracle DB Connection
con = cx_Oracle.connect("phantom", "1", "localhost:/orcl")
cur = con.cursor()

# Read Region Code
f = open('resource/region_code5.csv', 'r')
rdr = csv.reader(f)

for line in rdr:

    # Insert 문 수정 필요 Merge into
    
    # MERGE INTO TB_SCORE S
    # USING DUAL
    #   ON (S.COURSE_ID = 'C1' AND S.STUDENT_ID = 'S1')
    # WHEN MATCHED THEN
    #   UPDATE SET S.SCORE = 20
    # WHEN NOT MATCHED THEN
    #    INSERT (S.COURSE_ID, S.STUDENT_ID, S.SCORE)
    #   VALUES ('C1', 'S1', 20)

    sql_insert = 'INSERT INTO apt_region_spc VALUES(:region_cd, :region_nm, sysdate, :audit_id)'
    
    #column명 제외
    if 'region' in line[0] :
        continue
    else:
        region_nm = line[0]
        region_cd = line[1]
        bat_id = 'bat_reg_cd'

        cur.execute(sql_insert, (region_cd, region_nm, bat_id) )

con.commit()
f.close()	

