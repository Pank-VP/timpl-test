<template>
  <div>
    <div class="h-[96px] flex flex-col gap-2 items-center bg-white pt-3 pb-4 rounded-[20px]">
      <p class="title text-center">Enter amount of tips</p>
      <div class="text-[34px] leading-[34px] text-blue" :class="{'opacity-10': !amount}">
        <span class="font-bold">
          {{amount}}€
        </span>
      </div>
    </div>
    <div class="mt-2 grid grid-cols-3 gap-2">
      <button
          v-for="(item, index) in tipList"
          :key="index" @click="setAmount(item)"
          type="button"
          class="bg-white py-2 rounded-[12px] text-[13px] leading-[18px] font-semibold"
          :class="{'!bg-violet text-white': amount === item}"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>
<script setup>
// imports
import { ref } from 'vue'
// refs
const amount = ref(0)
const tipList = [2, 5, 100]
const emits = defineEmits(['update:amount'])

const setAmount = (item) => {
  amount.value = item
  emits('update:amount', amount.value)
}

</script>
