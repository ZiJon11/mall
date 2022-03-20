<template>
  <div class="goods-list">
    <GoodsListItem v-for="item in goodsList" :key="item.acm" :item="item"></GoodsListItem>
  </div>
</template>

<script>
  // 引入组件
  import  GoodsListItem from '@/components/content/goods/GoodsListItem' 

  export default {
    name: 'GoodsList',
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem
    },

  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5px;
  }
</style>