<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useMeditationStore } from '@/stores/meditation-store'

const store = useMeditationStore()
const route = useRoute()
const itemId = ref()

onMounted(() => {
  itemId.value = route.params.id;

  store.fetchMeditation()


})

</script>

<template>

    <template v-for="item in store.meditation" :key="item.id">
      <div v-if="item.id == itemId">
        {{ item.title }}
        {{ item.description }}
        {{ item.duration_min }}
      </div>
    </template>


</template>


