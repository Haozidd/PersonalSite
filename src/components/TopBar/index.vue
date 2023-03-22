<template>
<div id="topBar">
  <img src="@/assets/svg/hzdd_site.svg" alt="">
  <h1>Hzdd</h1>
  <Divider class="colDivider" style="height: 50%;margin-left: 20px"/>

</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
#topBar{
  position: absolute;
  top: 0;

  @include defineWidthHeight(100%,7%);

  border-bottom: .2px solid rgba(128, 128, 128, 0.47);
  background: rgba(255, 255, 255, 0.5);

  display: flex;
  align-items: center;




  img{
    padding: 0 20px;
    @include defineWidthHeight(70px,70px)
  }


}

</style>