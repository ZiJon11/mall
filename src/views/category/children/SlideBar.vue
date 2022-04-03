<template>
  <div class="slide-bar">
    <!-- 使用template标签, 可以让面少一层html结构, 因为template标签在解析的时候, 会被去掉 -->
    <Scroll class="slide-scroll-content">
      <template v-for="(item,index) in slideList">
        <li 
          :key="index" 
          class="slide-bar-item" 
          @click="itemClick(item, index)"
          :class="{active: currIndex === index}"
        >          
          {{item.title}}
        </li>
      </template>
    </Scroll>
  </div>
</template>

<script>
  // 引入组件
  import Scroll from '@/components/common/scroll/Scroll'

  export default {
    name: 'SlideBar',
    components: {
      Scroll
    },
    props: {
      slideList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currIndex: 0
      }
    },
    methods: {
      itemClick(item, index) {
        // console.log(index)
        const obj = {
          maitKey: item.maitKey,
          index: index
        }
        this.currIndex = index
        this.$emit('slideBarItemClick', obj)
      }
    },
  }
</script>

<style scoped>
  .slide-bar {
    position: fixed;
    left: 0;
    height: 100vh;
    z-index: 1;
  }

  .slide-scroll-content {
    position: fixed;
    top: 44px;
    left: 0;
    bottom: 49px;
  }

 .slide-bar {
   background-color: #fff;
 }

 .slide-bar-item {
  width: 100px;
  height: 50px;
  line-height: 45px;
  text-align: center;
  border: 0;
  list-style: none;
  font-size: 16px;
  color: #666;
 }

 .active {
  color: #ff5777;
  border-left: 3px solid #ff5777;
  font-weight: 700;
 }
</style>