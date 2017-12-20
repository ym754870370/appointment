<template>
  <div class="showFoodInfos">
    <header-nav />
    <div class="content" >
      <show-food-info v-for="(item, index) in lists" class="showFoodInfo" :foodInfo="item" :key="index" />
      <a href="#"class="get-more">加载更多...</a>
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
              lists: [
                {
                  title: "帅气的杨明！",
                  userName: "杨明sadasdasdasdadasd",
                  time: "2017.09.11"
                },
                {
                  title: "帅气的杨明帅气的杨明帅气的杨明帅气的杨明帅气的杨明！",
                  userName: "杨明",
                  time: "2017.09.11"
                },
                {
                  title: "帅气的杨明！",
                  userName: "杨明",
                  time: "2017.09.11"
                },
                {
                  title: "帅气的杨明！",
                  userName: "杨明",
                  time: "2017.09.11"
                },
                {
                  title: "帅气的杨明！",
                  userName: "杨明",
                  time: "2017.09.11"
                },
                {
                  title: "帅气的杨明！",
                  userName: "杨明",
                  time: "2017.09.11"
                },
                {
                  title: "帅气的杨明！",
                  userName: "杨明",
                  time: "2017.09.11"
                },
                {
                  title: "帅气的杨明！",
                  userName: "杨明",
                  time: "2017.09.11"
                },
                {
                  title: "帅气的杨明！",
                  userName: "杨明",
                  time: "2017.09.11"
                },
                {
                  title: "帅气的杨明！",
                  userName: "杨明",
                  time: "2017.09.11"
                },
              ]
            };
        },
        computed: {

        },
        beforeMount() {
        },
        methods: {

        }
    };
</script>
