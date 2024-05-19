<script setup>
import { ref } from 'vue'

defineProps({
  analyseText: Function,
  analyseFile: Function
})

const queryValue = ref('')
const fileInput = ref(null)

const currentQuery = ref(0)

const onFileChange = (event) => {
  fileInput.value = event.target.files[0]
  console.log(fileInput)
}

const changeQuery = (query) => {
  currentQuery.value = query
}
</script>

<template>
  <div class="my-3">
    <button
      type="button"
      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      :disabled="currentQuery === 0"
      @click="changeQuery(0)"
    >
      Текст
    </button>
    <button
      type="button"
      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      :disabled="currentQuery === 1"
      @click="changeQuery(1)"
    >
      Файл
    </button>
  </div>
  <div v-if="currentQuery === 0" class="flex flex-col gap-3 items-center">
    <label for="message" class="block mb-2 text-lg font-semibold text-gray-600 font-mono"
      >Ваш текст</label
    >
    <textarea
      id="message"
      rows="4"
      class="text-base font-medium block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Введите свой текст..."
      v-model="queryValue"
    ></textarea>

    <button
      @click="analyseText(queryValue)"
      type="button"
      class="w-2/5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      <span class="font-bold text-base">Анализировать</span>
    </button>
  </div>
  <div v-if="currentQuery === 1" class="flex flex-col gap-5 items-center">
    <label class="block mb-2 text-lg font-semibold text-gray-600 font-mono" for="file_input"
      >Загрузите файл</label
    >
    <input
      class="block max-w-96 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      aria-describedby="file_input_help"
      accept=".pdf,.docx"
      id="file_input"
      @change="onFileChange"
      type="file"
    />
    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
      PDF or DOCX (MAX. 2MB).
    </p>

    <button
      @click="
        () => {
          analyseFile(fileInput)
        }
      "
      type="button"
      class="w-2/5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      <span class="font-bold text-base">Анализировать</span>
    </button>
  </div>
</template>
