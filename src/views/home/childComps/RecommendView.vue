<template>
  <div class="recommend-view">
    <div v-for="item in recommend" :key="item.acm" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div class="recommend-text">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recommendView',
    props: ['recommend']
  }
</script>

<style scoped>
 .recommend-view {
   display: flex;
   margin: 10px 0;
   background-color: #fff;
 }

 .recommend-item {
   flex: 1;
   padding: 5px;
 }

 .recommend-item img {
   width: 100%;
 }

 .recommend-text {
   text-align: center;
   font-size: 14px;
   padding-top: 4px;
 }
</style>