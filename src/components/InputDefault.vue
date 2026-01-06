<script setup lang="ts">
const data = defineModel<string>()
</script>

<template>
  <input v-model="data" />
</template>

<style scoped>
input {
  background-color: transparent;
  width: 305px;
  font-size: 18px;
  color: var(--white);
  padding: 10px;
  border: none;
  border-bottom: 1px solid var(--white);
}
input::placeholder {
  color: var(--text-from);
}
</style>
