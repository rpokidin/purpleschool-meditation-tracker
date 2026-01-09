import { API_ROUTES, client } from '@/api'
import type { Feeling } from '@/interfaces/feeling-interface'
import { defineStore } from 'pinia'

export const useFeelingStore = defineStore('feeling', () => {

  async function addFeeling(type: string, value = 1) {
    try {
      await client().post<Feeling>(API_ROUTES.feeling, {
        type,
        value,
      })
    } catch(err) {
      console.log('Ошибка', err)
    }
  }

  return { addFeeling }
})
