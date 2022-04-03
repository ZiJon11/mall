<template>
  <div id="car">
    <NavBar class="car-nav-bar">
      <span slot="center">购物车(0)</span>
    </NavBar>
    <CarBottomBar />
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import CarBottomBar from '@/views/car/children/CarBottomBar'

  export default {
    name: 'Car',
    components: {
      NavBar,
      CarBottomBar
    }
  }
</script>

<style scoped>
  .car-nav-bar {
    background-color: #ff8198;
    color: #fff;
    font-size: 16px;
  }
</style>