<template>
  <div class="news">
    <h4 class="route"><span>Главная</span> / Новости</h4>

    <h3 ref="scrollAnchor">Новости</h3>
    <div class="news__cards">
      <UIItemsNewsItem v-for="item in newsVisible" :key="item.id" :title="item.title" :date="item.date"
        :imgSrc="item.img" :excerpt="item.text" />


      <Pagination @click-pagination="handleClickPagination" :maxValue="countPageOnPagination" />
    </div>
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

.route {
  margin: 40px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 135%;

  color: grey;
}

.news {
  padding: 40px;

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


  }
}
</style>
