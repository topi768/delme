<template>
    <header>
      <div class="header__item logo" >
        <Logo />
        <h1>zagdom</h1>
      </div>

      <nav class="header__item">
        <ul>
          <li>
            <NuxtLink to="#">Реализованные проекты</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Новости</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Контакты</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="header__item phone">
        <a class="phone__link" href="+7 (900) 900-90-90">+7 (900) 900-90-90</a>
        <Button>Оставить заявку</Button>
      </div>
    </header>
  </template>

  <script setup lang="ts">
import Logo from './Logo.vue';

  </script>

  <style scoped lang="scss">
  header {
    background-color: #eee;
    // padding: 30px 40px;
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
      }
      .phone__link::before {
        content: '';
        background-image: url('/img/icons/telephone.svg');
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 4px;
      }
    }
   h1 {
      margin: 0 0 0 2%;

color: #254741;
    }
    nav {
      ul {
        display: flex;
        list-style-type:  none;
        align-items: center;
        li {
          a {
        text-decoration: none;
        list-style: none;
        margin: 0;
        padding: 0;
        color: #666666;
        margin-right: 20px;
          }
        }
    }
  }
}
  </style>
