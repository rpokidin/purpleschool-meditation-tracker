<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useMeditationStore } from '@/stores/meditation-store'

const store = useMeditationStore()
const route = useRoute()
const router = useRouter()
const timerQuery = ref()
const totalSeconds = ref(0);
const remainingSeconds = ref(0);
const isRunning = ref(false);

let timerInterval = 0;

function timerStart() {
  if (!isRunning.value) {
    isRunning.value = true;
    timerInterval = setInterval(() => {
      if (remainingSeconds.value > 0) {
        remainingSeconds.value--;
      } else {
        timerStop();
        console.log('Таймер завершён!');
      }
    }, 1000);
  }
};

function timerStop () {
  isRunning.value = false;
  clearInterval(timerInterval);
};

function timerReset () {
  timerStop();
  remainingSeconds.value = totalSeconds.value;
};

function routerBack() {
  router.back()
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

onMounted(() => {
  store.fetchMeditation()
  timerQuery.value = route.params.duration_min;
  totalSeconds.value = Number(timerQuery.value * 60)
  remainingSeconds.value = totalSeconds.value
})

</script>

<template>
  <MainHeader />
  <div class="p-base">
    <template v-for="item in store.meditation" :key="item.id">
      <div v-if="item.duration_min == timerQuery" class="df fdc aic">
        <div class="timer-min">{{ formatTime(remainingSeconds) }}</div>
        <div class="timer-title">{{ item.title }}</div>
        <div class="timer-desc">{{ item.description }}</div>
        <div class="timer-control">
          <button @click="routerBack">
            <img src="../assets/back-ico.svg" alt="">
          </button>
          <div class="timer-control__center">
            <button v-if="!isRunning" @click="timerStart">
              <img src="../assets/play-ico.svg" alt="">
            </button>
            <button v-else @click="timerStop">
              <img src="../assets/stop-ico.svg" alt="">
            </button>
          </div>
          <button @click="timerReset">
            <img src="../assets/reset-ico.svg" alt="">
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.timer-min {
  background-image: url(../assets/timer-bg.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 44px;
  width: 250px;
  height: 250px;
  margin-bottom: 25px;
  border-radius: 50%;
}
.timer-title {
  font-weight: 500;
  font-size: 35px;
}
.timer-desc {
  font-size: 25px;
  color: var(--white-500);
  margin-bottom: 25px;
}
.timer-control {
  display: flex;
  gap: 25px;
  align-items: center;
}
.timer-control__center {
  width: 75px;
  height: 75px;
}
</style>
