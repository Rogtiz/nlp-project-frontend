<script setup>
import HeaderBlock from './components/HeaderBlock.vue'
import QueryBlock from './components/QueryBlock.vue'
import WordsBlock from './components/WordsBlock.vue'
import ErrorAlert from './components/ErrorAlert.vue'
import MisspellsBlock from './components/MisspellsBlock.vue'
import SpinnerBlock from './components/SpinnerBlock.vue'
import InfoBlock from './components/InfoBlock.vue'
import GraphicsBlock from './components/GraphicsBlock.vue'

import axios from 'axios'
import { ref } from 'vue'

const isError = ref(false)
const isActive = ref(false)
const isLoading = ref(false)
const textData = ref([])
const graphicsInfo = ref([])
const isErrorsIn = ref(false)

const wordInfoObject = ref({})
const isWordInfo = ref(false)

const graphics = ['graphic.png', 'graphic.png', 'graphic.png']

const getWordInfo = (word) => {
  const url = `http://127.0.0.1:8000/word?word=${word}`
  return axios
    .get(url)
    .then((response) => {
      wordInfoObject.value = response.data
      isWordInfo.value = true
    })
    .catch((error) => {
      console.error('Ошибка при выполнении запроса:', error)
      throw error // выбрасываем ошибку, чтобы вызывающий код мог обработать её
    })
}

const analyseText = async (text) => {
  isErrorsIn.value = false
  isLoading.value = true
  if (text) {
    console.log(text)
    const url = 'http://127.0.0.1:8000/parse'
    const requestData = {
      text: text
    }

    await axios
      .post(url, requestData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        textData.value = response.data
        isLoading.value = false
        isActive.value = true
        isErrorsIn.value = textData.value.errors.length > 0 ? true : false
      })
      .catch((error) => {
        console.error('Ошибка при выполнении запроса:', error)
      })
      .finally(() => {
        isLoading.value = false
      })
    isError.value = false

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/graphicsall/${textData.value.image_hash}`
      )
      graphicsInfo.value = response.data
      console.log(graphicsInfo)
    } catch (error) {
      console.error('Error fetching graphics:', error)
    }

    console.log(textData)
  } else {
    isActive.value = false
    isError.value = true
  }
}

const analyseFile = async (file) => {
  isErrorsIn.value = false
  isLoading.value = true
  if (file) {
    const url = 'http://127.0.0.1:8000/uploadfile/'

    const formData = new FormData()
    formData.append('file', file)

    await axios
      .post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        textData.value = response.data
        isLoading.value = false
        isActive.value = true
        isErrorsIn.value = textData.value.errors.length > 0 ? true : false
      })
      .catch((error) => {
        console.error('Ошибка при выполнении запроса:', error)
      })
      .finally(() => {
        isLoading.value = false
      })
    isError.value = false

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/graphicsall/${textData.value.image_hash}`
      )
      graphicsInfo.value = response.data
      console.log(graphicsInfo)
    } catch (error) {
      console.error('Error fetching graphics:', error)
    }

    console.log(textData)
  } else {
    isActive.value = false
    isError.value = true
  }
}
</script>

<template>
  <div
    class="w-4/5 bg-white m-auto text-center my-10 p-10 border border-slate-200 rounded-2xl shadow"
  >
    <!-- <h2 class="font-bold text-2xl mb-10">Text Analitycs</h2> -->
    <HeaderBlock />

    <ErrorAlert
      error-title="Ошибка"
      error-description="Поле для текста не может быть пустым"
      :is-active="isError"
    />

    <QueryBlock :analyse-text="analyseText" :analyse-file="analyseFile" />

    <SpinnerBlock class="my-10" v-if="isLoading" />
    <WordsBlock v-if="isActive" :words-array="textData.tokens" :get-word-info="getWordInfo" />

    <InfoBlock v-if="isWordInfo" :word-info="wordInfoObject" />

    <MisspellsBlock v-if="isErrorsIn" :errors-array="textData.errors" />

    <GraphicsBlock :graphics-object="graphicsInfo" />
  </div>
</template>

<style scoped></style>
