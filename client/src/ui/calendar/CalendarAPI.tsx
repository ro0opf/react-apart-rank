import axios from 'axios'
import Calendar from '../../data/Calendar'
import env from '../../data/Env'

interface sCalendar {
  date: string
  data: Calendar[]
}


export async function gCalendar(year: number, month: number, type: string) {
  try {
    let response = await env.instance.get<sCalendar[]>(
      'schedule?date=' + (year + month.toString().padStart(2, '0')) + '&type=' + type,
    )
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}
