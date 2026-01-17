<script setup lang="ts">
import { useStatisticsStore } from '@/stores/statistics-store'
import { transStatistics } from '@/constants/translations';
import { onMounted } from 'vue'

const store = useStatisticsStore()

onMounted(() => {
  store.fetchStatistics()
})
</script>

<template>
  <div class="p-base df jcc">
  <div class="statistics-list">
    <div class="statistics-card" v-for="(item, index) in store.statistics" :key="index" :class="`statistics-card--${index}`">
      <div class="statistics-card__days">{{ item }} </div>
      <div class="meditation-card__title">{{ transStatistics[index] }}</div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.statistics-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 200px);
  grid-gap: 50px;
}
.statistics-card {
  background-color: #DCDCDC;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 20px;
}
.statistics-card__days {
  text-align: right;
  font-weight: 700;
  font-size: 80px;
}
.meditation-card__title {
  font-weight: 500;
  font-size: 18px;
}
.statistics-card--total_minutes {
  background-color: #69B09C;
}
.statistics-card--total_anxiety {
  background-color: #B0696A;
}
.statistics-card--total_calm {
  background-color: #69B069;
}
.statistics-card--total_focus {
  background-color: #9CB069;
}
.statistics-card--total_relax {
  background-color: #69A1B0;
}
</style>
