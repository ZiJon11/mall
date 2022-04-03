<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" 
      :key="item.index" 
      class="tab-control-item" 
      @click="itemClick(index)">
        <span :class="{'item-active': currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: ['title'],
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      itemClick(index) {
        // console.log(index);
        // 把index复制给currentIndex
        this.currentIndex = index
        this.$emit('itemClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background-color: #fff;
    padding-bottom: 5px;
    z-index: 99;
    /* margin-left: 100px; */
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px 10px;
    margin: 5px 0;
  }

  .item-active {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>