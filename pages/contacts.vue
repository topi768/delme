<template>
  <h4><span>Главная</span> / Контакты</h4>

  <div class="contacts">
    <div class="contacts__inner">
      <div class="contacts__text">
        <h2>Контакты</h2>
        <UIContactsList />
      </div>
      <div class="contacts__position">
        <Map></Map>
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
    }
  }
}
</style>
