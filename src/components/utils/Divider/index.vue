<template>
  <div id="divider">

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.rowDivider{
  pointer-events: none;
  border-radius: 10px;
  @include defineWidthHeight(95%,.1rem);
  background: rgba(102, 102, 102, 0.4);
  z-index: 10;
}
.colDivider{
  pointer-events: none;

  @include defineWidthHeight(.1rem,95%);

  border-radius: 10px;

  background: rgba(102, 102, 102, 0.4);
  z-index: 10;
}
</style>