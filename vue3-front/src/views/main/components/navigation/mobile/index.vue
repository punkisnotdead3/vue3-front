<template>
  <div class='bg-red-900'>
    <ul>
      <li v-for="item in data" :key="item.id" >{{item.name}}</li>
    </ul>


  </div>
</template>

<script setup>
  //vite 构建的项目 可以直接用defineProps方法
 defineProps({
  data:{
    type:Array,
    required:true
  }
 }) 


</script>

<style scoped>

</style>