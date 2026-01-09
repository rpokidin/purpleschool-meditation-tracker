<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth-store'

const authStore = useAuthStore()
const router = useRouter()

function logout() {
  authStore.clearToken()
  router.push({ name: 'login' })
}
</script>

<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/logo.svg" alt="">
    </div>
    <nav class="nav">
      <ul>
        <li>
          <RouterLink to="/main" active-class="active">
            <div class="nav__ico">
              <img src="../assets/nav/play.svg" alt="">
            </div>
            <div class="nav__name">Медитация</div>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/statistics" active-class="active">
            <div class="nav__ico">
              <img src="../assets/nav/chart.svg" alt="">
            </div>
            <div class="nav__name">Статистика</div>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#" @click="logout">
            <div class="nav__ico">
              <img src="../assets/nav/exit.svg" alt="">
            </div>
            <div class="nav__name">Выход</div>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
}
.logo {
  height: 180px;
}
.nav ul {
  display: flex
}
.nav ul li {
  padding: 32px 60px;
}
.nav ul li:not(:last-child) {
  border-right: 3px solid rgba(58, 80, 81, 1)
}
.nav ul li a {
  text-align: center;
  opacity: .5;
  color: var(--white);
}
.nav__name {
  font-size: 22px;
}
.nav ul li a:hover,
.nav ul li a.active {
  opacity: 1;
}
</style>


