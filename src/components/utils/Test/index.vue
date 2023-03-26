<template>

</template>

<script setup lang="ts">
import {onBeforeMount, onMounted} from "vue";

onBeforeMount(async () => {
  console.log('test-onBeforeMounted')
})
onMounted(()=>{
  console.log('test-onMounted')
})
</script>

<style lang="scss" scoped>

</style>