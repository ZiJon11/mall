<template>
  <div class="car-bottom-bar">
    <div class="bottom-left">
      <div class="circle"></div>
      <span class="text">全选</span>
    </div>
    <div class="bottom-center">
      <span>合计:<i> ￥0.00 </i>元</span>
    </div>
    <div class="bottom-right">
      <span>提交订单(0)</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CarBottomBar'
  }
</script>

<style scoped>
  .car-bottom-bar {
    display: flex;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 55px;
    line-height: 55px;
    border-top: 1px solid #ccc;
  }

  .car-bottom-bar div {
    flex: 1;
    text-align: center;
  }

  .bottom-left {
    display: flex;
  }

  .bottom-left .text {
    font-size: 18px;
    color: #333;
    padding-right: 40px;
  }

  .bottom-left .circle::before {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-top: 14px;
    padding-left: 10px;
  }

/* ---------------------------------------- */

  .bottom-center i {
    font-style: normal;
    color: red;
  }

  .bottom-center {
    font-size: 18px;
    color: #333;
    padding-right: 46px;
  }
  
/* ---------------------------------------- */

  .bottom-right {
    background-color: #f83b2e;
  }

  .bottom-right span {
    outline: none;
    font-size: 18px;
    color: #fff;
  }
</style>