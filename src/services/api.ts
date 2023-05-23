import { BASE_ENDPOINT } from '@/lib/utils'
import axios from 'axios'

export const api = axios.create({
  baseURL: BASE_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
})
