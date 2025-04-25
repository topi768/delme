<template>
  <div class="Contacts">
    <a class="phone">+7 (900) 900-90-90</a>
    <a class="email">Info@gmail.com</a>
    <a class="location">г. Владивосток ул. Выселковая 49, стр. 3</a>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { contacts } from '@/data/contacts';
</script>

<style lang="scss" scoped>
.Contacts {
  display: flex;
  flex-direction: column;
  text-align: left;
  a {
    margin: 12px 0;
    font-size: 16px;
  }
  .phone::before {
    content: '';
    background-image: url('/img/icons/telephone.svg');
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 10px;
  }
  .email::before {
    content: '';
    background-image: url('/img/icons/email.svg');
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 10px;
  }
  .location::before {
    content: '';
    background-image: url('/img/icons/location.svg');
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 10px;
  }
}
</style>
