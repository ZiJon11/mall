<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // 引入better-scroll
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    data() {
      return {
        scroll: null,
        probeType:2,
        pullUpLoad: true
      }
    },
    mounted() {
      // 1.创建better-scroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      }),

      // 2.监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })

      // 3.监听上拉加载更多事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      // 封装一个回到顶部的方法
      scrollTop(x, y, time=300) {
        this.scroll.scrollTo(x, y, time)
      }
    }
  }
</script>

<style scoped>

</style>