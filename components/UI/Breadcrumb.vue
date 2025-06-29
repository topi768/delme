<template>
  <h4>
    <span>Главная</span><template v-if="crumb"> / {{ crumb }}</template>
  </h4>
</template>

<script setup lang="ts">
import { useRoute } from '#imports';

const route = useRoute();

const crumb = computed(() => {
  // берем значение из definePageMeta({ breadcrumb: 'Контакты' })
  return ((route.meta as any).breadcrumb as string) || '';
});
</script>

<style lang="scss" scoped>
span {
  color: $color-primary;
}
h4 {
  margin: 40px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 135%;
  color: grey;
}
</style>
