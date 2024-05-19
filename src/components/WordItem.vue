<script setup>
defineProps({
  word: String,
  getInfo: Function
})
</script>

<template>
  <div
    class="hover:font-bold hover:-translate-y-0.5 cursor-pointer hover:border hover:bg-emerald-100 rounded-xl"
    @click="getInfo"
  >
    {{ word }}
  </div>
</template>
