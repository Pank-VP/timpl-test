<template>
  <div class="col-span-1 relative">
    <button @click="handleClick" type="button" class="size-[74px] rounded-[12px] flex items-center justify-center bg-white" :class="{'!bg-violet': isSelected}">
      <img :src="`${props.url}`" :class="props.styleImage" alt="img">
      <img src="@/assets/images/feedback/bg-first.png" alt="vector-bg" class="absolute top-[2px]">
      <img src="@/assets/images/feedback/bg-second.png" alt="vector-bg" class="absolute top-[10px]">
    </button>
    <p class="mt-1 text-center text-[12px] leading-5 font-medium text-title-gray" :class="{'text-violet': isSelected}">{{ props.title }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  url: {
    type: Object,
  },
  title: {
    type: String,
    default: '',
  },
  styleImage: {
    type: String,
    default: '',
  },
  selectedData: {
    type: Array,
    default: () => []
  }
})
const emits = defineEmits(['update:select'])
const isSelected = computed(() => props.selectedData.includes(props.title));

const handleClick = () => {
  emits('update:select', props.title)
}
</script>
