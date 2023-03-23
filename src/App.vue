<template>
    <TopBar/>
    <NavChunk v-for="(site,index) in siteObj"
              :svgSrc="site.svg" :title="site.name" :href="site.url"></NavChunk>
    <LoginEffect/>

</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar/index.vue'
import NavChunk from './components/Nav/NavChunk/index.vue'
import {ref} from "vue";
import mockSite from '../mock/mockSite.json'
import LoginEffect from '@/pages/Login/LoginEffect/index.vue'
const siteObj = mockSite.documentation


</script>


<style lang="scss">
body,html{
  height: 100%;
  width: 100%;
}
body{
  background: $themeColor;
}
#app{
  height: 100%;
  position: relative;
  display: flex;
  gap: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

}
</style>
