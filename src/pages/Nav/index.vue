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
  border: 1px solid rgba(105, 105, 114, 0.3);
  border-radius: 10px;

  grid-column: 1 / 2;
  grid-row: 1 / 3;


  overflow: scroll;
}
#FilterBar{
  border: 1px solid rgba(105, 105, 114, 0.3);
  border-radius: 10px;

  grid-column: 2;
  grid-row: 1 / 2;
}
#Content{
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(105, 105, 114, 0.3);
  border-radius: 10px;

  grid-column: 2;
  grid-row: 2;
  padding: 20px;

  @include flexRow();
  justify-content: start;
  align-content: flex-start;
  flex-flow: wrap;


  //display: grid;
  //grid-template-rows: repeat(5,1fr);
  //grid-template-columns: repeat(5,1fr);

  gap: 20px;
  overflow: scroll;


}

</style>