<!-- components/Card.vue -->
<template>
    <div class="card">
      <slot>
        Default Card Content
      </slot>
    </div>
  </template>

  <script setup lang="ts">
  </script>

  <style scoped lang="scss">
  @use '@/assets/scss/mixins' as *;

  .card {
    @include btn-styles(#b2f5ea, #000);
    margin: 0;
    text-align: center;
    min-width: 60px;
    max-height: 40px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
  </style>
