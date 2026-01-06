import { API_ROUTES, client } from '@/api'
import type { LoginResponse } from '@/interfaces/auth-interface'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const TOKEN_STORE_KEY = 'token-store'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>()

  const initialValue = localStorage.getItem(TOKEN_STORE_KEY)
  if (initialValue) {
    token.value = initialValue
  }

  function setToken(newToken: string) {
    token.value = newToken
    localStorage.setItem(TOKEN_STORE_KEY, newToken)
  }

  function clearToken() {
    token.value = undefined
    localStorage.removeItem(TOKEN_STORE_KEY)
  }

  const getToken = computed(() => token.value)

  async function login(username: string, password: string) {
    try {
      const { data } = await client().post<LoginResponse>(API_ROUTES.login, {
        username,
        password,
      })
      setToken(data.data.token)
    } catch(err) {
      console.log('Ошибка', err)
    }
  }

  return { getToken, login, setToken, clearToken }
})
