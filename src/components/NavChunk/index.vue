<template>
<div class="test-wrapper" @click="dealHref">

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

import {watch} from "vue";

const props= defineProps({
  svg: String,
  name: String,
  url:String
})
function dealHref(){
  window.location.href=props.url!
}
</script>

<style lang="scss" scoped>


.test-wrapper{
  box-sizing: content-box;
  position: relative;
  background: white;
  border-radius: 10%;
  width: clamp(100px,10%,250px);
  @include flexColumn();
  border: rgba(66, 64, 68,.2) 1px solid;
  cursor: pointer;
  flex-shrink: 0;
  transition: .4s;
  &::before{
    content: '';
    display: block;
    padding-top: 100%;

  }
  &:hover{
    transform: translateX(-5px) translateY(-10px);
    box-shadow: 5px 5px 20px rgba(66, 64, 68,.5);
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
      font-size: 1.3rem;
      color: rgba(128, 128, 128, 0.85);
      white-space: nowrap;
    }
  }

}
</style>