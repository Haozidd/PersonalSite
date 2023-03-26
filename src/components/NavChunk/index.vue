<template>
<div class="test-wrapper" @click="dealHref" ref="navChunk">

  <div class="background"></div>


  <div class="main">
    <img :src="svg" alt="Vue.svg" ref="svgSrcRef">
  </div>


  <Divider class="rowDivider"/>

  <div class="footer" >
    <p>{{name}}</p>
  </div>
</div>
</template>

<script setup lang="ts">

import {getCurrentInstance, onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref, watch} from "vue";
import {reqMockData} from "@/api";

const props= defineProps({
  svg: String,
  name: String,
  url:String,
  flag:Boolean
})





function dealHref(){
  window.location.href=props.url!
}
</script>

<style lang="scss" scoped>


.test-wrapper{
  box-sizing: border-box;
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10%;
  box-shadow: inset 2px 2px 10px rgba(237, 249, 250, 0.85),
  inset -2px -2px 10px rgba(243, 220, 248, 0.5);
  width: clamp(150px,10%,250px);
  @include flexColumn();
  border: rgba(66, 64, 68,.2) 1px solid;
  cursor: pointer;
  transition: .3s;
  color: rgba(128, 128, 128, 0.85);
  &::before{
    content: '';
    display: block;
    padding-top: 100%;
  }
  &:hover{
    transform: translateX(-5px) translateY(-10px);
    box-shadow: inset 2px 2px 5px rgb(248, 254, 255),
    inset -2px -2px 5px rgb(248, 240, 250),
    4px 4px 15px rgba(66, 64, 68,.5);
    color: rgb(69, 69, 69);
  }
  &:active{
    transition: .04s;
    transform: translateX(0px) translateY(0px);
    box-shadow: 0 0;
  }
  .background{
    position: absolute;
    top: 0;
    @include defineWidthHeight();
    border-radius: 10%;
    background: radial-gradient(
            circle at 80% 15%,
            rgb(239, 135, 182) 10%,
            skyblue 70%
    );
    opacity: 0;
    transition: .4s;
    box-shadow:
        inset -5px 5px 80px #f5dffe,
        inset 5px -5px 80px #c3dff3;
    &:hover{
      opacity: 1;


    }
    z-index: 1;
  }
  .main{
    pointer-events: none;
    position: absolute;
    @include flexColumn();
    justify-content: center;
    @include defineWidthHeight(100%,75%);
    img{
      position: absolute;
      top: 20%;
      @include defineWidthHeight(40%,50%);
    }
    z-index: 10;

  }
  .rowDivider{
    position: absolute;
    bottom: 25%;
  }
  .footer{
    pointer-events: none;
    position: absolute;
    bottom:0;
    @include defineWidthHeight(100%,25%);
    @include flexRow();
    align-items: center;
    z-index: 10;
    overflow: hidden;
    p{
      font-size: 1.2rem;

      white-space: nowrap;
    }
  }

}
</style>