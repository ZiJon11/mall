<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String
    },
    data() {
      return {
        
      }
    },
    methods: {
      itemClick() {
        //路由跳转
        this.$router.replace(this.path)
      }
    },
    computed: {
      //点了哪个tabBarItem, 他的图片和文字就变粉红色
      isActive() {
        return this.$route.path === this.path
      },
      activeStyle() {
        return this.isActive ? {color: '#ff5777'} : {}
      }
    },
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
  }

  .tab-bar-item div {
    text-align: center;
    font-size: 14px;
  } 
</style>