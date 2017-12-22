<template>
  <div class="user-info-content">
    <div class="detail-info">
      <img class="detail-info-img" src="./../showFoodInfo/imgs/hamburger.png" alt="user-header-img" draggable="true" @dragstart="dragStart($event)">
      <div class="detail-info-user">
        <h2 class="detail-info-user-name">安静 倾听 感悟 走向巅峰</h2>
        <p class="detail-info-user-account">帐号：wawa754870370</p>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .user-info-content {
    .detail-info {
      width: 100%;
      height: 100px;
      margin-top: 60px;
      background-color: #fff;
      &-img {
        width: 75px;
        height: 75px;
        margin-top: 12.5px;
        margin-left: 20px;
        border-radius: 5px;
        float: left;
      }
      &-user {
        width: calc(~"100% - 110px");
        height: 75px;
        margin-left: 10px;
        margin-top: 12.5px;
        text-align: left;
        float: left;
        position: relative;
        &-name {
          margin-top: 10px;
        }
        &-account {
          margin-top: 10px;
          margin-left: 2px;
        }
        &::after {
          content: " ";
          display: block;
          clear: both;
          width: 30px;
          height: 30px;
          position: absolute;
          right: 10px;
          top: 20px;
          background: url(./imgs/next.png) no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
</style>
<script>
  export default {
    name: 'UserInfoContent',
    data() {
      return {

      };
    },
    computed: {

    },
    beforeMount() {
    },
    methods: {
      dragStart(e, m) {
        console.log("event: ", event, m);
      }
    }
  };
</script>
