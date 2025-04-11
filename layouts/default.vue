<template>
  <div class="wrapper">
    <Header />
    <main class="main-content">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  ],
});
</script>

<style scoped lang="scss">
.wrapper {
  // display: flex;
  // flex-direction: column;
  // min-height: 100vh;
  // height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
