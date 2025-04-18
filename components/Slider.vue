<template>
  <div class="sliderWrapper">
    <div class="slider__text">
      <h2>Проектируем и строим загородные дома</h2>
      <p>
        Строим дома «под ключ»: от этапа проектирования и до финишной отделки
        помещений
      </p>
    </div>
    <div
      class="slider"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div v-for="(image, index) in slides" :key="index" class="slide">
        <img :src="image" :alt="`Slide ${index + 1}`" />
      </div>
    </div>

    <button
      class="arrow arrow--left"
      @click="prevSlide"
      :disabled="isAnimating"
    >
      <
    </button>
    <button
      class="arrow arrow--right"
      @click="nextSlide"
      :disabled="isAnimating"
    >
      >
    </button>

    <div class="dots">
      <span
        v-for="(image, index) in slides"
        :key="`dot-${index}`"
        class="dot"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const slides = ref(['/img/slide1.png', '/img/slide2.png', '/img/slide3.png']);
const currentSlide = ref(0);
const totalSlides = slides.value.length;
const isAnimating = ref(false);
const animationDuration = 500;

function nextSlide() {
  if (isAnimating.value) return;
  isAnimating.value = true;
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
  setTimeout(() => {
    isAnimating.value = false;
  }, animationDuration);
}

function prevSlide() {
  if (isAnimating.value) return;
  isAnimating.value = true;
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
  setTimeout(() => {
    isAnimating.value = false;
  }, animationDuration);
}

function goToSlide(index: number) {
  if (isAnimating.value || index === currentSlide.value) return;
  isAnimating.value = true;
  currentSlide.value = index;
  setTimeout(() => {
    isAnimating.value = false;
  }, animationDuration);
}
</script>

<style scoped lang="scss">
.sliderWrapper {
  position: relative;
  width: 90%;
  // max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;

  .slider {
    display: flex;
    transition: transform 0.5s ease;
    will-change: transform;
  }

  .slide {
    min-width: 100%;
    height: 500px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    background-color: $color-primary;
    padding: 15px;
    color: #fff;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    border-radius: 10px;
    user-select: none;
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.8;
    }

    &[disabled] {
      opacity: 0.5;
    }

    &--left {
      left: 15px;
    }
    &--right {
      right: 15px;
    }
    @media screen and (max-width: $breakpoint-lg) {
      display: none;
    }
  }

  .dots {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    @media screen and (max-width: $breakpoint-lg) {
      display: none;
    }
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #fff;
      opacity: 0.5;
      cursor: pointer;
      transition: all 0.3s ease;

      &.active {
        opacity: 1;
        background: $color-primary;
      }

      &:hover {
        opacity: 0.8;
        background: $color-primary;
      }
    }
  }
}
.slider__text {
  position: absolute;
  max-width: 50%;
  top: 50%;
  left: 5%;
  transform: translate(5%, -50%);
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  z-index: 1;
  h2 {
    font-family: $font-primary;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    color: #ffffff;
  }
  p {
    font-family: $font-secondary;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 135%;

    color: #ffffff;
  }
}
</style>
