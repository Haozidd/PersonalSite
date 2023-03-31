<template>
<div id="FilterBar">
  <div class="topPart">
    <p>Tag: </p>
  </div>

  <Divider class="rowDivider"/>


  <div class="bottomPart">
    <SearchBar/>
  </div>
</div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar/index.vue'

</script>

<style lang="scss" scoped>
#FilterBar{
  position: relative;
  grid-column: 2;
  grid-row: 1 / 2;
  min-height: 150px;
  min-width: 800px;


  @include flexColumn();

  border: 1px solid rgba(105, 105, 114, 0.3);
  border-radius: 10px;
  box-shadow:inset 1px 1px 20px rgba(255, 255, 255, 0.5),
  inset -1px -1px 20px rgba(255, 255, 255, 0.5),
  2px 2px 5px rgba(128, 128, 128, 0.5);

  padding:0 25px;




}
.topPart{
  @include defineWidthHeight(100%,50%);

  @include flexRow();
  justify-content: flex-start;
  align-items: center;
}
#divider{
  position: absolute;
  top: 50%;

  width: 97%;



}
.bottomPart{
  @include defineWidthHeight(100%,50%);

  @include flexRow();
  justify-content: flex-start;
  align-items: center;
}
p{
  font-size: 20px;
}
</style>