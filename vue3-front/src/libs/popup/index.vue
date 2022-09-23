<template>
  <div>
    <!-- vue3的一个teleport特性 -->
    <teleport to="body">
      <transition name="fade">
        <!-- 蒙版 -->
        <div
          v-if="isVisiable"
          @click="isVisiable = false"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
        ></div>
      </transition>

      <transition name="popup-down-up">
        <!-- 内容 -->
        <div
          v-if="isVisiable"
          v-bind="$attrs"
          class="w-screen bg-white z-50 fixed bottom-0"
        >
          <slot></slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { watch } from '@vue/runtime-core'
import { useScrollLock, useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean
  }
})

// 是一个响应式数据 当他发生变化时，会自动触发 emit 修改modelvalue
const isVisiable = useVModel(props)

const isLocked = useScrollLock(document.body)
watch(
  () => isVisiable,
  (val) => {
    isLocked.value = val
  },
  {
    immediate: true
  }
)
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
// 准备进入
.fade-enter-from,
//离开完成
.fade-leave-to {
  opacity: 0;
}

.popup-down-up-enter-active,
.popup-down-up-leave-active {
  transition: all 0.3s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>