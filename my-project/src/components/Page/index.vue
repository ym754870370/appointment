<template>
  <div class="page-content">
    <div class="user-info">
      <img class="user-info-head" src="./../showFoodInfo/imgs/hamburger.png" alt="">
      <span class="user-info-name">杨明好帅呀！</span>
      <span class="user-info-fabulous"><i class="el-icon-star-on"></i><span class="user-info-fabulous-num">200</span></span>
    </div>
    <div class="info-show">
      <img class="info-show-img" src="./../showFoodInfo/imgs/hamburger.png" alt="">
      <img class="info-show-img" src="./../showFoodInfo/imgs/hamburger.png" alt="">
      <img class="info-show-img" src="./../showFoodInfo/imgs/hamburger.png" alt="">
      <p class="info-show-word">这事这片的简介哦！这事这片的简介哦！这事这片的简介哦！这事这片的简介哦！这事这片的简介哦！这事这片的简介哦！sdasdassadasdasdasdasdasdasdasdasdasdasdafsfwferqewqeqwdasdaasdasdasdasdasdasdasdasfdsfs</p>
      <p class="info-show-date">2018.01.01 08:24</p>
    </div>

  </div>
</template>

<style lang="less">
  .page-content {
    .user-info {
      width: 100%;
      background-color: #fff;
      padding-bottom: 5px;
      &-head {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        float: left;
        margin-left: 20px;
        margin-top: 10px;
      }
      &-name {
        line-height: 50px;
        margin-left: 5px;
      }
      &-fabulous{
        color: #8a8a8a;
        font-size: 14px;
        margin-top: 18px;
        margin-right: 20px;
        float: right;
        .el-icon-star-on {
          margin-right: 3px;
        }
      }
    }
    .info-show {
      width: 100%;
      background-color: #fff;
      &-img {
        width: 100%;
        margin: 0 auto;
        height: 100vw;
        display: block;
        margin-bottom: 15px;
      }
      &-word {
        font-size: 14px;
        width: calc(~"100% - 30px");
        margin: 0 auto;
        margin-top: 20px;
        text-indent: 24px;
        line-height: 20px;
        word-break:break-all;
      }
      &-date {
        margin-right: 10px;
        margin-top: 20px;
        text-align: right;
        color: #8a8a8a;
      }
    }
  }
</style>
<script>
    export default {
        name: 'pageContent',
        data() {
            return {

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
