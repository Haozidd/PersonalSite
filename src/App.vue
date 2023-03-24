<template>
  <TopBar/>
  <Nav/>







</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar/index.vue'
import Nav from '@/pages/Nav/index.vue'
import NavChunk from '@/components/NavChunk/index.vue'

</script>


<style lang="scss">
body,html{
  width: 100%;
  height: 100%;
}
body{
  background: $themeColor;
  overflow: auto;
}
#app{
  box-sizing: border-box;
  padding-top: 75px;
  height: 100%;
  position: relative;
}
.paddingTop{
  top: 0;
  width: 100%;
  height: 75px;
  background: transparent;
}
</style>
