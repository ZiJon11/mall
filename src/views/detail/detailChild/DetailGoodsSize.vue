<template>
  <div class="goods-size">
    <div class="size-table">
      <table v-for="(item,index) in goodsSize.tables" :key="index"  cellspacing='0'>
        <tr v-for="(trItem,indey) in item" :key="indey">
          <td v-for="(tdItem,indez) in trItem" :key="indez">
            {{tdItem}}
          </td>
        </tr>
      </table>
    </div>
    <div class="goods-info">
      <div class="info-table">
        <table cellspacing='0'>
          <tr v-for="(item,index) in goodsInfo.set" :key="index">
            <td class="text">{{item.key}}</td>
            <td class="highColor">{{item.value}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsSize',
    props: ['goodsSize', 'goodsInfo']
  }
</script>

<style scoped>
  .goods-size {
    background-color: #fff;
  }
  .size-table table {
    margin: 0 auto;
  }

  .size-table {
    text-align: center;
  }

  .size-table table tr td {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(1,1,1,.2);    
  }

  .highColor {
    color: #eb4868;
  }

  .text {
    width: 100px;
  }

  .info-table table tr td {
    text-align: center;
    padding: 15px 20px;
    border-bottom: 1px solid rgba(1,1,1,.2); 
  }

  .goods-info {
    margin-top: 20px;
  }

  .info-table {
    padding: 20px;
  }
</style>