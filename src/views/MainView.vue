<script setup>
import { ref } from "vue"
import TimplHeader from "@/components/header/TimplHeader.vue";
import RunningLine from "@/components/common/RunningLine.vue";
import Personal from "@/components/common/Personal.vue";
import AmountCounter from "@/components/inputs/AmountCounter.vue";
import CustomRate from "@/components/inputs/CustomRate.vue";
import FeedbackForm from "@/components/inputs/FeedbackForm.vue";
import FeedbackShare from "@/components/inputs/FeedbackShare.vue";
import FullAmountConfirmation from "@/components/inputs/FullAmountConfirmation.vue";
import PaymentSelector from "@/components/common/PaymentSelector.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const experienceRate = ref(0)
const serviceRate = ref(0)
const amount = ref(0)
const setAmount = (e) => {
  amount.value = e
}

const selectExperienceRate = (e) => {
  experienceRate.value = e
}
const selectServiceRate = (e) => {
  serviceRate.value = e
}
</script>

<template>
  <div class="min-h-screen mx-auto bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
    <header>
      <TimplHeader/>
    </header>
    <main class="bg-light-gray">
      <RunningLine />
      <Personal class="mt-4" />
      <div class="px-5">
        <AmountCounter class="mt-5" @update:amount="setAmount" />
        <CustomRate @update:rate="selectExperienceRate" :title="t('rateExperience')" class="mt-3" />
        <CustomRate v-if="experienceRate" @update:rate="selectServiceRate" :title="t('reteService')" class="mt-3" />
        <FeedbackForm v-if="experienceRate" class="mt-4" />
        <FeedbackShare v-if="experienceRate" class="mt-4" />
        <FullAmountConfirmation class="mt-3" :amount="amount" />
      </div>
      <PaymentSelector class="mt-[37px]" :amount="amount" />
    </main>
  </div>
</template>
