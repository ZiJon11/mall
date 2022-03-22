<template>
  <div id="detail">
    <DetailNav></DetailNav>
    <Scroll class="content">
      <DetailSwipper :topImages="topImages"></DetailSwipper>
      <DetailInfo :goods="goods"></DetailInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
    </Scroll>
  </div>
</template>

<script>
  // 引入组件   
  import DetailNav from '@/views/detail/detailChild/DetailNav'
  import DetailSwipper from '@/views/detail/detailChild/DetailSwipper'
  import DetailInfo from '@/views/detail/detailChild/DetailInfo'
  import DetailShopInfo from '@/views/detail/detailChild/DetailShopInfo'

  import Scroll from '@/components/common/scroll/Scroll'

  // 引入网络请求相关的方法
  import {getDetail, Goods, Shop} from '@/network/detail'

  export default {
    name: 'Detail',
    props: ['iid'],
    components: {
      DetailNav,
      DetailSwipper,
      DetailInfo,
      DetailShopInfo,
      Scroll
    },
    data() {
      return {
        topImages: [],
        goods: {},
        shop: {}
      }
    },
    created() {
      getDetail(this.iid).then(res => {
        console.log(res);
        // 1.获取轮播图片
        this.topImages = res.result.itemInfo.topImages
        // 2.获取商品数据
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        // 3.获取店铺数据
        this.shop = new Shop(res.result.shopInfo)
      })

    },
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 999;
    background-color: #fff;
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>