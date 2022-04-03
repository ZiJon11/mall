<template>
  <div class="login">
    <div class="head-img">
      <img src="@/assets/img/profile/user.png" alt="">
    </div>
    <div class="login-text">
      <div>登录/注册</div>
      <div>
        <img src="@/assets/img/profile/phone.png" alt="">
        暂未绑定手机号
      </div>
    </div>
    <div class="arrow-right">
      <img src="@/assets/img/profile/arrow_right.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style scoped>
  .login {
    display: flex;
    height: 100px;
    background-color: #ff8198;
  }

  .login > div {
    flex: 1;
  }

  .head-img {
    text-align: center;
  }

  .head-img img {
    width: 66px;
    padding-top: 22px;
  }

  .login-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff; 
  }

  .login-text div:nth-child(1) {
    font-size: 18px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .arrow-right {
    text-align: right;
    line-height: 100px;
  }

  .arrow-right img {
    padding-right: 10px;
  }
</style>