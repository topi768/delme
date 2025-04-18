<template>
  <h4><span>Главная</span> / Контакты</h4>

  <div class="contacts">
    <div class="contacts__inner">
      <div class="contacts__text">
        <h2>Контакты</h2>
        <div class="contacts__links">
          <a href="+7 (900) 900-90-90">+7 (900) 900-90-90</a>
          <a>Info@gmail.com</a>
          <a>г. Владивосток ул. Выселковая 49, стр. 3</a>
        </div>
      </div>
      <div class="contacts__position">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11041.275630372087!2d39.82322373001738!3d46.22400244514652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e4cbffce621131%3A0x7f5fc17c1211a2c6!2z0JLQtdGB0LXQu9Cw0Y8g0JbQuNC30L3RjCwg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksINCg0L7RgdGB0LjRjywgMzUyMDU4!5e0!3m2!1sru!2s!4v1744989280966!5m2!1sru!2s"
          width="450"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
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
a {
  text-decoration: none;
  color: black;
}
.contacts {
  display: flex;
  justify-content: center;
  height: 100%;
  .contacts__inner {
    display: flex;
    @media screen and (max-width: $breakpoint-lg) {
      flex-direction: column;
      iframe {
        height: 600px;
        width: 100%;
      }
    }
    .contacts__text {
      padding: 0 60px;
      h2 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 46px;
        line-height: 120%;
        margin: 0;
      }
      .contacts__links {
        display: flex;
        flex-direction: column;
        a {
          margin: 12px 0;
        }
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
  }
}
</style>
