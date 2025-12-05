import axios from 'axios'

export const API_ROUTES = {
  meditation: 'meditations',
}

export const http = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 10000,
})
