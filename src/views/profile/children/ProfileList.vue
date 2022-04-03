<template>
  <div class="profile-list">
    <div>
      <img src="@/assets/img/profile/mine.png" alt="">
      <span>我的消息</span>
    </div>
    <div>
      <img src="@/assets/img/profile/supermall.png" alt="">
      <span>积分商城</span>
    </div>
    <div>
      <img src="@/assets/img/profile/member.png" alt="">
      <span>会员卡</span>
    </div>
    <div>
      <img src="@/assets/img/profile/shopcar.png" alt="">
      <span>我的购物车</span>
    </div>
    <div>
      <img src="@/assets/img/profile/praise.png" alt="">
      <span>点赞购物APP</span>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: 'ProfileList'
  }
</script>

<style scoped>
  /* 让图片和文字对齐 */
  img {
    vertical-align: middle;
  }

  .profile-list {
    padding: 30px 0 0 20px;
  }

  .profile-list div {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
  }
</style>