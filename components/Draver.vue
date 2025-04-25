<template>
  <div class="burger" @click="toggleDrawer" :class="{ open: drawerOpen }">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div v-show="drawerOpen" class="overlay" @click="toggleDrawer"></div>

  <div class="draver" :class="{ open: drawerOpen }">
    <nav>
      <NuxtLink :to="'/'">Реализованные проекты</NuxtLink>
      <NuxtLink :to="'/news'">Новости</NuxtLink>
      <NuxtLink :to="'/contacts'">Контакты</NuxtLink>
    </nav>

    <div class="draver__contacts">
      <a :href="`tel:${contacts.phone}`">{{ contacts.phone }}</a>
      <a>{{ contacts.email }}</a>
      <a>{{ contacts.address }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { contacts } from '~/data/contacts';
const router = useRouter();
const route = useRoute();

const drawerOpen = ref<boolean>(false);

const toggleDrawer = (): void => {
  drawerOpen.value = !drawerOpen.value;
};
const handleResize = (): void => {
  if (window.innerWidth > 992) {
    drawerOpen.value = false;
  }
};
onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

watch(drawerOpen, isOpen => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<style lang="scss" scoped>
.burger {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 30%;
  width: 50px;
  height: 50px;
  background: $color-primary;
  z-index: 100;
  cursor: pointer;
  span {
    transform-origin: center;
    display: flex;
    flex-direction: column;
    width: 20px;
    height: 2px;
    background-color: #fff;
    margin: 2px 0;
    transition: all 0.2s ease-in-out;
  }
}
.burger.open {
  span {
    &:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(4px, -4px);
    }
  }
}

.draver {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  height: 100%;
  background: $color-primary;
  width: 65%;
  z-index: 99;
  transform: translateX(100%);
  transition: all 0.2s ease-in-out;
  padding: 80px 20px 20px 20px;
  nav {
    display: flex;
    flex-direction: column;

    a {
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      font-size: 1.6rem;
      margin: 3% 0;

      font-family: $font-secondary;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 120%;
      transition: 0.3s;
    }
    a:hover {
      opacity: 0.6;
    }
  }
  .draver__contacts {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    a {
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      margin: 3% 0;
      display: flex;
      align-items: center;

      font-family: $font-primary;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      transition: 0.3s;
      &:hover {
        opacity: 0.6;
      }
    }
    a:nth-child(1)::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      background-color: #fff;
      mask: url('/img/icons/telephone.svg') no-repeat center;
      mask-size: 16px 16px;
      margin-right: 10px;
    }
    a:nth-child(2)::before {
      content: '';
      background-color: #fff;
      mask: url('/img/icons/email.svg') no-repeat center;
      mask-size: 16px 16px;
      width: 16px;
      height: 16px;
      display: inline-block;
      margin-right: 10px;
    }
    a:nth-child(3)::before {
      content: '';
      background-color: #fff;
      mask: url('/img/icons/location.svg') no-repeat center;
      mask-size: 16px 16px;
      width: 16px;
      height: 16px;
      display: inline-block;
      margin-right: 10px;
    }
  }
}
.draver.open {
  transform: translateX(0%);
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 90;
  transition: all 0.3s ease-in-out;
}
</style>
