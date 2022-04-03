<template>
  <div class="subcategory">
    <div v-for="item in subCategoryList" :key="item.acm" class="sub-category-item">
      <a :href="item.link"> <img :src="item.image" alt="" @load="imageLoad"> </a>
      <div class="text">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  // 引入组件
 

  export default {
    name: 'SubCategory',
    props: {
      subCategoryList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imageLoad() {
        this.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>
  .subcategory {
    position: relative;
    left: 100px;
    width: calc(100% - 100px);
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding-top: 12px;
  }

  .sub-category-item {
    width: 33.3333%;
    padding-bottom: 20px;
  }

  .sub-category-item img {
    width: 72px;
  }

  .sub-category-item .text {
    font-size: 14px;
    color: #666;
  }
</style>