<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="@/assets/img/home/recommend_bg.jpg" alt="" @load="FeatureImaLoad">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'HomeFeature',
    methods: {
      FeatureImaLoad() {
        this.$emit('FeatureImaLoad')
      }
    },
  }
</script>

<style scoped>
  .feature img {
    width: 100%;
  }

  .feature {
    background-color: #fff;
  }
</style>