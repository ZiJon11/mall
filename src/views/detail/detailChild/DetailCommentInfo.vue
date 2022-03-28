<template>
  <div class="comment-info">
    <div class="comment-title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="user-info">
      <div class="user-title" v-if="goodsCommentInfo.user">
        <img :src="goodsCommentInfo.user.avatar">
        <span>{{goodsCommentInfo.user.uname}}</span>
      </div>
      <div class="user-comment">
        <p>{{goodsCommentInfo.content}}</p>
      </div>
      <div class="user-time">
        <span>{{goodsCommentInfo.created}}</span>
        <span>{{goodsCommentInfo.style}}</span>
      </div>
      <div class="user-image">
        <img :src="item" 
        v-for="(item,index) in goodsCommentInfo.images" 
        @load="detailImageLoad" 
        :key="index">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailCommentInfo',
    props: ['goodsCommentInfo'],
    methods: {
      detailImageLoad() {
        this.$emit('imageLoad')
        console.log(1111);
      }
   }
  }
</script>

<style scoped>
  .comment-info {
    background-color: #fff;
  }

  .comment-title {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-top: 1px solid rgba(1,1,1,.2);
    border-bottom: 1px solid rgba(1,1,1,.2);
    font-size: 16px;
    font-weight: 700;
  }

  .comment-title span:nth-child(1) {
    padding-left: 10px;
  }

  
  .comment-title span:nth-child(2) {
    padding-right: 10px;
  }

  .user-title img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .user-title {
    padding: 10px 0 10px 10px;
  }

  .user-comment {
    padding: 0 10px;
  }

  .user-time {
    font-size: 14px;
    color: rgba(175, 171, 171, 0.856);
    padding: 10px 0
  }

  .user-time span {
    padding: 0 10px;
  }

  .user-image {
    padding-left: 10px;
  }

  .user-image img {
    width: 80px;
    height: 80px;
  }
</style>