<template>
  <div class="news">
    <h4><span>Главная</span> / Новости</h4>
    <h3 ref="scrollAnchor">Новости</h3>
    <div class="news__cards">
      <div class="news__card" v-for="item in newsVisible" :key="item.id">
        <img class="card__img" :src="item.img" alt="" />
        <p class="card__date">{{ item.date }}</p>
        <div class="card__text">
          <h4>{{ item.title }}</h4>
          <p>
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
    <Pagination
      @click-pagination="handleClickPagination"
      :maxValue="countPageOnPagination"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { newsData } from '@/data/news';

const news = ref(newsData);
const indexPage = ref(1);
const MAX_NEWS_ON_PAGE = 12;
const newsVisible = ref(newsData.slice(0, MAX_NEWS_ON_PAGE));
const scrollAnchor = ref<HTMLElement>();

const totalCountNews = newsData.length;
const countPageOnPagination = Math.ceil(totalCountNews / MAX_NEWS_ON_PAGE);

async function handleClickPagination(a: number) {
  indexPage.value = a;
  newsVisible.value = news.value.slice(
    (indexPage.value - 1) * MAX_NEWS_ON_PAGE,
    indexPage.value * MAX_NEWS_ON_PAGE
  );

  await nextTick();
  if (scrollAnchor.value) {
    scrollAnchor.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
</script>

<style lang="scss">
span {
  color: $color-primary;
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
  h4 {
    margin: 0;
  }
  .news__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .news__card {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      margin: 20px 20px;
      max-width: 300px;
      transition: 0.3s;
      p {
        color: #666666;
      }
    }
    .news__cards:hover {
      transform: translateY(20px);
    }
  }
}
</style>
