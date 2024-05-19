<script setup>
defineProps({
  errorWord: String,
  suggestsArray: Object
})
</script>

<template>
  <div
    class="border border-slate-200 rounded-2xl max-w-56 p-4 flex flex-col gap-1 shadow hover:shadow-lg transition"
  >
    <h5 class="font-semibold text-base">{{ errorWord }}</h5>
    <p class="text-sm">Исправления:</p>
    <div class="flex flex-row gap-2 flex-wrap border rounded bg-orange-100 p-1">
      <div v-for="(suggest, index) in suggestsArray" :key="index">{{ suggest }}</div>
    </div>
  </div>
</template>
