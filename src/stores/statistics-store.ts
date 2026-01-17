import { API_ROUTES, client } from '@/api'
import type { Statistics } from '@/interfaces/statistics-interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStatisticsStore = defineStore('statistics', () => {

  const statistics = ref()

  async function fetchStatistics() {
    try {
      const { data } = await client().get<{ data: { summary: Statistics } }>(API_ROUTES.feeling)
      statistics.value = data.data.summary
    } catch(err) {
      console.log('Ошибка', err)
    }
  }

  return { statistics, fetchStatistics }
})
