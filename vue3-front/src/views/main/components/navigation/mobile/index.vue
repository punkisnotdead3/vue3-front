<template>
  <div class='bg-red-900'>我是移动端下的navigation</div>
</template>

<script setup>
import { getCategory } from '../../../../../api/category.js'

const getCategoryData = async () => {
  const res = await getCategory()
  console.log(res)
}

getCategoryData()
</script>

<style scoped>

</style>