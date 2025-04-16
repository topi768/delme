<template>
  <button class="ButtonArrow">
    {{ orientation === 'l' ? '<' : '>' }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  orientation: 'l' | 'r';
}>();
</script>

<style scoped lang="scss">
.ButtonArrow {
  background: $color-primary;
}
</style>
