<template>
  <!-- <Banner title="Hello, World!" /> -->

  <div class="layout">
    <div class="content">
      <p>Сайт</p>
      <UIButtonArrow orientation="r" />

      <img class="img" src="/img/image.png" alt="" />

      <div class="cards-container"></div>

      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  height: 100%;
  gap: 20px;
}

.content {
  flex: 1;
  margin: 20px;
}

.img {
  width: 25%;
  min-width: 200px;
  // height: 25%;
  aspect-ratio: 1/1;
}

.cards-container {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}
.content {
  font-family: var(--font-primary);
}

.left-column,
.right-column {
  font-family: var(--font-secondary);
}
</style>
