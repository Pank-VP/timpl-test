<template>
  <div class="w-full bg-gradient-to-r from-[#F5CFC8] to-[#DDFED5DB] py-[10px] overflow-hidden">
    <div class="flex gap-7 whitespace-nowrap animate-running-text">
      <div class="flex items-center gap-2">
        <img src="@/assets/images/running-line-img.svg" alt="">
        <p class="uppercase text-[12px] font-semibold leading-5 text-shadow">By leaving a tip, you take care of nature</p>
      </div>
      <div class="flex items-center gap-2">
        <img src="@/assets/images/running-line-img.svg" alt="">
        <p class="uppercase text-[12px] font-semibold leading-5 text-shadow">Part of the profit goes to sWen</p>
      </div>
      <div class="flex items-center gap-2">
        <img src="@/assets/images/running-line-img.svg" alt="">
        <p class="uppercase text-[12px] font-semibold leading-5 text-shadow">By leaving a tip, you take care of nature</p>
      </div>
      <div class="flex items-center gap-2">
        <img src="@/assets/images/running-line-img.svg" alt="">
        <p class="uppercase text-[12px] font-semibold leading-5 text-shadow">Part of the profit goes to sWen</p>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scouped>
@keyframes running-text {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-533px);
  }
}

.animate-running-text {
  animation: running-text 4s linear infinite;
}
.text-shadow {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}
</style>
