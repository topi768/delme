<template>
    <section class="projects">
        <h3>Реализованные проекты</h3>
        <div class="projects__cards">

            <UIItemsProjectItem title="Дом в скандинавском 
стиле" :text="`Одноэтажный дом из газобетона габаритными размерами 
10.73 х 10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей
\nПостроен по индивидуальному проекту.`" imgSrc="/img/main/p2.png" />



            <UIItemsProjectItem title="Дом из газобетона" :text="`Одноэтажный дом габаритными размерами 15.2 х 9.7м. Приведенная площадь – 127.7 м.кв. 
                \n Три спальные комнаты, два сан.узла, большая кухня-гостиная с выходом на террасу. `"
                imgSrc="/img/main/p1.png" />

        </div>
    </section>
</template>

<style scoped lang="scss">
.projects {
    background: #f5f7f3;
    padding: 5%;

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



        .projects__card:nth-child(1n) {
            margin-right: 20px;
        }
    }
}
</style>