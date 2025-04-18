<template>
  <footer>
    <div class="footer__item">
      <div @click="goHome" class="item__logo">
        <UILogo1 />
        <p>zagdom</p>
      </div>
      <p class="item__minorLinks">© zagdom, 2021</p>
    </div>
    <div class="footer__item">
      <nav>
        <a>Реализованные проекты</a>
        <a>Новости</a>
        <a>Контакты</a>
      </nav>
      <p class="item__minorLinks">Политика конфиденциальности</p>
    </div>
    <div class="footer__item footer__contacts">
      <a href="+7 (900) 900-90-90">+7 (900) 900-90-90</a>
      <a>Info@gmail.com</a>
      <a>г. Владивосток ул. Выселковая 49, стр. 3</a>
      <p @click="toggleCat" class="item__minorLinks">
        Пользовательское соглашение
      </p>
    </div>
    <div class="footer__item footer__button">
      <UIButtonsMyButton>Оставить заявку</UIButtonsMyButton>
    </div>

    <div class="footer__mobileMinorLinks">
      <p>© zagdom, 2021</p>
      <p>Политика конфиденциальности</p>
      <p @click="toggleCat">Пользовательское соглашение</p>
    </div>
  </footer>

  <teleport :to="catPortalTarget">
    <div class="cat-wrapper" v-show="isOpenOiiaCat">
      <a
        href="https://www.youtube.com/watch?v=dVHdUakiEo4&list=RDo6wtDPVkKqI&index=3"
        class="cat-link"
      >
        <img class="footer__cat" src="/img/oiia_cat.gif" alt="cat" />
      </a>
    </div>
  </teleport>

  <teleport :to="catPortalTarget">
    <div class="audio-control" v-if="isOpenOiiaCat">
      <audio ref="musicAudio" src="/cat.mp3" loop autoplay></audio>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        v-model="volume"
        @input="updateVolume"
      />
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const isOpenOiiaCat = ref(false);
const catPortalTarget = ref('body');
const volume = ref(0);
const musicAudio = ref<HTMLAudioElement | null>(null);

const router = useRouter();

function goHome() {
  router.push('/');
}

function toggleCat() {
  isOpenOiiaCat.value = !isOpenOiiaCat.value;
}
watch(volume, newVal => {
  if (musicAudio.value) {
    musicAudio.value.volume = newVal;
  }
});

watch(isOpenOiiaCat, isOpen => {
  if (musicAudio.value) {
    musicAudio.value.volume = 0;
    if (isOpen) {
      musicAudio.value.play().catch(() => {});
    } else {
      musicAudio.value.pause();
    }
  }
});

function updateVolume() {}
</script>

<style scoped lang="scss">
footer {
  margin-top: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #254741;
  color: #fff;
  padding: 40px 20px;
  font-size: 1.2rem;
  text-align: center;

  .footer__mobileMinorLinks {
    display: none;
    flex-direction: column;
    margin-top: 20px;

    p {
      cursor: pointer;
      margin-top: auto;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 121%;
      color: #ffffff;
      opacity: 0.6;
      transition: 0.2s;
      text-align: left;

      &:hover {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: $breakpoint-md) {
    flex-direction: column;

    .item__minorLinks {
      display: none;
    }

    .footer__mobileMinorLinks {
      display: flex;
    }
    .footer__button {
      display: flex;
      align-items: center;
      margin-right: auto;
    }
  }

  .footer__item {
    display: flex;
    flex-direction: column;

    a {
      margin: 2% 0;
      text-decoration: none;
      list-style: none;
      padding: 0;
      text-align: left;
      cursor: pointer;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      color: #ffffff;
      transition: 0.2s;
    }

    a:hover {
      opacity: 0.6;
    }

    .item__logo {
      display: flex;
      cursor: pointer;
      p {
        color: #fff;
        font-size: 1.6rem;
        margin: 0;
        margin-left: 10px;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
    }

    .item__minorLinks {
      cursor: pointer;
      margin-top: auto;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 121%;
      color: #ffffff;
      opacity: 0.6;
      transition: 0.2s;
      text-align: left;

      &:hover {
        opacity: 1;
      }
    }
  }

  .footer__contacts {
    a:nth-child(1)::before {
      content: '';
      background-image: url('/img/icons/telephone.svg');
      width: 16px;
      height: 16px;
      display: inline-block;
      margin-right: 10px;
    }
    a:nth-child(2)::before {
      content: '';
      background-image: url('/img/icons/email.svg');
      width: 16px;
      height: 16px;
      display: inline-block;
      margin-right: 10px;
    }
    a:nth-child(3)::before {
      content: '';
      background-image: url('/img/icons/location.svg');
      width: 16px;
      height: 16px;
      display: inline-block;
      margin-right: 10px;
    }
  }
}

.cat-wrapper {
  cursor: pointer;
  position: fixed;
  z-index: 9999;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00);
  background-size: 400% 400%;
  animation:
    catMove 1.5s infinite alternate ease,
    psychedelicBG 0.3s infinite ease-in-out;
}

@keyframes catMove {
  0% {
    bottom: 20px;
    right: 20px;
  }
  25% {
    bottom: 70%;
    right: 10%;
  }
  50% {
    bottom: 50%;
    right: 80%;
  }
  75% {
    bottom: 10%;
    right: 50%;
  }
  100% {
    bottom: 20px;
    right: 20px;
  }
}

@keyframes psychedelicBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.cat-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.footer__cat {
  width: 100px;
  height: auto;
  z-index: 2;
  pointer-events: auto;
}

/* Стили для аудио-контрола */
.audio-control {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 10000;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  border-radius: 8px;
  color: #fff;
}

.audio-control input[type='range'] {
  margin-left: 10px;
}
</style>
