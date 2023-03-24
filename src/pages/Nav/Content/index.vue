<template>
<div id="Content">
<NavChunk v-for="(site,index) in siteList" :key="index"
  :name="site.name" :url="site.url" :svg="site.svg"
/>
</div>

</template>

<script setup lang="ts">
import NavChunk from '@/components/NavChunk/index.vue'
import {onBeforeMount, onMounted, reactive} from "vue";
import {reqMockData} from "@/api";

let siteList:object[]= reactive([])

onBeforeMount(async ()=>{
  const apiResult = await reqMockData()
  for (const sites in apiResult.data.data) {
    apiResult.data.data[sites].forEach((item:object)=>{
      siteList.push(item)
    })
  }
})
//
// const documentationSite = reactive(mockSite.documentation)


</script>

<style lang="scss" scoped>

</style>