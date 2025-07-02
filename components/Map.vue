<template>
  <img class="map" src="/public/img/map.png" alt="" />
</template>
<!-- <template>
  <client-only>
    <div id="ymap" style="width: 100%; height: 450px"></div>
  </client-only>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const initYandexMap = () => {
  ymaps.ready(() => {
    const map = new ymaps.Map('ymap', {
      center: [43.149169, 131.951538],
      zoom: 11,
      controls: [],
    });

    const customPlacemark = new ymaps.Placemark(
      [43.149169, 131.951538],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: '/img/icons/locationMark.svg',
        iconImageSize: [43, 32],
        iconImageOffset: [-16, -32],
      }
    );

    map.geoObjects.add(customPlacemark);
  });
};

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
  script.onload = initYandexMap;
  document.head.appendChild(script);
});
</script> -->
<style scoped lang="scss">
.map {
  max-width: 544px;
  // height: auto;
  object-fit: cover;
}
</style>
