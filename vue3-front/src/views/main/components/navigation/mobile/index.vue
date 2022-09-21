<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      class="relative flex overflow-auto p-1 text-xs text-zinc-600"
      ref="ulTarget"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <li
        class="shadow-l-white fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20"
      >
        <m-svg-icon
          class="w-1.5 h-1.5"
          name="Hamburger"
          color="black"
        ></m-svg-icon>
      </li>
      <li
        v-for="(item, index) in data"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{
          'text-zinc-100': currentCategoryIndex === index
        }"
        :ref="setItemRef"
        @click="onItemClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onBeforeUpdate, ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
//vite 构建的项目 可以直接用defineProps方法
defineProps({
  data: {
    type: Array,
    required: true
  }
})
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
})

// 选中 item下标
const currentCategoryIndex = ref(0)
let itemRefs = []
// 获取所有item元素
const setItemRef = (el) => {
  // console.log(el)
  if (el) {
    itemRefs.push(el)
    // console.log('size:' + itemRefs.length)
  }
}
// 数据改变后，dom变化前 如果不重置 则每次dom变化 都会push 则数组就不对了
onBeforeUpdate(() => {
  itemRefs = []
})
const ulTarget = ref(null)

// 拿到ul的 滚动位置
const { x, y, isScrolling, arrivedState } = useScroll(ulTarget)

// item 点击事件
const onItemClick = (index) => {
  currentCategoryIndex.value = index
}

// watch监听
watch(currentCategoryIndex, (val) => {
  const { left, width } = itemRefs[val].getBoundingClientRect()
  sliderStyle.value = {
    // 滑块的位置= ul 横向滚动的位置+当前元素的偏移量- ul的padding
    transform: `translateX(${x.value + left - 10}px)`,
    width: width + 'px'
  }
})
</script>

<style scoped></style>
