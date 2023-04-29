<template>
  <div class="loading-wrapper">
    <div class="loading"></div>
    <div class="loading"></div>
    <div class="loading"></div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">

</script>

<style lang="scss" scoped>
.loading-wrapper{
  width:100px;
  height:100px;
  position: relative;

  z-index: 1000;
}
.loading{
  position:absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.loading:nth-of-type(1){
  border-bottom:6px solid rgba(0, 248, 0, 0.96);
  //border-left:6px solid rgba(0, 248, 0,.6);
  transform:rotatex(35deg) rotatey(-45deg);
  animation:one 1s linear infinite;
}
.loading:nth-of-type(2){
  border-right:6px solid rgba(120, 200, 255, 0.8);
  //border-bottom:6px solid rgba(120, 200, 255,.8);
  transform:rotatex(50deg) rotatey(10deg);
  animation:two 1s linear infinite;
}
.loading:nth-of-type(3){
  border-top:6px solid rgba(255, 0, 200, 0.49);
  //border-left:6px solid rgba(255, 0, 200, .4);
  transform:rotatex(40deg) rotatey(55deg);
  animation:three 1s linear infinite;
}


@keyframes one{
  to{
    transform:rotatex(35deg) rotatey(-45deg) rotatez(360deg);
  }
}
@keyframes two{
  to{
    transform:rotatex(50deg) rotatey(10deg) rotatez(360deg);
  }
}
@keyframes three{
  to{
    transform:rotatex(40deg) rotatey(55deg) rotatez(360deg);
  }
}
</style>