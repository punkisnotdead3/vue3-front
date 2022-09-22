<template>
  <div>
    <!-- vue3的一个teleport特性 -->
    <teleport to="body">
      <transition name="fade">
        <!-- 蒙版 -->
        <div
          v-if="modelValue"
          @click="dismiss()"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
        ></div>
      </transition>

      <transition name="popup-down-up">
        <!-- 内容 -->
        <div
          v-if="modelValue"
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
const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean,
  }
})

const emits = defineEmits(['update:modelValue'])

const dismiss = () => {
  console.log('u click dismiss')
  emits('update:modelValue', false)
  // todo wuyue why not change ？？？？？？
  console.log('u click dismiss' + props.modelValue)

  // props.modelValue = false
}
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
