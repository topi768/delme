<template>
  <header>
    <div @click="goHome" class="header__item logo">
      <UILogo />
      <h1>zagdom</h1>
    </div>

    <nav class="header__item">
      <ul>
        <li>
          <NuxtLink :to="'№'" :class="{ active: route.path === '/projects' }"
            >Реализованные проекты</NuxtLink
          >
        </li>
        <li>
          <NuxtLink :to="'/news'" :class="{ active: route.path === '/news' }"
            >Новости</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            :to="'/contacts'"
            :class="{ active: route.path === '/contacts' }"
            >Контакты</NuxtLink
          >
        </li>
      </ul>
    </nav>

    <div class="header__item phone">
      <a class="phone__link" href="+7 (900) 900-90-90">+7 (900) 900-90-90</a>
      <UIButtonsMyButton>Оставить заявку</UIButtonsMyButton>
    </div>

    <div class="draver"><Draver /></div>
  </header>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

function goHome() {
  router.push('/');
}
</script>
<style scoped lang="scss">
nav ul li a {
  text-decoration: none;
  margin: 0;
  padding: 0;
  margin-right: 20px;
  transition: all 0.3s ease;

  &.active {
    color: $color-primary;
    font-weight: 600;
  }
  &:hover {
    opacity: 0.5;
  }
}

.logo {
  cursor: pointer;
}
header {
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header__item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    .phone__link {
      margin-right: 24px;
      text-decoration: none;
      color: #254741;
      white-space: nowrap;

      &::before {
        content: '';
        background-image: url('/img/icons/telephone.svg');
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 4px;
      }
    }
  }

  h1 {
    margin: 0 0 0 2%;
    color: #254741;
  }

  nav ul {
    display: flex;
    list-style-type: none;
    align-items: center;

    li a {
      text-decoration: none;
      margin: 0;
      padding: 0;
      color: #666666;
      margin-right: 20px;
    }
  }

  @media screen and (max-width: $breakpoint-lg) {
    .header__item {
      display: none;
    }
    .logo {
      display: flex;
      flex-wrap: nowrap;
    }
  }

  .draver {
    display: none;
    @media screen and (max-width: $breakpoint-lg) {
      display: block;
    }
  }
}
</style>
