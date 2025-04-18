<template>
  <transition name="modal-fade">
    <div class="modal-overlay" v-if="modelValue" @click.self="close">
      <div class="modal-dialog">
        <button class="modal-close" @click="close">✕</button>
        <h2>Оставить заявку</h2>
        <form @submit.prevent="onSubmit">
          <input type="text" placeholder="Имя" v-model="name" required />
          <input type="tel" placeholder="Телефон" v-model="phone" required />
          <textarea placeholder="Сообщение" v-model="message" rows="4" />
          <button type="submit">Отправить</button>
        </form>
        <p>
          Нажимая на кнопку «Отправить», вы принимаете
          <span>пользовательское соглашение и политику конфиденциальности</span>
        </p>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

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
    if (!visible) {
      name.value = '';
      phone.value = '';
      message.value = '';
    }
  }
);
</script>

<style scoped lang="scss">
h2 {
  color: black;
}
form {
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin: 20px 0;
    padding: 20px;
    border-radius: 5px;
    border: none;
    outline: none;
    max-width: 100%;
    max-height: 250px;
    &:focus {
      border: 1px solid $color-primary;
      outline: none;
    }
  }
}
p {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;

  color: #757e8d;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-dialog {
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
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  background: #029f5933;
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
</style>
