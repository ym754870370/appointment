<template>
  <div class="showFoodInfo" @click="changeRouter()">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="this.foodInfo.photoUrls[0].url" class="image">
      <div class="user-info">
        <span class="title">{{this.foodInfo.title}}</span>
        <div class="bottom clearfix">
          <span class="button">
            <img :src="photoUrl" class="user-img">{{this.foodInfo.accounts}}
          </span>
          <span class="time">{{this.foodInfo.date}}</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="less">
  .showFoodInfo {
    width: 48%;
      &:hover {
        box-shadow: 0 3px 12px 0 rgba(73,169,238, .9);
      }
      .user-info {
        padding: 10px 10px;
      }
      .image {
        width: 100%;
        display: block;
      }
      .title {
        text-align: left;
        display: block;
        width: 90%;
        height: 22px;
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .bottom {
        margin-top: 10px;
        line-height: 18px;
        .button {
          padding: 0;
          float: left;
          font-size: 12px;
          line-height: 18px;
          width: 80px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .user-img {
            width: 25px;
            height: 25px;
            border-radius: 13px;
            border: 1px solid rgba(10,10,10, 0.2);
            margin-right: 5px;
            margin-top: -1px;
          }
        }
        .time {
         font-size: 12px;
         line-height: 25px;
         float: right;
         color: #999;
        }
        &::after {
          clear: both;
          content: " ";
          display: block;
        }
      }
   .clearfix:before, .clearfix:after {
       display: table;
       content: "";
   }
   .clearfix:after {
       clear: both
   }
  }
</style>
<script>
    export default {
        name: 'headerNav',
        props:['foodInfo', 'index'],
        data() {
            return {

            };
        },
        computed: {
          photoUrl() {
            return this.$store.state.userInfo.photoUrl;
          }
        },
        beforeMount() {

        },
        methods: {
          changeRouter() {
            this.$store.commit('page/setArticle', this.foodInfo);
            this.$router.push('/Page');
          }
        }
    };
</script>
