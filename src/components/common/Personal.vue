<template>
  <div>
    <div class="w-full h-[92px] flex items-center justify-center relative">
      <div class="absolute left-[-51px]">
        <img
            src="https://s3-alpha-sig.figma.com/img/6308/9144/1529a9a6aeffa9d0770695a8f87085a8?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=feziBkKSrQxr5GVzPi2d8zaAThT8hewc5zuEkC3AgNYOKup7kEh601L-o2wpq15P877QNLAXPe2Qirzjc6vD4W9v7n6P8j3uKolq-yFc1KrOl5c8Xlo7TBrv2Rak8~56d92nwXXSieviEBS74Q7qELuFnVVNGVIY8C1PZJdoFsdeYtXiWH8jSKGSbZK3fhB-M5EmeMp6Ecax~gpMndSCZ3SWvGB-VmSlMSJf23WnOrA8YKXaFumZ48qcnT8LpiFvk4HfCYzbBQiupcI5Gfq8JWMCUgJJDlWJh2KTPEkM-N-dWMNA1auxZ-94GelmmKBz1VXlGA7h1dD9U9UGRWdQJA__"
            alt="person_img"
            class="w-[106px] h-[66px] overflow-hidden rounded-full opacity-20"
        >
      </div>
      <div class="flex justify-center items-center gap-3">
        <div class="size-[92px] rounded-full cover"></div>
        <div>
          <div>
            <span class="text-[22px] leading-6 font-semibold text-blue">{{t("name")}}</span>
          </div>
          <p class="mt-1 text-base leading-5 font-semibold text-violet">{{t("specialty")}}</p>
        </div>
      </div>
      <div class="absolute right-[-51px]">
        <img
            src="https://s3-alpha-sig.figma.com/img/23f2/8e3f/b197ff817f9a79a8d59e832bc16e154c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TweNWPAi0Hdh~Vt1UGjAiyHS4CCbHFS19Fdrgiu5gjv0ZXBt0Y5ryymTl7ucYZNFtOLXAw24h0m24JjNdVjb~Z5qgBsUS-6mg0lQ-Zq2odqbFDeNrw0~09LzmBxyz1SUi67qkDGD0jr4X4QJhdYdujOdoH19pdBCzLXbFPA0A04QRTzWQA1JX2FC34UFT57YLJPnpS-ziQHcWpGYYOpC8tZnqng4f2ArDofPRFJ7vWhq5U2YK00tbJ9uHZ54bXhu0bUVScWhSf2M5CZxYZx3LpKX7vf~bUQE~0EF71n9B2FIw9rDEmUGRFSvIG8IJ3KOl~a~nwrOXi776Pn6fMdN3w__"
            alt="person_img"
            class="w-[106px] h-[66px] overflow-hidden rounded-full opacity-20"
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>
