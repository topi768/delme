<template>
  <footer>
    <div class="footer__item">
      <div class="item__logo">
        <Logo1 />
        <p>zagdom</p>
      </div>
      <p class="item__minorLinks">© zagdom, 2021</p>
    </div>
    <div class="footer__item">
      <nav>
        <a>Реализованные проекты</a>
        <a>Новости</a>
        <a>Контакты</a>
      </nav>
      <p class="item__minorLinks">Политика конфиденциальности</p>
    </div>
    <div class="footer__item footer__contacts">
      <a href="+7 (900) 900-90-90">+7 (900) 900-90-90</a>
      <a>Info@gmail.com</a>
      <a>г. Владивосток ул. Выселковая 49, стр. 3</a>
      <p class="item__minorLinks">Пользовательское соглашение</p>
    </div>
    <div class="footer__item footer__button">
      <Button>Оставить заявку</Button>
    </div>

    <!-- Новый контейнер для минорных ссылок, видимый только на мобильном -->
    <div class="footer__mobileMinorLinks">
      <p>© zagdom, 2021</p>
      <p>Политика конфиденциальности</p>
      <p>Пользовательское соглашение</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Никакой особой логики здесь не требуется
</script>

<style scoped lang="scss">
footer {
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #254741;
  color: #fff;
  padding: 40px 20px;
  font-size: 1.2rem;
  text-align: center;

  .footer__mobileMinorLinks {
    display: none;
    flex-direction: column;
    margin-top: 20px;

    p {
      cursor: pointer;
      margin-top: auto;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 121%;
      color: #ffffff;
      opacity: 0.6;
      transition: 0.2s;
      text-align: left;
      &:hover {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: $breakpoint-md) {
    flex-direction: column;

    .item__minorLinks {
      display: none;
    }

    .footer__mobileMinorLinks {
      display: flex;
    }
    .footer__button {
      display: flex;
      align-items: center;
      margin-right: auto;
    }
  }

  .footer__item {
    display: flex;
    flex-direction: column;

    a {
      margin: 2% 0;
      text-decoration: none;
      list-style: none;
      padding: 0;
      text-align: left;
      cursor: pointer;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      color: #ffffff;
      transition: 0.2s;
    }

    a:hover {
      opacity: 0.6;
    }

    .item__logo {
      display: flex;
      p {
        color: #fff;
        font-size: 1.6rem;
        margin: 0;
        margin-left: 10px;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
    }

    .item__minorLinks {
      cursor: pointer;
      margin-top: auto;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 121%;
      color: #ffffff;
      opacity: 0.6;
      transition: 0.2s;
      text-align: left;
      &:hover {
        opacity: 1;
      }
    }
  }

  .footer__contacts {
    a:nth-child(1)::before {
      content: '';
      background-image: url('/img/icons/telephone.svg');
      width: 16px;
      height: 16px;
      display: inline-block;
      margin-right: 10px;
    }
    a:nth-child(2)::before {
      content: '';
      background-image: url('/img/icons/email.svg');
      width: 16px;
      height: 16px;
      display: inline-block;
      margin-right: 10px;
    }
    a:nth-child(3)::before {
      content: '';
      background-image: url('/img/icons/location.svg');
      width: 16px;
      height: 16px;
      display: inline-block;
      margin-right: 10px;
    }
  }
}
</style>
