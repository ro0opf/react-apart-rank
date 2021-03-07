export interface Apart {
  province_nm: string
  city_nm: string
  apt_name: string
  rank: number
  exclusive_area: string
  serial_num: string
  dong_nm: string
  max_trans_price: string
  pr_cd?: string
  ct_cd?: string
  dong_cd?: string
  addr_cd?: string
}

export interface ApartRank {
  page: number
  max_page : number
  rank_dtl: Apart[]
}
