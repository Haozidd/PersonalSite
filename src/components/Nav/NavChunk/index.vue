<template>
<div class="test-wrapper" @click="dealHref">

  <div class="background"></div>


  <div class="main">
    <img :src="svgSrc" alt="Vue.svg" ref="svgSrcRef">
  </div>



  <Divider class="rowDivider"/>

  <div class="footer" >
    <p>{{title}}</p>
  </div>
</div>
</template>

<script setup lang="ts">

const props= defineProps({
  svgSrc: String,
  title: String,
  href:String
})
function dealHref(){
  window.open(props.href)
}
</script>

<style lang="scss" scoped>


.test-wrapper{
  position: relative;
  background: white;
  border-radius: 10%;
  @include square(200px);
  @include flexColumn();
  border: rgba(66, 64, 68,.2) 1px solid;
  cursor: pointer;
  flex-shrink: 0;


  transition: .4s;
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
    position: relative;
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
  .divider{
    pointer-events: none;
    position: absolute;
    bottom: 25%;
    border-radius: 10px;
    @include defineWidthHeight(95%,.1rem);
    background: rgba(102, 102, 102, 0.4);
    z-index: 10;
  };
  .footer{
    pointer-events: none;
    @include defineWidthHeight(100%,25%);
    @include flexRow();
    align-items: center;
    z-index: 10;
    p{
      font-size: 2em;
      color: gray;
    }
  }

}
</style>