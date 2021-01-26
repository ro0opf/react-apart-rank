interface ApartInfo {
  local_my_rank: number
  local_my_tier: string
  local_top_addr_cd: string
  local_top_ct_cd: string
  local_top_dong_cd: string
  local_top_nm: string
  local_top_pr_cd: string
  local_top_serial_num: string
  my_apt_dtl: {
    apt_build_yy: string
    city_nm: string
    dong_nm: string
    province_nm: string
    apt_name: string
    trans_hst: {
      floor : string
      trans_yymmdd : string
      trans_price : string
    }[]
  }
  wide_addr_cd: string
  wide_ct_cd: string
  wide_dong_cd: string
  wide_my_rank: number
  wide_my_tier: string
  wide_pr_cd: string
  wide_top_nm: string
  wide_top_serial_num: string
}

export default ApartInfo
