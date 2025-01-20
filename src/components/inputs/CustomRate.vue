<template>
  <div>
    <div class="w-full flex items-center">
      <div class="h-[1px] bg-violet w-full"></div>
      <div class="w-auto min-w-max px-2">
          <span class="title">
            {{ props.title }}
          </span>
      </div>
      <div class="h-[1px] bg-violet w-full"></div>
    </div>
    <div class="mt-3 w-full rounded-[20px] bg-white py-4">
      <div class="flex gap-4 w-full max-w-[244px] mx-auto">
        <button v-for="(value, index) in 5" :key="index" @click="setRate(value)" type="button"
                class="size-9 flex justify-center items-center">
          <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-[#CBD1D7]" :class="{'fill-violet': rate >= value}"
                  d="M30.4905 10.8513C30.3958 10.5769 30.2235 10.3359 29.9945 10.1575C29.7655 9.97913 29.4897 9.87101 29.2005 9.84626L20.6655 8.60126L16.8405 0.846263C16.7177 0.592656 16.5259 0.378776 16.2872 0.229123C16.0484 0.0794701 15.7723 9.76324e-05 15.4905 9.76324e-05C15.2087 9.76324e-05 14.9326 0.0794701 14.6939 0.229123C14.4551 0.378776 14.2633 0.592656 14.1405 0.846263L10.3155 8.58626L1.78052 9.84626C1.5029 9.88572 1.24191 10.0022 1.02714 10.1825C0.812384 10.3628 0.652459 10.5997 0.565519 10.8663C0.485937 11.1268 0.478795 11.404 0.544861 11.6683C0.610927 11.9326 0.747706 12.1739 0.940519 12.3663L7.13552 18.3663L5.63552 26.8863C5.58197 27.1675 5.61001 27.4581 5.71633 27.7239C5.82264 27.9897 6.0028 28.2196 6.23552 28.3863C6.46235 28.5484 6.72988 28.6441 7.00809 28.6627C7.2863 28.6812 7.56418 28.6219 7.81052 28.4913L15.4905 24.4863L23.1405 28.5063C23.351 28.625 23.5888 28.6871 23.8305 28.6863C24.1483 28.6874 24.4581 28.5876 24.7155 28.4013C24.9482 28.2346 25.1284 28.0047 25.2347 27.7389C25.341 27.4731 25.3691 27.1825 25.3155 26.9013L23.8155 18.3813L30.0105 12.3813C30.2271 12.1978 30.3872 11.9566 30.4721 11.6858C30.5571 11.415 30.5635 11.1256 30.4905 10.8513Z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports
import {ref} from 'vue'

// refs
const rate = ref(0)
const emits = defineEmits(['update:rate'])
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const setRate = (value) => {
  rate.value = value
  emits('update:rate', rate.value)
}
</script>
