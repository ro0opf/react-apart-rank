import axios from 'axios'

const env = {
  timeout: 10000,
  instance: axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://life-in-valley.tech:9999/',
    timeout: 10000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }),
  lifeInValley: axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://life-in-valley.tech:9999/',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    responseType : 'blob'
  }),
}

export default env
