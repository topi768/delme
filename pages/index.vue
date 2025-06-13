<template>
  <!-- <Banner title="Hello, World!" /> -->

  <div class="layout">
    <div class="content">
      <main>
        <Slider />
        <div class="about">
          <div class="about__text">
            <h3>Каждый проект для нас — важный</h3>
            <p>Мы строительная компания полного цикла.</p>
            <p>
              Вникаем во все детали, разрабатываем планировку будущего дома,
              продумываем конструктивные решения и общую архитектурную концепцию
            </p>
          </div>
          <div class="about__card">
            <img class="img" src="/img/icons/home.svg" alt="" />
            <h4>57 домов</h4>
            <p>спроектировали и построили “под ключ”</p>
          </div>
          <div class="about__card">
            <img class="img" src="/img/icons/calendar.svg" alt="" />
            <h4>14 лет</h4>
            <p>мы на рынке загородного строительства</p>
          </div>
        </div>
      </main>


      <UIListsProjectsList />

      <UIListsNewsList />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from '~/components/Slider.vue';
import MyButton from '~/components/UI/Buttons/MyButton.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

function handleOpenNews() {
  router.push('/news');
}
</script>

<style scoped lang="scss">
.about {
  display: flex;
  align-items: end;
  padding: 5%;

  @media screen and (max-width: $breakpoint-lg) {
    flex-direction: column;
    align-items: center;
  }

  .about__text {
    width: 60%;

    @media screen and (max-width: $breakpoint-lg) {
      width: 100%;
    }

    h3 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 38px;
      line-height: 120%;
    }
  }

  .about__card {
    margin: 20px 20px;
    width: 40%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 180px;
    // gap: 10px;
    background: #f5f7f3;
    border-radius: 20px;

    // height: 70%;
    @media screen and (max-width: $breakpoint-lg) {
      width: 100%;
    }

    img {
      width: 24px;
      height: 24px;
    }

    h4 {
      margin: 10px 0;
    }

    p {
      margin: 0;
    }
  }
}





.layout {
  display: flex;
  height: 100%;
  gap: 20px;
}

.content {
  flex: 1;
}

.img {
  width: 25%;
  min-width: 200px;
  // height: 25%;
  aspect-ratio: 1/1;
}

.content {
  font-family: var(--font-primary);
}

.left-column,
.right-column {
  font-family: var(--font-secondary);
}
</style>
