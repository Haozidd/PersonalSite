<template>
  <div id="main" ref="main">
    <NavChunk v-for="(site,index) in siteList" :key="index"
              :name="site.title" :url="site.url" :svg="site.svg"
    />

    <template v-if="paddingChunkCounts">
      <div v-for="(chunk,index) in paddingChunkCounts" :key="index"
           :style="`width:${paddingChunkWidth}px`"></div>

    </template>

  </div>

</template>

<script async setup lang="ts">
import NavChunk from '@/components/NavChunk/index.vue'
import {
  computed,
  getCurrentInstance,
  nextTick,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  reactive,
  ref, watch
} from "vue";
import {reqMockSites} from "@/api";

import Test from '@/components/utils/Test/index.vue'

type siteType = {
  title?:string,
  url?:string,
  svg?:string
}
let siteList:siteType[] = reactive([
  {
    "title": "微博",
    "url": "https://s.weibo.com/top/summary?cate=realtimehot",
    "tag": ["microblog"],
    "svg": "src/assets/svg/microblog.svg"
  },
])

let paddingChunkCounts = ref()
let paddingChunkWidth = ref()

const main = ref<HTMLDivElement>()
let navChunk = computed(() => {
  return main.value?.firstElementChild
})

window.onresize=()=>{
  if (main.value && navChunk.value){
    dealPaddingChunk(main.value,navChunk.value)
  }
}
onBeforeMount(async () => {
  let apiResult = await reqMockSites()
  for (const sites in apiResult.data.data) {
    apiResult.data.data[sites].forEach((item: object) => {
      siteList.push(item)
    })
  }

})
onMounted(() => {

})
onUpdated(() => {
  if (main.value && navChunk.value){
    dealPaddingChunk(main.value,navChunk.value)
  }

})
function dealPaddingChunk(main:HTMLDivElement,navChunk:Element){
    let navChunkElement = navChunk as HTMLDivElement

    let contentWidth =
        main.getBoundingClientRect().width
        - (parseInt(getComputedStyle(main, null).padding))
        - (parseInt(getComputedStyle(main, null).border))

    let navChunkNumberPerLine =Math.floor(
        (contentWidth)
        / (navChunkElement.getBoundingClientRect().width + 30))

    paddingChunkCounts.value = navChunkNumberPerLine - siteList.length%navChunkNumberPerLine
    paddingChunkWidth.value = navChunkElement.getBoundingClientRect().width

}



</script>

<style lang="scss" scoped>
#main {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(105, 105, 114, 0.3);
  border-radius: 10px;
  box-shadow: inset 1px 1px 20px rgba(255, 255, 255, 0.5),
  inset -1px -1px 20px rgba(255, 255, 255, 0.5),
  2px 2px 5px rgba(128, 128, 128, 0.5);

  grid-column: 2;
  grid-row: 2;
  gap: 30px;
  padding: 30px;

  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  flex-flow: wrap;

  overflow: scroll;

}

.paddingChunk {

}
</style>