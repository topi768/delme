<template>
  <!-- <Banner title="Hello, World!" /> -->

  <div class="layout">
    <div class="left-column">
      <p>Левая колонка</p>
    </div>

    <div class="content">
      <p>Сайт</p>
      <img class="img" src="/img/image.png" alt="" />

      <div class="cards-container">
        <Card>И там</Card>
        <Card>И сям</Card>
      </div>

      <p>{{ message }}</p>
      <button @click="toggleMessage">Нажми меня</button>
    </div>

    <div class="right-column">
      <p>Правая колонка</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const defaultText = 'Амогус';
const changedText = 'Абобус';

const message = ref(defaultText);
const isChanged = ref(false);

const toggleMessage = () => {
  isChanged.value = !isChanged.value;
  message.value = isChanged.value ? changedText : defaultText;
};
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  height: 100%;
  gap: 20px;
}

.left-column,
.right-column {
  width: 20%;
  // height: 300%;
  background-color: #f4f4f4;
  padding: 10px;
  text-align: center;
  // height: 100%;
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
