<template>
  <div class="money">
    <div class="remain">
      <em>0.00</em>
      <span>元</span>
      <p>我的余额</p>
    </div>
    <div class="favorable">
      <em>0</em>
      <span>个</span>
      <p>我的优惠</p>
    </div>
    <div class="integral">
      <em>0</em>
      <span>分</span>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Money'
  }
</script>

<style scoped>
  .money {
    display: flex;
    margin-top: 20px;
  }

  .money div {
    flex: 1;
    text-align: center;
  }

  em {
    font-style: normal;
    font-size: 26px;
    color: #ff5f3e;
    font-weight: 700;
    margin-right: 10px;
  }

  p {
    margin-top: 2px;
  }
</style>