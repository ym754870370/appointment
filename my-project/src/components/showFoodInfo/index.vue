<template>
  <div class="showFoodInfo">
    <a href="#">
      <el-card :body-style="{ padding: '0px' }">
        <img src="./imgs/hamburger.png" class="image">
        <div class="user-info">
          <span class="title">{{this.foodInfo.title}}</span>
          <div class="bottom clearfix">
            <span class="button">
              <img src="./imgs/hamburger.png" class="user-img">{{this.foodInfo.userName}}
            </span>
            <time class="time">{{this.foodInfo.time}}</time>
          </div>
        </div>
      </el-card>
    </a>
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
        height: 14px;
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
            width: 16px;
            height: 16px;
            border-radius: 8px;
            margin-right: 3px;
            margin-top: -1px;
          }
        }
        .time {
         font-size: 12px;
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
        props:['foodInfo'],
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
