<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="serve">
        <span>客服</span>
      </div>
      <div class="shopcar">
        <span>购物车</span>
      </div>
      <div class="collect">
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <span>加入购物车</span>
      <span>立即购买</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar'
  }
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    padding-right: 10px;
    border-top: 1px solid #ccc;
  }

  .left {
    display: flex;
    text-align: center;
    font-size: 12px;
  }

  .left div {
    width: 60px;
    flex: 1;
  }

  .right span {
    padding: 10px;
    font-size: 14px;
    color: #fff;
  }

  .right span:nth-child(1) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #ff9017;
    padding-right: 15px;
  }

  .right span:nth-child(2) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #fd5632;
    padding-left: 15px;
  }
</style>