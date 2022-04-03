<template>
  <div id="profile">
    <NavBar class="profile-navbar">
      <span slot="center">智慧商城</span>
    </NavBar>
    <Login/>
    <Money/>
    <ProfileList/>
  </div>
</template>

<script>
  // 引入组件
  import NavBar from '@/components/common/navbar/NavBar'
  import Login from '@/views/profile/children/Login'
  import Money from '@/views/profile/children/Money'
  import ProfileList from '@/views/profile/children/ProfileList'

  export default {
    name: 'Profile',
    components: {
      NavBar,
      Login,
      Money,
      ProfileList
    }
  }
</script>

<style scoped>
  .profile-navbar {
    font-size: 16px;
    color: #fff;
    background-color: #ff8198;
  }
</style>