<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  graphicsObject: {
    type: Object,
    required: true
  }
})

const currentGraphic = ref(0)

const graphicsName = {
  top_frequency: 'Частые слова',
  word_lengths: 'Распределение длин',
  wordcloud: 'Облако слов'
}

const graphicsArray = computed(() => Object.keys(props.graphicsObject))
const baseUrl = 'http://127.0.0.1:8000/graphics/'

const changeGraphic = (graphicNumber) => {
  currentGraphic.value = graphicNumber
}
</script>

<template>
  <div class="my-10">
    <div class="my-3">
      <button
        v-for="(graphic, index) in graphicsArray"
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        :key="index"
        :disabled="currentGraphic === index"
        @click="changeGraphic(index)"
      >
        {{ graphicsName[graphic] }}
      </button>
    </div>
    <div class="flex flex-col gap-5">
      <img
        v-for="(graphic, index) in graphicsArray"
        v-show="currentGraphic === index"
        :src="baseUrl + graphicsObject[graphic]"
        :key="index"
        :alt="graphic + index"
      />
    </div>
  </div>
</template>

<style scoped></style>
