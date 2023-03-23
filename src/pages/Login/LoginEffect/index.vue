<template>
  <div class="login-wrapper">
    <div class="login"></div>
    <div class="login"></div>
    <div class="login"></div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">

</script>

<style lang="scss" scoped>
.login-wrapper{
  width:100px;
  height:100px;
  position: relative;
}
.login{
  position:absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.login:nth-of-type(1){
  border-bottom:6px solid rgba(0, 248, 0,.6);
  //border-left:6px solid rgba(0, 248, 0,.6);
  transform:rotatex(35deg) rotatey(-45deg);
  animation:one 1.5s linear infinite;
}
.login:nth-of-type(2){
  border-right:6px solid rgba(120, 200, 255,.8);
  //border-bottom:6px solid rgba(120, 200, 255,.8);
  transform:rotatex(50deg) rotatey(10deg);
  animation:two 1.5s linear infinite;
}
.login:nth-of-type(3){
  border-top:6px solid rgba(255, 0, 200, .4);
  //border-left:6px solid rgba(255, 0, 200, .4);
  transform:rotatex(40deg) rotatey(55deg);
  animation:three 1.5s linear infinite;
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