<template>
  <div class="swipper">
    <img :src="topImages[0]" alt="">
  </div>
</template>

<script>
  export default {
    name: 'DetailSwipper',
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .swipper {
    height: 300px;
    overflow: hidden;
  }

  .swipper img {
    width: 100%;
  }
</style>