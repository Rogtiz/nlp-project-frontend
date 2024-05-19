<script setup>
import MisspellWord from './MisspellWord.vue'

defineProps({
  errorsArray: Object
})
</script>

<template>
  <div class="my-8 flex flex-col gap-3">
    <h3 class="font-semibold text-lg">Информация об ошибках</h3>
    <div class="max-w-7xl border border-slate-300 rounded-xl m-auto p-5 flex gap-3">
      <MisspellWord
        v-for="(error, index) in errorsArray"
        :key="index"
        :error-word="error['error']"
        :suggests-array="error['suggests']"
      />
    </div>
  </div>
</template>
