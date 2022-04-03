<template>
  <div id="category">
    <NavBar class="navbar">
      <span slot="center">商品分类</span>
    </NavBar>
    <SlideBar :slideList="slideList" @slideBarItemClick="slideBarItemClick" />
    <Scroll class="scroll-content" ref="subScroll">
      <SubCategory :subCategoryList="subCategoryList" @imageLoad="imageLoad" />
      <TabControl :title="['流行','新款','精选']" @itemClick="tabControlClick" ref="tabControl"  class="tabControl" />
      <GoodsList :goodsList="categoryDetailList" class="good-list"/>
    </Scroll>
  </div>
</template>

<script>
  // 引入组件
  import NavBar from '@/components/common/navbar/NavBar'
  import SlideBar from '@/views/category/children/SlideBar' 
  import SubCategory from '@/views/category/children/SubCategory'
  import Scroll from '@/components/common/scroll/Scroll'
  import TabControl from '@/components/content/tabControl/TabControl'
  import GoodsList from '@/components/content/goods/GoodsList'
  import GoodsListItem from '@/components/content/goods/GoodsListItem'

  // 引入数据请求的方法
  import { getCategory, getSubCategory, getSubCategoryDetail } from '@/network/category'

  export default {
    name: 'Category',
    components: {
      NavBar,
      SlideBar,
      SubCategory,
      Scroll,
      TabControl,
      GoodsList,
      GoodsListItem
    },
    data() {
      return {
        slideList: [],
        subCategoryList: [],
        titleList: ['pop','new','sell'],
        categoryDetailList: [],
        // 用于保存当前slideitem的索引值
        currIndex: 0

      }
    },
    methods: {
      // 当点击SlideBar组件里面的item时, 就来回调这个函数
      slideBarItemClick({maitKey, index}) {
        // 调用getSubCategory方法, 获取数据
        this.getSubCategory(maitKey)
        // 保存点击的slideitem的索引值
        this.currIndex = index
        // 点击SlideBar组件里面的item时，获取SubCategoryDetail组件要展示的数据
        this.getSubCategoryDetail(this.slideList[this.currIndex].miniWallkey, this.titleList[0])
      },

      // 1.获取SlideBar组件要展示的数据
      getCategory() {
        getCategory().then(res => {
          // console.log(res)
          this.slideList = res.data.category.list
          // 进入分类页面，默认展示第一个item的数据
          this.$nextTick(() =>  {
            this.getSubCategory(this.slideList[0].maitKey);
            this.getSubCategoryDetail(this.slideList[0].miniWallkey, 'pop')
          })
        })
      },

      // 2.获取SubCategory组件要展示的数据
      getSubCategory(key) {
        getSubCategory(key).then(res => {
          // console.log(res);
          this.subCategoryList = res.data.list
        })
      },

      // 3.获取Category组件推荐的展示数据
      getSubCategoryDetail(key, type) {
        getSubCategoryDetail(key, type).then(res => {
          // console.log(res);
          this.categoryDetailList = res
        })
      },

      imageLoad() {
        // console.log(222);
        // 监听图片的加载, 图片一加载完成就刷新组件可滚动高度
        this.$refs.subScroll.scroll.refresh()
      },

      tabControlClick(index) {
        this.getSubCategoryDetail(this.slideList[this.currIndex].miniWallkey, this.titleList[index])
      }
    },
    created() {
      this.getCategory()
    },
    // 绑定自定义事件
    mounted() {
      this.$bus.$on('imgLoad', () => {
        this.$refs.subScroll.scroll.refresh()
      })
    },
    // 组件销毁前解绑自定义事件
    beforeDestroy() {
      this.$bus.$off('imgLoad')
    }
  }
</script>

<style scoped>
  .navbar {
    background-color: #ff8198;
    font-size: 16px;
    color: #fff;
  }

  .scroll-content {
    position: fixed;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }

  .good-list {
    padding-left: 100px;
  }

  .tabControl {
    margin-left: 100px;
  }

</style>