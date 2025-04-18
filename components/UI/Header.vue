<template>
  <header>
    <div @click="goHome" class="header__item logo">
      <UILogo />
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
      <UIButtonsMyButton>Оставить заявку</UIButtonsMyButton>
    </div>
    <div class="draver"><Draver /></div>
  </header>
</template>

<script setup lang="ts">
const router = useRouter();

function goHome() {
  router.push('/');
}
</script>
<style scoped lang="scss">
// $breakpoint-lg: 992px;

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
      cursor: pointer !important;
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
