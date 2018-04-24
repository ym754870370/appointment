<template>
  <div class="page-Info">
    <div class="header">
      <img src="../../src/components/Page/imgs/prev.png" @click="changeRouter()">
      查看详情
    </div>
    <div class="content">
      <page-content></page-content>
    </div>
    <!-- <comment></comment> -->
  </div>
</template>


<style lang="less">
  .page-Info {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: rgba(0,0,0, 0.03);
    .header {
      width: 100%;
      height: 40px;
      background-color: #49a9ee;
      position: fixed;
      top: 0px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      font-size: 14px;
      font-weight: bolder;
      position: fixed;
      top: 0px;
      img {
        width: 30px;
        height: 30px;
        float: left;
        position: absolute;
        left: 10px;
        top: 5px;
      }
    }
    .content {
      margin-top: 40px;
      margin-bottom: 70px;
    }
  }
</style>
<script>
    import headerNav from '@/components/header/index.vue'
    import pageContent from '@/components/Page/index.vue'
    import comment from '@/components/Page/comment.vue'
    export default {
        name: 'Page',
        components: {
            'header-nav': headerNav,
            'page-content': pageContent,
            'comment': comment,
        },
        data() {
            return {
            };
        },
        computed: {

        },
        beforeMount() {
        },
        methods: {
          changeRouter() {
            this.$router.push('/ShowFoodInfos');
          }
        }
    };
</script>
