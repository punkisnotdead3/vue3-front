<template>
  <div>
    <!-- vue3的一个teleport特性 -->
    <teleport to="body">
      <!-- 蒙版 -->
      <div>123</div>
      <!-- 内容 -->
      <div>456</div>
    </teleport>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">

</style>