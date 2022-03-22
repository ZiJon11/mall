<template>
  <div class="shop-info">
    <div class="shop-title">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-other">
      <div class="shop-sell">
        <span>{{shop.sells}}</span>
        <span class="shop-text">总销量</span>
      </div>
      <div class="shop-count">
        <span>{{shop.goodsCount}}</span>
        <span class="shop-text">全部宝贝</span>
      </div>
      <div class="shop-score">
        <table >
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'textColor':item.isBetter}">{{item.score}}</td>
            <td class="better font" :class="{'highOrLowColor':item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-button">
      <div class="shop-enter">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  }
</script>

<style scoped>
  .shop-info {
    padding: 30px 8px;
    border-top: 1px solid #f2f5f8;
    border-bottom: 1px solid #f2f5f8;
  }

  .shop-title img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
  }

  .shop-title span {
    line-height: 45px;
  }

  .shop-other {
    display: flex;
    margin-top: 30px;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
  }

  .shop-other div:nth-child(1) {
    flex: 1;
  }

  .shop-other div:nth-child(2) {
    flex: 1;
  }

  .shop-other div:nth-child(3) {
    flex: 2;
  }

  .shop-sell,.shop-count {
    display: flex;
    flex-direction: column;
  }

  .shop-text {
    margin-top: 5px;
  }

  .shop-score table {
    margin: 0 auto;
  }

  .shop-score table td {
    padding: 2px 4px;
  }

  .shop-sell,.shop-count span:nth-child(1) {
    padding-top: 2px;
  }

  .textColor {
    color: #f13e3a!important;
  }

  .highOrLowColor {
    background-color: #f13e3a!important;
  }

  .font {
    color: #fff!important;
  }

  .score {
    color:#5ea732;
  }

  .better {
    background-color: #5ea732;
  }
  
  .shop-button {
    text-align: center;
    margin-top: 20px;
  }

  .shop-enter {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>