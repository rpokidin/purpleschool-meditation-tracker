<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue';
import InputDefault from '@/components/InputDefault.vue';
import { useAuthStore } from '@/stores/auth-store'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const form = ref<{ username?: string; password?: string }>({})
const authStore = useAuthStore()
const router = useRouter()

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({ name: 'main' })
    }
  },
)

function onSubmit(event: Event) {
  event.preventDefault()
  if (!form.value.username || !form.value.password) {
    return
  }
  authStore.login(form.value.username, form.value.password)
  form.value = {}
  console.log(authStore.getToken);
}
</script>

<template>
  <div class="bg-main">
    <div class="df fdc jcc aic h100vh">
      <img src="../assets/logo-big.svg" alt="">
      <form action="" class="df fdc" @submit="onSubmit">
        <InputDefault v-model="form.username" placeholder="Имя пользователя" />
        <InputDefault v-model="form.password" placeholder="Пароль" type="password" />
        <ButtonDefault type="submit">Войти в приложение</ButtonDefault>
      </form>
    </div>
  </div>
</template>
