<script setup>
import { ref } from 'vue'
import Popover from 'primevue/popover';
import { useI18n } from 'vue-i18n';

const op = ref();

const toggle = (event) => {
  op.value.toggle(event);
}
const { locale } = useI18n(); // Получаем текущий язык

const changeLanguage = (lang) => {
  locale.value = lang; // Меняем язык
  op.value.hide()
};
</script>

<template>
  <div class="pt-[56px] pb-3">
    <div class="relative">
      <div class="w-full flex justify-center">
        <img src="@/assets/images/timpl-logo.svg" alt="">
      </div>
      <button @click="toggle" type="button" class="absolute right-5 top-0 flex gap-1">
        <div class="text-base leading-6 font-medium">
          <span class="text-base leading-6 font-medium">{{locale === 'ru' ? 'Ru' : 'En' }}</span>
        </div>
        <div class="size-6 flex justify-center items-center">
          <img src="@/assets/images/dropdown.svg" alt="">
        </div>
      </button>
      <Popover ref="op" unstyled pt:root:class="p-3 !bg-white !border !rounded-[12px]">
        <div class="flex flex-col">
          <button @click="changeLanguage('en')" type="button">EN</button>
          <button @click="changeLanguage('ru')" type="button">RU</button>
        </div>
      </Popover>
    </div>
  </div>
</template>
