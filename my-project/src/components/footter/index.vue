<template>
    <div class="footter">
      <ul class="footter-ul">
        <li class="footter-ul-li" @click="changeRouter(1)">
          <span class="footter-ul-li-span">记忆碎片</span>
        </li>
        <!-- <li class="footter-ul-li" @click="changeRouter(2)">
          <span class="footter-ul-li-span"></span>
        </li> -->
        <li class="footter-ul-li" @click="changeRouter(3)">
          <span class="footter-ul-li-span">个人信息</span>
        </li>
      </ul>
    </div>
</template>

<style lang="less">
  .footter {
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: fixed;
    bottom: -2px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    &-ul {
      &-li {
        width: 60px;
        text-align: center;
        float: left;
        margin-left: calc(~"(100% - 120px) / 3");
        .img {
          display: block;
          margin-top: 5px;
          margin-left: 30px;
        }
        &-span {
          line-height: 20px;
          display: block;
          height: 20px;
          font-size: 12px;
          margin-top: 28px;
          position: relative;
          color: #8a8a8a;
        }
        &:nth-child(1) &-span:before{
          content: " ";
          display: block;
          width: 30px;
          height: 30px;
          position: absolute;
          top: -25px;
          left: 15px;
          background: url(./imgs/album1.png) no-repeat;
          background-size: 100% 100%;
        }
        // &:nth-child(2) &-span:before{
        //   content: " ";
        //   display: block;
        //   width: 35px;
        //   height: 35px;
        //   position: absolute;
        //   top: -29px;
        //   left: 15px;
        //   background: url(./imgs/yuefan1.png) no-repeat;
        //   background-size: 100% 100%;
        // }
        // &:nth-child(2) &-span{
        //   margin-top: 29px;
        // }
        &:nth-child(2) &-span:before{
          content: " ";
          display: block;
          width: 25px;
          height: 25px;
          position: absolute;
          top: -24px;
          left: 15px;
          background: url(./imgs/userInfo1.png) no-repeat;
          background-size: 100% 100%;
        }
        &:nth-child(2) &-span{
          margin-top: 29px;
        }
      }

    }
  }
</style>
<script>
    export default {
        name: 'footterNav',
        data() {
            return {

            };
        },
        computed: {

        },
        beforeMount() {

        },
        methods: {
          changeRouter(key) {
            let that = this;
            switch (key) {
              case 1:
                that.$store.dispatch('article/getArticleFoodList', {
                  accounts: that.$store.state.userInfo.accounts,
                  type: that.$store.state.article.focusTitle,
                });
                this.$router.push('/ShowFoodInfos');
                break;
              case 2:
                this.$router.push('/AboutFood');
                break;
              case 3:
                this.$router.push('/UserInfo');
                break;
              default:

            }
          }
        }
    };
</script>
