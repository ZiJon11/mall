<template>
  <div class="swipper">
    <div class=""><slot name="swipper-img"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'Swipper'
  }
</script>

<style scoped>
  .swipper img {
    width: 100%;
  }
</style>