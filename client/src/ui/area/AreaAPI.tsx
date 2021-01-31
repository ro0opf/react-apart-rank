import Apart from '../../data/Apart'
import ApartPrice from '../../data/ApartPrice'
import env from '../../data/Env'

let dummyData: Apart[] = [
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 1,
    exclusive_area: '98',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '124000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 2,
    exclusive_area: '124',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '24000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 3,
    exclusive_area: '32',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 4,
    exclusive_area: '44',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 5,
    exclusive_area: '52',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
]

export async function gAreaPrice(provinceCode: string, yearCode: string) {
  try {
    let response = await env.instance.get<ApartPrice>('analysis?range=' + provinceCode + '&year=' + yearCode)
    return response.data
  } catch (error) {
    console.log(error)
    return {} as ApartPrice
  }
}

export async function gAreaRank(provinceCode: string) {
  try {
    let response = await env.instance.get<Apart[]>('analysis/volume?range=' + provinceCode + '&related=5')
    return response.data
  } catch (error) {
    console.log(error)
    return dummyData
  }
}
