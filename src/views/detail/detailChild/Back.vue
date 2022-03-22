<template>
  <div class="back" @click="backClick">
    <img src="@/assets/img/common/back.svg" alt="" class="img">
  </div>
</template>

<script>
  export default {
    name: 'Back',
    methods: {
      backClick() {
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
  .img {
    padding-top: 10px;
  }
</style>