import { client, API_ROUTES } from '@/api'
import type { Register } from '@/interfaces/register-interface'
import { defineStore } from 'pinia'

export const useRegisterStore = defineStore('register', () => {

  async function register(username: string, email: string, password: string) {
    await client().post<Register>(API_ROUTES.register, {
      username,
      email,
      password,
    })
  }

  return { register }
})
