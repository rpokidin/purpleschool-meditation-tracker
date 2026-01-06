import axios from 'axios'
import { useAuthStore } from './stores/auth-store'

export const API_ROUTES = {
  meditation: 'meditations',
  login: 'auth/login',
  register: 'auth/register',
}

export function client() {
  const authStore = useAuthStore()
  return axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${authStore.getToken}`,
    },
  })
}
