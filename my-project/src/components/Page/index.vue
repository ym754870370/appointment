<template>
  <div class="page-content">
    <div class="user-info">
      <img class="user-info-head" :src="photoUrl" alt="">
      <span class="user-info-name">{{userName || "未命名"}}</span>
      <span class="user-info-fabulous" @click="deleteActicle()"><i class="el-icon-delete"></i><span>删除</span></span>
      <h2>{{this.article.title}}</h2>
    </div>
    <div class="info-show">
      <img class="info-show-img" :src="item.url" alt="" v-for="(item, index) in article.photoUrls">
      <p class="info-show-word">{{this.article.content}}</p>
      <p class="info-show-date">{{this.article.date}}</p>
    </div>

  </div>
</template>

<style lang="less">
  .page-content {
    .user-info {
      width: 100%;
      background-color: #fff;
      padding-bottom: 5px;
      h2 {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
      }
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
        .el-icon-delete {
          margin-right: 3px;
        }
      }
    }
    .info-show {
      width: 100%;
      background-color: #fff;
      &-img {
        width: 90%;
        margin: 0 auto;
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
        margin-right: 20px;
        margin-top: 30px;
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
          article() {
            return this.$store.state.page.article;
          },
          photoUrl() {
            return this.$store.state.userInfo.photoUrl;
          },
          userName() {
            return this.$store.state.userInfo.userName;
          },
        },
        beforeMount() {

        },
        methods: {
          deleteActicle() {
            let that = this;
            that.$http.get('/deleteAricle', {
              params: {
                data: that.article,
              }
            })
            .then(function (response) {
              if(response.data.code == 200) {
                that.$store.dispatch('article/getArticleFoodList', {
                  accounts: that.$store.state.userInfo.accounts,
                  type: "1"
                });
                that.$router.push('/ShowFoodInfos');
              } else {
                console.log('response: ', response);
              }
            })
            .catch(function (error) {
              console.log('error: ', error);
            });
          }
        }
    };
</script>
