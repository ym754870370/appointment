<template>
  <div class="user-info-content" >
    <div class="detail-info" @click="edit()">
      <div class="detail-info-NoneImg" v-if="!photoUrl">暂无图片</div>
      <img v-else class="detail-info-img" :src="photoUrl" alt="user-header-img" draggable="true" @dragstart="dragStart($event)" @dragend="dragEnd($event, mark)">
      <div class="detail-info-user">
        <h2 class="detail-info-user-name">{{userName || "未命名"}}</h2>
        <p class="detail-info-user-account">帐号：{{accounts}}</p>
      </div>
    </div>
    <div class="user-info-content-modifyPassword" @click="ModifyPassword()">
      <p class="user-info-content-modifyPassword-p">
        <img src="./imgs/edit-password.png" alt="" class="user-info-content-modifyPassword-p-icon">
        修改密码
      </p>
    </div>
    <div class="user-info-content-modifyPassword" @click="exitAccount()">
      <p class="user-info-content-modifyPassword-p">
        <img src="./imgs/exit.png" alt="" class="user-info-content-modifyPassword-p-icon">
        退出登录
      </p>
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
      &-NoneImg {
        width: 75px;
        height: 75px;
        margin-top: 12.5px;
        margin-left: 20px;
        border-radius: 5px;
        float: left;
        background-color: rgba(0,0,0, .1);
        color: rgb(130, 130, 130);
        line-height: 75px;
        text-align: center;
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
    &-modifyPassword {
      width: 100%;
      height: 50px;
      margin-top: 20px;
      background-color: #fff;
      &-p {
        font-size: 15px;
        line-height: 50px;
        margin-left: 20px;
        &-icon {
          width: 25px;
          height: 25px;
          margin-top: -4px;
          margin-right: 10px;
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
      accounts() {
        return this.$store.state.userInfo.accounts;
      },
      userName() {
        return this.$store.state.userInfo.userName;
      },
      photoUrl() {
        return this.$store.state.userInfo.photoUrl;
      }
    },
    beforeMount() {
    },
    methods: {
      dragStart(e, m) {
        console.log("event: ", event, m);
      },
      edit() {
        this.$router.push('/EditUserInfo');
      },
      ModifyPassword() {
        this.$router.push('/ModifyPassword');
      },
      exitAccount() {
        this.$router.push('/login');
      }

    }
  };
</script>
