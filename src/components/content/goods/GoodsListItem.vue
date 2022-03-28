<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="shouImage" >
    <div class="goods-info">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collect">★{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: ['item'],
    data() {
      return {
        goodsItem: []
      }
    },
    methods: {
      itemClick() {
        this.$router.push({
          name: 'detail',
          query: {
            iid: this.item.iid
          }
        })    
      },

    },
    computed: {
      shouImage() {
        return this.item.image || this.item.show.img 
      }
    }
  }
</script>

<style scoped>
  .goods-list-item {
    width: 48%;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 5px;
  }

  .goods-list-item img {
    width: 100%;
  }
  
  .goods-info {
    font-size: 14px;
    text-align: center;
  }

  .goods-info p {
    /* 文字一行内显示，不换行 */
    white-space: nowrap;
    /* 溢出部分隐藏 */
    overflow: hidden;
    /* 溢出的文字以...的形式展示 */
    text-overflow: ellipsis;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 5px;
  }
</style>