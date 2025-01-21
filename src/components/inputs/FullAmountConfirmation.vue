<template>
  <div>
    <div class="rounded-[22px] bg-white p-4 flex justify-between">
      <div class="w-full max-w-[241px]">
        <div class="w-full max-w-[160px]">
          <span class="title">
            {{t('amountTitle')}}
          </span>
        </div>
        <p class="mt-1 text-[12px] leading-[14px] text-title-gray">
          {{t('amountSubtitleFirst')}} {{serviceFees}}€{{t('amountSubtitleSecond')}}
        </p>
      </div>
      <label class="switch w-[54px] h-[30px]">
        <input v-model="model" type="checkbox" :value="true" @change="handleCheckboxChange">
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import { useI18n } from 'vue-i18n';
// refs
const { t } = useI18n()
const isChecked = ref(false);
const model = defineModel()
const props = defineProps({
  amount: {
    type: Number,
    default: 0,
  }
})
const serviceFees = computed(() => props.amount/100 * 1.2)

const handleCheckboxChange = () => {
  console.log('Checkbox is checked:', isChecked.value);
};
</script>
