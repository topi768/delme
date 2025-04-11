<template>
  <div class="banner">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  title: string;
}>();
</script>

<style scoped lang="scss">
.banner {
  background-color: #2ecc71;
  color: #fff;
  padding: 10px 20px;
  font-size: 1.2rem;
  text-align: center;
}
</style>
