<!-- <template>
  <div class="pagination__container">
    <div class="Pagination">
      <UIButtonsMyButton :isDisabled="cur_index <= 1" @click="handleDecrement" style="margin-right: 20px">
        &#60;
      </UIButtonsMyButton>

      <UIButtonsMyButton v-if="cur_index - 1 > 0" @click="emitPage(cur_index - 1)" style="margin: 0 5px"
        :isHollow="true">
        {{ cur_index - 1 }}
      </UIButtonsMyButton>

      <UIButtonsMyButton @click="emitPage(cur_index)" style="margin: 0 5px" :isHollow="false">
        {{ cur_index }}
      </UIButtonsMyButton>

      <UIButtonsMyButton v-if="cur_index + 1 <= maxValue" @click="emitPage(cur_index + 1)" style="margin: 0 5px"
        :isHollow="true">
        {{ cur_index + 1 }}
      </UIButtonsMyButton>

      <UIButtonsMyButton :isDisabled="cur_index >= maxValue" @click="handleIncrement" style="margin-left: 20px">
        &#62;
      </UIButtonsMyButton>
    </div>
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

<style scoped lang="scss">
.pagination__container {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style> -->

<script setup>
import {
  PaginationRoot,
  PaginationList,
  PaginationListItem,
  PaginationPrev,
  PaginationNext,
  PaginationEllipsis,
} from 'reka-ui';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['update:currentPage']);
</script>

<template>
  <PaginationRoot
    v-model:page="props.currentPage"
    :total="props.totalPages"
    :sibling-count="1"
    show-edges
    class="pagination"
    @update:page="emit('update:currentPage', $event)"
  >
    <PaginationList v-slot="{ items }" class="pagination-list">
      <PaginationPrev
        class="pagination-button pagination-prev"
        :class="{ disabled: currentPage === 1 }"
      >
        &lt;
      </PaginationPrev>

      <template v-for="(page, index) in items" :key="index">
        <PaginationListItem
          v-if="page.type === 'page'"
          :value="page.value"
          class="pagination-button pagination-item"
          :class="{ active: page.value === currentPage }"
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else class="pagination-ellipsis">
          &hellip;
        </PaginationEllipsis>
      </template>
      <PaginationNext
        class="pagination-button pagination-next"
        :class="{ disabled: currentPage === totalPages }"
      >
        &gt;
      </PaginationNext>
    </PaginationList>
  </PaginationRoot>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}

.pagination-list {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 8px;
  align-items: center;
}

.pagination-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgb(157, 156, 156);
  background: #f5f5f5;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  color: rgb(37, 71, 65);
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.15px;
  text-align: left;
}

.pagination-item.active {
  border-radius: 10px;
  border: 1px solid rgb(157, 156, 156);
  background: rgb(37, 71, 65);
  color: white;
  font-weight: 500;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.15px;
  text-align: left;
}

.pagination-next {
  background: rgb(2, 159, 89);
  color: rgb(255, 255, 255);
}

.pagination-button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: #f5f5f5 !important;
  color: #9d9c9c !important;
}

.pagination-next.disabled {
  background: #f5f5f5 !important;
  color: #9d9c9c !important;
  border: 1px solid rgb(157, 156, 156);
}

.pagination-next:not(.disabled) {
  background: rgb(2, 159, 89);
  color: white;
}

.pagination-prev:not(.disabled),
.pagination-next:not(.disabled) {
  background: rgb(2, 159, 89);
  color: white;
  border: 1px solid transparent;
}

.pagination-prev.disabled,
.pagination-next.disabled {
  background: #f5f5f5 !important;
  color: #9d9c9c !important;
  border: 1px solid rgb(157, 156, 156) !important;
}

.pagination-ellipsis {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgb(2, 159, 89);
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
}

@media (max-width: 768px) {
  .pagination-button {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
}
</style>
