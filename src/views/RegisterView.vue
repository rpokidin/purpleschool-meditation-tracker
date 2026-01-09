<script setup lang="ts">
import ButtonDefault from '@/components/ButtonDefault.vue';
import InputDefault from '@/components/InputDefault.vue';
import { useRegisterStore } from '@/stores/register-store'
import { ref } from 'vue';

const form = ref<{ username?: string; email?: string; password?: string }>({})
const registerStore = useRegisterStore()

function onSubmit(event: Event) {
  event.preventDefault()
  if (!form.value.username || !form.value.email || !form.value.password) {
    return
  }
  registerStore.register(form.value.username, form.value.email, form.value.password)
  form.value = {}
}
</script>

<template>
  <div class="bg-main">
    <div class="df fdc jcc aic h100vh">
      <img src="../assets/logo-big.svg" alt="">
      <form action="" class="df fdc" @submit="onSubmit">
        <InputDefault v-model="form.email" placeholder="Электронная почта" />
        <InputDefault v-model="form.username" placeholder="Имя пользователя" />
        <InputDefault v-model="form.password" placeholder="Пароль" />
        <ButtonDefault type="submit">Создать аккаунт</ButtonDefault>
      </form>
    </div>
  </div>
</template>
