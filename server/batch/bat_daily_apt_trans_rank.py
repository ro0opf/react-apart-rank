import pymysql
import time


def start_batch_job ():
    # Maria DB Connection
    apt_db = pymysql.connect(
        user='root',
        passwd='1129',
        host='localhost',
        db='apt',
        charset='utf8'
    )

    cursor = apt_db.cursor(pymysql.cursors.DictCursor)

    sql =  """
            SELECT @ROWNUM := @ROWNUM +1 AS rank, t.* 
            FROM (
                select atpd.serial_num, atpd.apt_name, MAX(atpd.unit_price) as unit_price, atpd.addr_pr_cd
                    , atpd.addr_ct_cd , atpd.addr_dong_cd, atpd.addr_cd, ROUND(atpd.apt_capacity) exclusive_area
                    , atpd.trans_yymm, atpd.trans_yymmdd, atpd.apt_floor, atpd.trans_price
                from apt_trans_price_dtl atpd
                where trans_yymm >= DATE_FORMAT(DATE_ADD(NOW(), INTERVAL -12 MONTH), '%Y%m')
                group by atpd.addr_pr_cd, atpd.addr_ct_cd, atpd.addr_dong_cd, atpd.addr_cd, atpd.apt_capacity 
                order by 3 desc
                ) t, (select @ROWNUM := 0 ) tmp
            ORDER BY 1 
        ;
        """
    cursor.execute(sql)
    result = cursor.fetchall()

    st_dt = time.time()
    print ("# 시작시간 : ", st_dt)

    for data in result :
        sql_insert = """
            INSERT INTO apt_trans_rank (
                rank,
                op_dt,
                serial_num,
                apt_name,
                apt_floor,
                trans_price,
                unit_price,
                addr_pr_cd,
                addr_ct_cd,
                addr_dong_cd,
                addr_cd,
                exclusive_area,
                trans_yymm,
                trans_yymmdd,
                audit_dtm
            )
            VALUES (
                %s,
                sysdate(),
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                sysdate()
            )
        """
        cursor.execute(sql_insert, (
                           int(data["rank"]),
                            data["serial_num"],
                            data["apt_name"],
                            data["apt_floor"],
                            data["trans_price"],
                            data["unit_price"],
                            data["addr_pr_cd"],
                            data["addr_ct_cd"],
                            data["addr_dong_cd"],
                            data["addr_cd"],
                            data["exclusive_area"],
                            data["trans_yymm"],
                            data["trans_yymmdd"]
                        )
                    )
        apt_db.commit()
        time.sleep(0.1)

    end_dt = time.time()
    print ("# 소요시간: ", end_dt - st_dt, " 초")
