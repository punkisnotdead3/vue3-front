<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolI" :class="fillClass" :fill="color"></use>
  </svg>
</template>

<script setup>
import { computed } from '@vue/runtime-core'

const props = defineProps({
  //显示的svg
  name: {
    type: String,
    required: true
  },
  //svg的颜色
  color: {
    type: String
  },
  fillClass: {
    type: String,
    required: true
  }
})

// 真实显示的svg 图标
const symbolId = computed(() => `#icon-${props.name}`)
</script>
