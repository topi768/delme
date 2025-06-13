// src/components/NewsCard.vue
<template>
    <div class="news__card">
        <img class="news__card__img" :src="imgSrc" :alt="title" />
        <p class="news__card__date">{{ date }}</p>
        <div class="news__card__content">
            <h4 class="news__card__title">{{ title }}</h4>
            <p class="news__card__excerpt">{{ excerpt }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsCard',
    props: {
        imgSrc: { type: String, required: true },
        date: { type: String, required: true },
        title: { type: String, required: true },
        excerpt: { type: String, required: true }
    }
};
</script>

<style scoped lang="scss">
.news__card {
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    min-width: 300px;
    width: 20%;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        transform: translateY(-8px);

    }

    &__img {
        width: 100%;
        border-radius: 8px;
        // object-fit: cover;
    }

    &__date {
        margin: 8px 0;
        color: #666;
        font-size: 14px;
    }

    &__content {
        h4 {
            margin-bottom: 4px;
            font-size: 18px;
            font-weight: 600;
        }

        p {
            margin: 0;
            font-size: 16px;
            color: #333;
            line-height: 1.4;
        }
    }
}
</style>
