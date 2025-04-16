<template>
  <div class="wrapper">
    <UIHeader />
    <main class="main-content">
      <NuxtPage />
    </main>
    <UIFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
