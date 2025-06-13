<template>
    <section class="news">
        <div class="news__header">
            <h3>Новости</h3>
            <MyButton class="news__button" @click="$router.push('/news')" :is-hollow="true">Все новости</MyButton>
        </div>
        <div class="news__cards">
            <UIItemsNewsItem v-for="item in news" :key="item.id" :title="item.title" :date="item.date"
                :imgSrc="item.imgSrc" :excerpt="item.excerpt" />



        </div>
    </section>
</template>

<script setup lang="ts">
const news = ref([
    {
        id: 1,
        title: 'Как сделать строительство дешевле?',
        date: '20 авг 2021',
        imgSrc: '/img/news/n1.png',
        excerpt: 'Строительство дома можно сделать дешевле — выбрав проект...'
    },
    {
        id: 2,
        title: 'Почему Гуд Вилл строит лучшие дома',
        date: '20 авг 2021',
        imgSrc: '/img/news/n2.png',
        excerpt: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...'
    },
    {
        id: 3,
        title: 'Преимущества и недостатки частного дома',
        date: '20 авг 2021',
        imgSrc: '/img/news/n3.png',
        excerpt: 'Первое и главное: строим дом индивидуально для вас, по вашим...'
    },
    {
        id: 4,
        title: 'Из чего мы строим дома в ипотеку?',
        date: '20 авг 2021',
        imgSrc: '/img/news/n4.png',
        excerpt: 'Самый популярный вопрос наших клиентов касается материалов, которы...'
    }
])
</script>

<style lang="scss" scoped>
.news {
    padding: 5%;

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


    }
}

.news__button {
    cursor: pointer;
}
</style>