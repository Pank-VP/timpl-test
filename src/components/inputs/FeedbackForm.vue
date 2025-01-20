<template>
  <div>
    <div class="w-full">
      <div class="flex justify-center">
        <span class="title">
          What did you like?
        </span>
      </div>
      <div class="mt-3 flex justify-between">
          <FeedbackButton
              @update:select="selectFeedbackValue"
              :url="'/assets/images/feedback/smiling-face-hearts.svg'"
              :selected-data="feedbackData"
              title="Service"
          />
          <FeedbackButton
              @update:select="selectFeedbackValue"
              :url="'/assets/images/feedback/glowing-star.svg'"
              :selected-data="feedbackData"
              title="Cleanliness"
          />
          <FeedbackButton
              @update:select="selectFeedbackValue"
              :url="'/assets/images/feedback/smiling-face.svg'"
              :selected-data="feedbackData"
              title="Atmosphere"
          />
          <FeedbackButton
              @update:select="selectFeedbackValue"
              :url="'/assets/images/feedback/Hamburger.svg'"
              :style-image="'absolute top-0'"
              :selected-data="feedbackData"
              title="Food quality"
          />
      </div>
    </div>
  </div>
</template>
<script setup>
// imports
import { ref } from 'vue'
// refs
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
