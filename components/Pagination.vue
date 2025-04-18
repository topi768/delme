<template>
  <div class="Pagination">
    <UIButtonsMyButton
      :isDisabled="cur_index <= 1"
      @click="handleDecrement"
      style="margin-right: 20px"
    >
      &#60;
    </UIButtonsMyButton>

    <UIButtonsMyButton
      v-if="cur_index - 1 > 0"
      @click="emitPage(cur_index - 1)"
      style="margin: 0 5px"
      :isHollow="true"
    >
      {{ cur_index - 1 }}
    </UIButtonsMyButton>

    <UIButtonsMyButton
      @click="emitPage(cur_index)"
      style="margin: 0 5px"
      :isHollow="false"
    >
      {{ cur_index }}
    </UIButtonsMyButton>

    <UIButtonsMyButton
      v-if="cur_index + 1 <= maxValue"
      @click="emitPage(cur_index + 1)"
      style="margin: 0 5px"
      :isHollow="true"
    >
      {{ cur_index + 1 }}
    </UIButtonsMyButton>

    <UIButtonsMyButton
      :isDisabled="cur_index >= maxValue"
      @click="handleIncrement"
      style="margin-left: 20px"
    >
      &#62;
    </UIButtonsMyButton>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, withDefaults, defineProps } from 'vue';

const emit = defineEmits<{
  (e: 'clickPagination', value: number): void;
}>();

const props = withDefaults(defineProps<{ maxValue?: number }>(), {
  maxValue: 10,
});

const cur_index = ref(1);

function handleIncrement() {
  if (cur_index.value < props.maxValue) {
    cur_index.value++;
    emit('clickPagination', cur_index.value);
  }
}

function handleDecrement() {
  if (cur_index.value > 1) {
    cur_index.value--;
    emit('clickPagination', cur_index.value);
  }
}

function emitPage(index: number) {
  cur_index.value = index;
  emit('clickPagination', index);
}
</script>

<style scoped lang="scss"></style>
