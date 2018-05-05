<template>
  <div class="showFoodInfos">
    <header-nav />
    <div class="content" >
      <div class="noContent" v-if="articleFoodList.length == 0">暂无内容</div>
      <show-food-info v-else v-for="(item, index) in articleFoodList" class="showFoodInfo" :foodInfo="item" :index="index" :key="item._id" />
      <!-- <a href="#"class="get-more">加载更多...</a> -->
    </div>
    <footter-nav />
  </div>
</template>


<style lang="less">
  .showFoodInfos{
    margin: 0px;
    padding: 0px;
    width: 100%;
    .content {
      margin-top: 40px;
      margin-bottom: 65px;
      .noContent {
        text-align: center;
        line-height: 50vh;
        font-size: 15px;
      }
      .showFoodInfo {
        float: left;
        margin-top: 10px;
        margin-left: 1%;
        &:nth-child(2n) {
          margin-left: 2%;
        }
      }
      .get-more {
        width: 60%;
        height: 30px;
        background-color: rgb(73,169,238);
        text-align: center;
        line-height: 30px;
        color: #fff;
        display: block;
        float: left;
        margin-top: 10px;
        margin-left: 20%;
        border-radius: 3px;
        &:hover {
          background-color: rgba(73,169,238, .8);
        }
      }
      &::after {
        content: " ";
        display: block;
        clear: both;
      }
    }
  }
</style>
<script>
    import headerNav from '@/components/header/index.vue'
    import showFoodInfo from '@/components/showFoodInfo/index.vue'
    import footterNav from '@/components/footter/index.vue'
    export default {
        name: 'ShowFoodInfos',
        components: {
            'header-nav': headerNav,
            'show-food-info': showFoodInfo,
            'footter-nav': footterNav
        },
        data() {
            return {

            };
        },
        computed: {
          articleFoodList() {
            return this.$store.state.article.articleFoodList;
          }
        },
        beforeMount() {
        },
        methods: {
        }
    };
</script>
