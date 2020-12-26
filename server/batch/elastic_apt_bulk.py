import pymysql
import pandas as pd
from elasticsearch import Elasticsearch
from elasticsearch import helpers

# Maria DB Connection
apt_db = pymysql.connect(
    user='root', 
    passwd='1129', 
    host='127.0.0.1', 
    db='apt', 
    charset='utf8'
)

cursor = apt_db.cursor(pymysql.cursors.DictCursor)

sql = 	"""
	SELECT atpd.apt_name, arcd.province_nm, arcd.city_nm, arcd.dong_nm, atpd.serial_num
		,atpd.addr_cd, atpd.addr_pr_cd, atpd.addr_ct_cd, atpd.addr_dong_cd 
	FROM apt_trans_price_dtl atpd, apt_region_cd_dtl arcd 
	WHERE 	atpd.addr_pr_cd = arcd.province_cd
	 AND	atpd.addr_ct_cd = arcd.city_cd
	 AND	atpd.addr_dong_cd = arcd.dong_cd
	GROUP BY atpd.addr_cd, atpd.addr_pr_cd, atpd.addr_ct_cd, atpd.addr_dong_cd
	ORDER BY atpd.serial_num;
	"""
cursor.execute(sql)
result = cursor.fetchall()

#result = pd.DataFrame(result)


es = Elasticsearch()

idx_cnt = 1
actions = []

for columns in result:
	
	parse_dong = columns["dong_nm"][:len(columns["dong_nm"])-1]
	tmp_apt_name = columns["apt_name"]

	if("래미안강동팰리스" in tmp_apt_name):
		print ("래미안강동팰리스",idx_cnt)

	if(parse_dong not in tmp_apt_name):
		tmp_apt_name = parse_dong + tmp_apt_name

	action = {
		"_index": "apt_search",
		"_id": idx_cnt,
		"_source": {
			"apt_name": tmp_apt_name,
			"province_nm": columns["province_nm"],
			"city_nm": columns["city_nm"],
			"dong_nm": columns["dong_nm"],
			"serial_num": columns["serial_num"],
			"ct_cd": columns["addr_ct_cd"],
			"dong_cd": columns["addr_dong_cd"],
			"pr_cd": columns["addr_pr_cd"],
			"addr_cd": columns["addr_cd"],
		}
	}
	
	idx_cnt+=1
	actions.append(action)	 

	if(idx_cnt % 10 == 0):
		helpers.bulk(es, actions)
		actions = []



