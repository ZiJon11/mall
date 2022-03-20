<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <!-- better-scroll滚动区域 -->
    <Scroll class="content" @pullingUp="loadMore" @scroll="getScrollPosition" ref="scrollComps">
      <Swipper class="home-swipper">
        <img slot="swipper-img" src="@/assets/img/swipper/homeSwipper.png" alt="">
      </Swipper>
      <RecommendView :recommend="recommend"></RecommendView>
      <HomeFeature></HomeFeature>
      <TabControl :title="['流行','新款','精选']" @itemClick="changeCurrentype"></TabControl>
      <GoodsList :goodsList="showGoods"></GoodsList>
    </Scroll>
    <BackTop @click.native="backTop" v-show="isBackTopShow"></BackTop>
  </div>
</template>

<script>
  // 引入组件
  import NavBar from '@/components/common/navbar/NavBar'
  import Swipper from '@/components/common/swipper/Swipper'
  import Scroll from '@/components/common/scroll/Scroll'
  import BackTop from '@/components/common/backtop/BackTop'

  import TabControl from '@/components/content/tabControl/TabControl'
  import GoodsList from '@/components/content/goods/GoodsList'

  import RecommendView from '@/views/home/childComps/RecommendView'
  import HomeFeature from '@/views/home/childComps/HomeFeature'


  // 引入网络请求相关的函数
  import {getHomeMultiData, getHomeGoodsList} from '@/network/home'
  

  export default {
    name: 'Home',
    components: {
      NavBar,
      Swipper,
      Scroll,
      BackTop,
      TabControl,
      GoodsList,
      RecommendView,
      HomeFeature
    },
    data() {
      return {
        // 用于保存请求到的数据
        recommend: null,
        banner: null,
        goods: {
          'pop':{page: 0, list: []},
          'new':{page: 0, list: []},
          'sell':{page: 0, list: []}
        },
        currentType: 'pop',
        isBackTopShow: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      // 1.网络请求相关的方法
      getHomeMultiData() {
        getHomeMultiData().then(res => {
          // console.log(res)
          this.recommend = res.data.recommend.list
          this.banner = res.data.banner.list
        })
      },
      getHomeGoodsList(type) {
        const page = this.goods[type].page + 1
        getHomeGoodsList(type, page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // 可触发多次上拉加载更多
          this.$refs.scrollComps.scroll.finishPullUp()
        })
      },

      // 2.上拉加载更多数据进行展示
      loadMore() {
        this.getHomeGoodsList(this.currentType)
        // 每次请求回数据以后, 重新计算可滚动的高度
        // this.$refs.scrollComps拿到的是scroll组件实例对象
        // this.$refs.scrollComps.scroll拿到的是scroll组件实例对象中的scroll对象
        this.$refs.scrollComps.scroll.refresh()
      },

      // 3.改变currentType的值
      changeCurrentype(index) {
        if(index === 1) {
          this.currentType = 'new'
        } else if(index === 2) {
          this.currentType = 'sell'
        } else {
          this.currentType = 'pop'
        }
      },
      
      // 4.回到顶部的方法
      backTop() {
        // 调用scroll组件实例对象中封装的scrollTop方法
        this.$refs.scrollComps.scrollTop(0, 0, 500)
      },

      // 5.获取滚动的位置，将backtop进行显示或隐藏
      getScrollPosition(position) {
        // if(-position.y > 1000) {
        //   this.isBackTopShow = true
        // } else {
        //   this.isBackTopShow = false
        // }

        this.isBackTopShow = -position.y > 1000 ? true : false
      }
    },
    created() {
      // 1.请求recommend组件的数据
      this.getHomeMultiData()
      // 2.请求首页的商品展示数据
      this.getHomeGoodsList('pop')
      this.getHomeGoodsList('new')
      this.getHomeGoodsList('sell')
    },
  }
</script>

<style scoped>
  #home {
    position: relative;
    /* vh代表视口高度, 100vh代表100%的视口高度 */
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .content {
    /* 使用better-scroll进行滚动, 必须给给滚动的内容设置高度(content) */
    height: calc(100% - 93px);
  }
</style>