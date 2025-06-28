<template>
  <div v-if="modelValue">
    <DialogRoot :open="modelValue" @update:open="close">
      <DialogPortal>
        <Transition name="modal-fade">
          <div class="modal-overlay">
            <DialogOverlay class="modal-overlay" />
            <DialogContent class="modal-dialog">
              <DialogClose asChild>
                <button class="modal-close" @click="close">✕</button>
              </DialogClose>

              <!-- accessibility -->
              <DialogTitle as="h2">Оставить заявку</DialogTitle>
              <DialogDescription as="p" class="consent-text">
                Заполните форму ниже, и мы с вами свяжемся.
              </DialogDescription>

              <form @submit.prevent="onSubmit">
                <input
                  placeholder="Имя"
                  v-model="name"
                  required
                  class="modal-input"
                />
                <input
                  v-maska
                  data-maska="+7-###-###-##-##"
                  type="tel"
                  placeholder="Телефон"
                  v-model="phone"
                  required
                  class="modal-input"
                />
                <textarea
                  placeholder="Сообщение"
                  v-model="message"
                  rows="4"
                  class="modal-input"
                />
                <button type="submit" class="modal-input button">
                  Отправить заявку
                </button>
              </form>

              <p class="consent-text">
                Нажимая на кнопку «Отправить», вы принимаете
                <span>
                  пользовательское соглашение и политику
                  конфиденциальности</span
                >
              </p>
            </DialogContent>
          </div>
        </Transition>
      </DialogPortal>
    </DialogRoot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue';
import {
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from 'reka-ui';
import { vMaska } from 'maska/vue';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (
    e: 'submit',
    payload: { name: string; phone: string; message: string }
  ): void;
}>();

const name = ref('');
const phone = ref('');
const message = ref('');

let originalBodyOverflow = '';
let originalBodyPaddingRight = '';
let observer: MutationObserver | null = null;

function lockBodyScroll() {
  // Сохраняем оригинальные стили
  originalBodyOverflow = document.body.style.overflow;
  originalBodyPaddingRight = document.body.style.paddingRight;

  // Заблокировать скролл
  document.body.style.overflow = 'hidden';
  // Принудительно обнулить paddingRight, чтобы не было сдвига
  document.body.style.paddingRight = '0px';

  // Наблюдатель за стилями, чтобы сбросить paddingRight, если он меняется
  observer = new MutationObserver(() => {
    if (document.body.style.paddingRight !== '0px') {
      document.body.style.paddingRight = '0px';
    }
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['style'],
  });
}

function unlockBodyScroll() {
  document.body.style.overflow = originalBodyOverflow || '';
  document.body.style.paddingRight = originalBodyPaddingRight || '';

  if (observer) {
    observer.disconnect();
    observer = null;
  }
  setTimeout(() => {
    document.body.style.overflow = originalBodyOverflow || '';
    document.body.style.paddingRight = originalBodyPaddingRight || '';
  }, 50);
}

function close() {
  emit('update:modelValue', false);
}

function onSubmit() {
  emit('submit', {
    name: name.value,
    phone: phone.value,
    message: message.value,
  });
  close();
}

watch(
  () => props.modelValue,
  visible => {
    if (visible) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
      name.value = '';
      phone.value = '';
      message.value = '';
    }
  }
);

onUnmounted(() => {
  unlockBodyScroll();
});
</script>

<style scoped lang="scss">
.button {
  width: 80% !important;
  margin: 0 10% !important;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-dialog {
  z-index: 9999;
  background: #f5f7f3;
  border-radius: 8px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
  position: relative;
  transform: translateY(-20px);
  transition: transform 0.3s ease;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #029f5933;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: $color-primary;
  padding: 10px;
  font-weight: 600;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
}

.modal-fade-enter-active .modal-dialog {
  transform: translateY(0);
}

.modal-input {
  margin: 20px 0;
  padding: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 100%;
  max-width: 100%;
  max-height: 250px;
  box-sizing: border-box;
}

.modal-input:focus {
  border: 1px solid $color-primary;
  outline: none;
}

.consent-text {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #757e8d;
}
</style>
