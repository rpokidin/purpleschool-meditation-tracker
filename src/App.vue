<script setup lang="ts">
import Meditations from './components/MeditationList.vue';

</script>

<template>
  <header class="header">
    <div class="logo">
      <img src="./assets/logo.svg" alt="">
    </div>
    <nav class="nav">
      <ul>
        <li><a href="#">Медитация</a></li>
        <li><a href="#">Статистика</a></li>
        <li><a href="#">Выход</a></li>
      </ul>
    </nav>
  </header>
  <div class="p-base df jcsb">
    <div class="hello">hello</div>
    <Meditations />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-size: 22px;
  color: var(--white-500);
}
.nav ul li a:hover {
  color: var(--white-900);
}
.meditation {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}
</style>
