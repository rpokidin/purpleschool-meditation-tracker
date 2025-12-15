import { API_ROUTES, http } from '@/api'
import type { Meditation } from '@/interfaces/meditation-interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMeditationStore = defineStore('meditation', () => {
  const meditation = ref<Meditation[]>()

  async function fetchMeditation() {

    try {
      const { data } = await http.get<{ data: { meditations: Meditation[] } }>(API_ROUTES.meditation)
      meditation.value = data.data.meditations
    } catch(err) {
      console.log(err)
    }

  }
  
  return { meditation, fetchMeditation }
})
