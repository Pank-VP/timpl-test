<template>
  <div>
    <div class="rounded-[22px] bg-white p-4 flex justify-between">
      <div class="w-full max-w-[241px]">
        <div class="w-full max-w-[160px]">
          <span class="title">
            I want Mark to receive the full amount
          </span>
        </div>
        <p class="mt-1 text-[12px] leading-[14px] text-title-gray">You compensate service fee of 0.00€, which will be applied to your payment.</p>
      </div>
      <label class="switch w-[54px] h-[30px]">
        <input v-model="model" type="checkbox" :value="true" @change="handleCheckboxChange">
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isChecked = ref(false);
const model = defineModel()

const handleCheckboxChange = () => {
  // Здесь можно добавить логику, которая выполняется при изменении состояния чекбокса
  console.log('Checkbox is checked:', isChecked.value);
};
</script>
