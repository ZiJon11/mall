<template>
  <div id="detail">
    <DetailNav></DetailNav>
    <Scroll class="content" ref="scrollContent">
      <DetailSwipper :topImages="topImages"/>
      <DetailInfo :goods="goods"/>
      <DetailShopInfo :shop="shop"/>
      <DetailImageInfo :imageInfo="imageInfo" @load="imageLoad"/>
      <DetailGoodsSize :goodsSize="goodsSize" :goodsInfo="goodsInfo"/>
      <DetailCommentInfo 
        :goodsCommentInfo="goodsCommentInfo" 
        @imageLoad="imageLoad"
      />
      <DetailRecommend :recommendList="recommendList"/>
    </Scroll>
  </div>
</template>

<script>
  // 引入组件   
  import DetailNav from '@/views/detail/detailChild/DetailNav'
  import DetailSwipper from '@/views/detail/detailChild/DetailSwipper'
  import DetailInfo from '@/views/detail/detailChild/DetailInfo'
  import DetailShopInfo from '@/views/detail/detailChild/DetailShopInfo'
  import DetailImageInfo from '@/views/detail/detailChild/DetailImageInfo'
  import DetailGoodsSize from '@/views/detail/detailChild/DetailGoodsSize'
  import DetailCommentInfo from '@/views/detail/detailChild/DetailCommentInfo'
  import DetailRecommend from '@/views/detail/detailChild/DetailRecommend'

  import Scroll from '@/components/common/scroll/Scroll'

  // 引入网络请求相关的方法
  import {getDetail, Goods, Shop, getRecommend} from '@/network/detail'

  export default {
    name: 'Detail',
    props: ['iid'],
    components: {
      DetailNav,
      DetailSwipper,
      DetailInfo,
      DetailShopInfo,
      DetailImageInfo,
      DetailGoodsSize,
      DetailCommentInfo,
      DetailRecommend,
      Scroll
    },
    data() {
      return {
        topImages: [],
        goods: {},
        shop: {},
        imageInfo: {},
        goodsSize: {},
        goodsInfo: {},
        goodsCommentInfo: [],
        recommendList: []
      }
    },
    methods: {
      imageLoad() {
        this.$refs.scrollContent.scroll.refresh()
        console.log(2222);
      }
    },
    created() {
      getDetail(this.iid).then(res => {
        // console.log(res);
        // 1.获取轮播图片
        this.topImages = res.result.itemInfo.topImages
        // 2.获取商品数据
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        // 3.获取店铺数据
        this.shop = new Shop(res.result.shopInfo)
        // 4.获取图片展示数据
        this.imageInfo = res.result.detailInfo.detailImage
        // 5.获取商品尺码信息
        this.goodsSize = res.result.itemParams.rule
        this.goodsInfo = res.result.itemParams.info
        // 6.获取商品评价信息
        if(res.result.rate.list) {
          this.goodsCommentInfo = res.result.rate.list[0]
        }
        // console.log(this.goodsCommentInfo);
      }),
      getRecommend().then(res => {
        // console.log(res);
        this.recommendList = res.data.list
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