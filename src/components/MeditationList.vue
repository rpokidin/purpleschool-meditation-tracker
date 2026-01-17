<script setup lang="ts">
import { useMeditationStore } from '@/stores/meditation-store'
import { useRouter } from 'vue-router';
import { onMounted } from 'vue'

const router = useRouter();
const store = useMeditationStore()

onMounted(() => {
  store.fetchMeditation()
})

const goToItem = (id: number) => {
  router.push({ name: 'timer', params: { id } });
  // Или: router.push(`/item/${id}`)
};
</script>

<template>
  <div class="meditation-list">
    <div class="meditation-card" v-for="item in store.meditation" :key="item.id">
      <div>
        <div class="meditation-card__title">{{ item.title }}</div>
        <div class="meditation-card__desc">{{ item.description }}</div>
      </div>
      <div class="df jcsb aic">
        <button @click="goToItem(item.id)">Начать</button>
        <div class="meditation-card__time">{{ item.duration_min }} мин</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.meditation-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 170px);
  grid-gap: 25px;
}
.meditation-card {
  background-color: #F7F3F0;
  width: 340px;
  padding: 20px 30px;
  border-radius: 20px;
}
.meditation-card__title {
  font-weight: 500;
  font-size: 25px;
  color: var(--black);
}
.meditation-card__desc {
  margin-bottom: 15px;
  font-size: 15px;
  color: var(--black);
}
.meditation-card button {
  background-color: var(--green);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 15px;
  color: var(--white);
  padding: 10px 25px;
  border-radius: 10px;
}
.meditation-card button::after {
  content: '';
  display: block;
  background: url("data:image/svg+xml;charset=UTF-8,%3csvg width='13' height='13' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.5 0A6.507 6.507 0 0 0 0 6.5C0 10.084 2.916 13 6.5 13S13 10.084 13 6.5 10.084 0 6.5 0zm2.584 6.728L5.292 9.165a.27.27 0 0 1-.276.01.27.27 0 0 1-.141-.238V4.064a.27.27 0 0 1 .417-.228l3.792 2.437a.271.271 0 0 1 0 .456z' fill='%23fff'/%3e%3c/svg%3e") no-repeat;
  width: 13px;
  height: 13px;
}
.meditation-card button:hover {
  background-color: rgba(32, 39, 40, 1);
}
.meditation-card__time {
  font-size: 15px;
  color: var(--green);
}
</style>
