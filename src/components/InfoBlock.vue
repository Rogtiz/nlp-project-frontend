<script setup>
defineProps({
  wordInfo: Object
})
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg border border-slate-100 my-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <caption
        class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800"
      >
        Слово "{{
          wordInfo.word
        }}"
      </caption>
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Название</th>
          <th scope="col" class="px-6 py-3">Значение</th>
          <th scope="col" class="px-6 py-3">Прочее</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Обычная форма
          </th>
          <td class="px-6 py-4">{{ wordInfo.normal_form }}</td>
        </tr>
        <tr class="bg-white border">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Часть речи
          </th>
          <td class="px-6 py-4">{{ wordInfo.pos['ru_name'] }}</td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Время
          </th>
          <td class="px-6 py-4">{{ wordInfo.tense['ru_name'] }}</td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Род
          </th>
          <td class="px-6 py-4">{{ wordInfo.gender['ru_name'] }}</td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Число
          </th>
          <td class="px-6 py-4">{{ wordInfo.number['ru_name'] }}</td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Одушевленность
          </th>
          <td class="px-6 py-4">{{ wordInfo.animacy }}</td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Наклонение
          </th>
          <td class="px-6 py-4">{{ wordInfo.mood }}</td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Вид
          </th>
          <td class="px-6 py-4">{{ wordInfo.aspect }}</td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Падеж
          </th>
          <td class="px-6 py-4">{{ wordInfo.case['ru_name'] }}</td>
          <td class="px-6 py-4">{{ wordInfo.case['description'] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
