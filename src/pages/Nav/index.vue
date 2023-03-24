<template>
  <div id="Nav">
    <Content/>
    <FilterBar/>
    <NavBar/>
  </div>
</template>

<script setup lang="ts">
import Content from './Content/index.vue'
import FilterBar from './FilterBar/index.vue'
import NavBar from './NavBar/index.vue'


</script>

<style lang="scss" scoped>
#Nav{
  box-sizing: border-box;

  height: 100%;
  display: grid;
  grid-template-columns:1fr 3fr;
  grid-template-rows:1fr 5fr;
  padding: 20px;
  gap: 20px;


}
#NavBar{
  border: 1px solid plum;
  grid-column: 1 / 2;
  grid-row: 1 / 3;


  overflow: scroll;
}
#FilterBar{
  border: 1px solid red;
  grid-column: 2;
  grid-row: 1 / 2;
}
#Content{
  border: 1px solid cornflowerblue;
  grid-column: 2;
  grid-row: 2;
  padding: 20px;

  @include flexRow();
  justify-content: space-around;
  flex-flow: wrap;
  gap: 20px;

  overflow: scroll;

}

</style>