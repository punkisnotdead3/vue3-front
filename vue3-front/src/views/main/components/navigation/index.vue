<template>
  <mobile-navigation v-if="isMobileTerminal" :data="categoryarray"></mobile-navigation>
</template>

<script setup>
import { isMobileTerminal } from '../../../../utils/flexible.js'
import mobileNavigation from './mobile/index.vue'
import pcNavigation from './pc/index.vue'
import { getCategory } from '@/api/category.js'
import { ref } from 'vue'

const categoryarray = ref([])
const getCategoryData = async () => {
  const { category } = await getCategory()
  categoryarray.value = category
  console.log(categoryarray.value)
}
getCategoryData()
</script>

<style scoped></style>