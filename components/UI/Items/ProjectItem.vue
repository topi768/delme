<template>
    <div class="project__card">
        <img class="card__img--mobile" :src="imgSrc" />

        <div class="card__text">
            <h4>{{ title }}</h4>
            <div class="card__paragraphs" v-html="formattedText"></div>
        </div>
        <img class="card__img" :src="imgSrc" />
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        title: { type: String, required: true },
        text: { type: String, required: true },
        imgSrc: { type: String },
    },
    computed: {
        formattedText() {

            return this.text
                .trim()
                .replace(/\r\n/g, '\n')
                .replace(/\n{2,}/g, paragraph => '</p><p>')
                .split('\n')
                .join('<br>')
                .replace(/^(.*)/, '<p>$1')
                .replace(/(.*)$/, '$1</p>');
        }
    }
}
</script>

<style scoped lang="scss">
.project__card {
    display: flex;
    align-items: center;
    border-radius: 20px;
    background: #fff;
    margin: 0 20px;
    min-width: 300px;

    .card__text {
        margin: 0 20px;
    }

    .card__img {
        max-width: 300px;
        max-height: 300px;
    }

    .card__paragraphs p {
        margin-bottom: 0.5rem;

    }



    .card__img--mobile {
        display: none;
    }

    @media screen and (max-width: $breakpoint-xl) {
        // overflow-x: scroll;
        // width: 90vw;
        // justify-content: space-between;
        flex-direction: column;
        width: 40%;

        .card__img {
            display: none;
        }



        .card__img--mobile {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            width: 100%;
            display: block;
            height: 40%;
            object-fit: cover;

        }
    }



}
</style>
