<template>
  <div class="image-info" v-if="imageInfo[0]">
    <!-- <div>{{imageInfo[0].key}}</div> -->
    <div class="image-item">
      <img v-for="(item,index) in imageInfo[0].list" :key="index" :src="item" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailImageInfo',
    props: ['imageInfo'],
    methods: {
      imageLoad() {
        this.$emit('imageLoad')
      }
    },
  }
</script>

<style scoped>
  .image-item img {
    width: 100%;
  }
</style>