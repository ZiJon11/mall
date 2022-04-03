<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  // 引入组件
  import TabBarItem from './TabBarItem'

  export default {
    name: 'TabBar',
    components: {
      TabBarItem
    }
  }
</script>

<style scoped>
  #tabbar {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    padding-top: 5px;
    z-index: 2;
  }
</style>