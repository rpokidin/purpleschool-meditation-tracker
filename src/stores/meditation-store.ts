import { API_ROUTES, client } from '@/api'
import type { Meditation } from '@/interfaces/meditation-interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMeditationStore = defineStore('meditation', () => {

  const meditation = ref<Meditation[]>()

  async function fetchMeditation() {
    try {
      const { data } = await client().get<{ data: { meditations: Meditation[] } }>(API_ROUTES.meditation)
      meditation.value = data.data.meditations
    } catch(err) {
      console.log('Ошибка', err)
    }
  }

  return { meditation, fetchMeditation }
})
