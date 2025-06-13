<template>
    <div class="projects__card">
        <div class="card__text">
            <h4>{{ title }}</h4>
            <div class="card__paragraphs" v-html="formattedText"></div>
        </div>
        <img :src="imgSrc" />
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
.projects__cards {
    display: flex;

    @media screen and (max-width: $breakpoint-xl) {
        overflow-x: scroll;
        width: 90vw;
    }

    .projects__card {
        display: flex;
        align-items: center;
        border-radius: 20px;
        background: #fff;

        .card__text {
            margin: 0 20px;
        }

        img {
            max-width: 300px;
            max-height: 300px;
        }

        .card__paragraphs p {
            margin-bottom: 0.5rem;
        }
    }

    .projects__card+.projects__card {
        margin-left: 20px;
    }
}
</style>
