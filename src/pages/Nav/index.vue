<template>
  <div id="Nav">
    <Content/>
    <FilterBar/>
    <NavBar/>
  </div>
</template>

<script setup lang="ts">
import Content from './MainBar/index.vue'
import FilterBar from './FilterBar/index.vue'
import NavBar from './NavBar/index.vue'


</script>

<style lang="scss" scoped>
#Nav{
  box-sizing: border-box;


  height: 100%;
  padding: 15px;

  display: grid;
  grid-template-columns:1fr 3fr;
  grid-template-rows:1fr 5fr;
  gap: 20px;//1221


}




</style>