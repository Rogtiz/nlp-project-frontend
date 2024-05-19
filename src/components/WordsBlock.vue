<script setup>
import WordItem from './WordItem.vue'
defineProps({
  getWordInfo: Function,
  wordsArray: Object
})
</script>

<template>
  <div class="flex flex-col gap-2 my-10">
    <h3 class="text-xl font-semibold">Все слова в тексте:</h3>
    <div
      class="w-4/5 bg-emerald-50 m-auto mb-10 border border-slate-100 rounded-xl flex gap-2 flex-wrap p-8 max-h-96 overflow-y-auto"
    >
      <WordItem
        v-for="(word, index) in wordsArray"
        :key="index"
        :word="word"
        @click="getWordInfo(word)"
      />
    </div>
  </div>
</template>
