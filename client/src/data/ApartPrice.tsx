interface ApartPrice {
  range: string
  price_change: {
    trans_yymm : string
    trans_price : string
  }[]
  volume_change: {
    trans_yymm : string
    trans_amount : string
  }[]
}

export default ApartPrice
