<template>
  <div>
    <div class="w-full rounded-[20px] pt-6 px-5 pb-8 bg-white">
      <div class="flex justify-between">
        <p class="title">
          To pay {{props.amount}}€
        </p>
        <p class="title text-title-gray">
          Service fees {{serviceFees}}€
        </p>
      </div>
      <hr class="my-3"/>
      <div class="flex flex-col gap-2">
        <button @click="visible = true" type="button" class="w-full rounded-full bg-blue flex justify-center gap-[10px] py-[10px]">
          <span class="text-white text-base leading-6 font-medium">Pay with</span>
          <img src="@/assets/images/apple-pay.svg" alt="">
        </button>
        <button @click="visible = true" type="button" class="w-full rounded-full bg-violet flex justify-center gap-[10px] py-[10px]">
          <span class="text-white text-base leading-6 font-medium">Pay with debit card</span>
        </button>
      </div>
      <div>
        <p class="mt-3 text-center text-[11px] leading-[15px] font-medium text-title-gray">
          By clicking the button, you agree to our <span class="text-violet">Terms of Use</span> and <span class="text-violet">Privacy Policy</span>, and <span class="text-violet">authorize payment</span> and <span class="text-violet">data processing.</span>
        </p>
      </div>
    </div>
    <Dialog v-model:visible="visible" modal :showHeader="false" :style="{ width: '320px' }" :pt="dialogPt">
      <div class="flex flex-col bg-white p-3 rounded-[24px] relative">
        <img src="@/assets/images/modal-img.jpg" alt="">
        <p class="mt-4 text-lg leading-6 font-medium text-center">Profit goes to SWEN</p>
        <p class="mt-4 text-title-gray text-lg leading-6 font-medium text-center">By leaving a tip, you take care of nature</p>
        <button type="button" class="mt-4 w-full rounded-full bg-blue flex justify-center gap-[10px] py-[10px]">
          <span class="text-white text-base leading-6 font-medium">Learn more about SWEN</span>
        </button>
        <button @click="visible = false" type="button" class="size-8 flex justify-center items-center rounded-full bg-white absolute top-5 right-5">
          <img src="@/assets/images/close-icon.svg" alt="close icon">
        </button>
      </div>
    </Dialog>
  </div>
</template>
<script setup>
// imports
import {computed, ref} from 'vue';
import Dialog from 'primevue/dialog';
import dialogPt from "@/components/pt/dialogPt.js";

// refs
const visible = ref(false);
const props = defineProps({
  amount: {
    type: Number,
    default: 0,
  }
})
const serviceFees = computed(() => props.amount/100 * 1.2)
// functions

</script>
