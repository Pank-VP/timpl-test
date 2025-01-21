<template>
  <div>
    <div class="w-full">
      <div class="flex justify-center">
        <span class="title">
          {{t('shareFeedback')}}
        </span>
      </div>
      <textarea
          class="mt-3 w-full rounded-[20px] h-full min-h-[104px] p-5 focus-visible:outline-1 focus-visible:outline-violet placeholder:text-[17px] placeholder:text-title-gray text-[17px]"
          :placeholder="t('sharePlaceholder')"></textarea>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
// refs
const { t } = useI18n()
</script>
