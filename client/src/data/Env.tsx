import axios from 'axios'

const env = {
  timeout: 10000,
  instance: axios.create({
    baseURL: 'https://api.apart-back.gq:9999/',
    timeout: 10000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }),
}

export default env
