<template>
  <div class="detail-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price" v-if="goods.oldPrice">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other" v-if="goods.columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[0].name}}</span>
    </div>
    <div class="info-service" v-if="goods.services">
      <span v-for="index in goods.services.length-1" :key="index" class="info-service-item">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailInfo',
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-info {
    padding: 8px;
  }

  .info-title {
    color: #222;
    font-size: 18px;
    font-weight: 700;
  }

  .info-price {
    margin: 10px 0
  }

  .n-price {
    font-size: 24px;
    color: var(--color-high-text);
    margin-right: 5px;
  }
  
  .o-price {
    font-size: 13px;
    text-decoration: line-through;
    margin-right: 5px;
  }

  .discount {
    font-size: 18px;
    color: #fff;
    background-color: var(--color-high-text);
    padding: 5px 10px;
    border-radius: 15px;
    margin-right: 5px;
  }

  .info-other {
    display: flex;
    justify-content: space-between;
    margin: 15px 0 20px 0;
    font-size: 13px;
  }
  .info-other span {
    flex: 1;
  }

  .info-other span:nth-child(2) {
    text-align: center;
  }

  .info-other span:nth-child(3) {
    text-align: right;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 700;
    border-top: 1px solid #ccc;
    padding-top: 10px;
  }

  .info-service-item {
    flex: 1;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    margin: 0 2px 2px 0;
    vertical-align: middle;
  }
</style>