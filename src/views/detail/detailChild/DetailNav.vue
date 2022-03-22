<template>
  <div class="detail-nav">
    <NavBar>
      <Back slot="left"></Back>
      <div slot="center" class="title">
        <div class="nav-item"  
          v-for="(item, index) in navList" 
          :key="index"
          :class="{active: currentIndex === index}"
          @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
  // 引入组件
  import NavBar from '@/components/common/navbar/NavBar'
  import Back from '@/views/detail/detailChild/Back'

  export default {
    name: 'DetailNav',
    components: {
      NavBar,
      Back
    },
    data() {
      return {
        navList: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      }
    },
  }
</script>

<style scoped>
  .navbar {
    display: flex;
    background-color: #fff;
  }

  .title{
    display: flex;
  }

  .nav-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }
</style>