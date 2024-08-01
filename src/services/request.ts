import axios, { AxiosInstance } from 'axios'
import ENVIRONMENT from '@/constants/env'

export const covidApiRequest: AxiosInstance = axios.create({
  baseURL: ENVIRONMENT.COVID_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': ENVIRONMENT.COVID_API_KEY,
    'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
  },
})
