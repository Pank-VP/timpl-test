<template>
  <div>
    <div class="w-full">
      <div class="flex justify-center">
        <span class="title">
          {{t('feedbackTitle')}}
        </span>
      </div>
      <div class="mt-3 flex justify-between">
          <FeedbackButton
              @update:select="selectFeedbackValue"
              :url="'/assets/images/feedback/smiling-face-hearts.svg'"
              :selected-data="feedbackData"
              :title="t('service')"
          />
          <FeedbackButton
              @update:select="selectFeedbackValue"
              :url="'/assets/images/feedback/glowing-star.svg'"
              :selected-data="feedbackData"
              :title="t('cleanliness')"
          />
          <FeedbackButton
              @update:select="selectFeedbackValue"
              :url="'/assets/images/feedback/smiling-face.svg'"
              :selected-data="feedbackData"
              :title="t('atmosphere')"
          />
          <FeedbackButton
              @update:select="selectFeedbackValue"
              :url="'/assets/images/feedback/Hamburger.svg'"
              :style-image="'absolute top-0'"
              :selected-data="feedbackData"
              :title="t('foodQuality')"
          />
      </div>
    </div>
  </div>
</template>
<script setup>
// imports
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
// refs
const { t } = useI18n()
const feedbackData = ref([])
// functions

const selectFeedbackValue = (item) => {
  if (feedbackData.value.includes(item)) {
    feedbackData.value = feedbackData.value.filter(i => i !== item);
  } else {
    feedbackData.value.push(item);
  }
};
import FeedbackButton from "@/components/buttons/FeedbackButton.vue";
</script>
