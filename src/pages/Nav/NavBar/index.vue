<template>
<div id="NavBar">
  <h1>NavBar</h1>
  <h1>NavBar</h1>
  <h1>NavBar</h1><h1>NavBar</h1>

</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
#NavBar{

  border: 1px solid rgba(105, 105, 114, 0.3);
  border-radius: 10px;
  box-shadow:inset 1px 1px 20px rgba(255, 255, 255, 0.5),
  inset -1px -1px 20px rgba(255, 255, 255, 0.5),
  2px 2px 5px rgba(128, 128, 128, 0.5);

  grid-column: 1 / 2;
  grid-row: 1 / 3;


  overflow: scroll;
}
h1 {
  height: 400px;
}

</style>