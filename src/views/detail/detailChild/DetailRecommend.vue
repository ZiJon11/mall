<template>
  <div class="detail-recommend">
    <div class="text">商品推荐</div>
    <GoodsList :goodsList="recommendList"></GoodsList>
  </div>
</template>

<script>
  import GoodsList from '@/components/content/goods/GoodsList'
  import GoodsListItem from '@/components/content/goods/GoodsListItem'

  export default {
    name: 'DetailRecommend',
    props: ['recommendList'],
    components: {
      GoodsList,
      GoodsListItem
    }
  }
</script>

<style scoped>
  .detail-recommend {
    background-color: #fff;
  }

  .text {
    padding: 10px 0 10px 10px;
    font-size: 16px;
    color: #666;
    font-weight: 700;
    border-top: 1px solid #000;
    margin-top: 10px;
  }
</style>