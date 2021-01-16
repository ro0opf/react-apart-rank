# -*- coding: utf8 -*-

import schedule
import time
import bat_daily_apt_trans_rank
import bat_daily_apt_price_api
import bat_daily_elastic_apt_search

def job_second():
	print("I'm working...every second")
def job_minute():
	print("I'm working...every minute")
def job_hour():
	print("I'm working...every hour")

def job_day():

	try :
		print ('#1 bat_daily_apt_price_api')
		bat_daily_apt_price_api.start_batch_job()
	except :
		print ('ERROR: #1 bat_daily_apt_price_api')

	try :
		print ('#2 batch_elastic_apt_search')
		bat_daily_elastic_apt_search.start_batch_job()
	except :
		print ('ERROR: #2 batch_elastic_apt_search')

	try :
		print ('#3 bat_daily_apt_trans_rank')
		bat_daily_apt_trans_rank.start_batch_job()		
	except :
		print ('ERROR: #3 bat_daily_apt_trans_rank')

	print ('------------------------------------------------------')

def job_monday():
	print("I'm working...every monday")
def job_wednesday():
	print("I'm working...every wednesday")

# # 10초에 한번씩 실행
#schedule.every(10).seconds.do(job_second)
# # 10분에 한번씩 실행
#schedule.every(10).minutes.do(job_minute)
# # 매 시간 실행
#schedule.every().hours.do(job_hour)
# # 매일 10:30 에 실행
schedule.every().days.at("00:15").do(job_day)
# # 매주 월요일 실행
#schedule.every().monday.do(job_monday)
# 매주 수요일 13:15 에 실행
#schedule.every().wednesday.at("13:15").do(job_wednesday)

while True:
	schedule.run_pending()
	time.sleep(1)
