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
      <section class="projects">
        <h3>Реализованные проекты</h3>
        <div class="projects__cards">
          <div class="projects__card">
            <div class="card__text">
              <h4>Дом в скандинавском стиле</h4>
              <p>
                Одноэтажный дом из газобетона габаритными размерами 10.73 х
                10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей
              </p>
              <p>Построен по индивидуальному проекту.</p>
            </div>

            <img src="/img/main/p2.png" alt="" />
          </div>
          <div class="projects__card">
            <div class="card__text">
              <h4>Дом из газобетона</h4>
              <p>
                Одноэтажный дом габаритными размерами 15.2 х 9.7м. Приведенная
                площадь – 127.7 м.кв.
              </p>
              <p>
                Три спальные комнаты, два сан.узла, большая кухня-гостиная с
                выходом на террасу.
              </p>
            </div>

            <img src="/img/main/p1.png" alt="" />
          </div>
        </div>
      </section>
      <section class="news">
        <div class="news__header">
          <h3>Новости</h3>
          <MyButton @click="handleOpenNews" :is-hollow="true"
            >Все новости</MyButton
          >
        </div>
        <div class="news__cards">
          <div class="news__card">
            <img class="card__img" src="/img/news/n1.png" alt="" />
            <p class="card__date">15.04.2023</p>
            <div class="card__text">
              <h4>Новый дом в стиле барокко</h4>
              <p>
                Одноэтажный дом из газобетона габаритными размерами 10.73 х
                10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей
              </p>
            </div>
          </div>
          <div class="news__card">
            <img class="card__img" src="/img/news/n2.png" alt="" />
            <p class="card__date">15.04.2023</p>
            <div class="card__text">
              <h4>Как сделать строительство дешевле?</h4>
              <p>
                Одноэтажный дом из газобетона габаритными размерами 10.73 х
                10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей
              </p>
            </div>
          </div>
          <div class="news__card">
            <img class="card__img" src="/img/news/n3.png" alt="" />
            <p class="card__date">15.04.2023</p>
            <div class="card__text">
              <h4>Новый дом в стиле барокко</h4>
              <p>
                Одноэтажный дом из газобетона габаритными размерами 10.73 х
                10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей
              </p>
            </div>
          </div>
          <div class="news__card">
            <img class="card__img" src="/img/news/n4.png" alt="" />
            <p class="card__date">15.04.2023</p>
            <div class="card__text">
              <h4>Новый дом в стиле барокко</h4>
              <p>
                Одноэтажный дом из газобетона габаритными размерами 10.73 х
                10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей
              </p>
            </div>
          </div>
        </div>
      </section>
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

.projects {
  background: #f5f7f3;
  padding: 20px;

  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 120%;
    color: #000000;
  }
  .projects__cards {
    display: flex;

    @media screen and (max-width: $breakpoint-xl) {
      overflow-x: scroll;
      width: 90vw;
    }
    .projects__card {
      display: flex;
      align-items: center;
      // margin: 20px;
      border-radius: 20px;
      background: #fff;
      // padding: 20px 0;
      .card__text {
        margin: 0 20px;
      }
      img {
        max-width: 300px;
        max-height: 300px;
      }
    }
    .projects__card:nth-child(1n) {
      margin-right: 20px;
    }
  }
}
.news {
  padding: 20px;
  .news__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 120%;
  }

  .news__cards {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width: $breakpoint-lg) {
      overflow-x: scroll;
      width: 90vw;
      flex-wrap: nowrap;
      justify-content: left;
    }
    .news__card {
      display: flex;
      flex-direction: column;
      margin: 0 20px;
      max-width: 300px;
      p {
        color: #666666;
      }
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
