<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--btn-form);
  width: 305px;
  height: 60px;
  font-weight: 500;
  font-size: 20px;
  color: var(--white);
  border-radius: 10px;
}
button:hover {
  opacity: 0.9;
}
</style>
