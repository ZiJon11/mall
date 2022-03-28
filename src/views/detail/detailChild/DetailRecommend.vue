<template>
  <div class="detail-recommend">
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
</style>