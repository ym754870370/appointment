<template>
    <div class="header">
      <ul class="header-ul">
        <li v-bind:class="[focusTitle == '1' ? 'header-ul-li-focus' : '', 'header-ul-li']" @click="changeTitle('1')">美食记忆</li>
        <li v-bind:class="[focusTitle == '2' ? 'header-ul-li-focus' : '', 'header-ul-li']" @click="changeTitle('2')">美景记忆</li>
        <!-- <li v-bind:class="[focusTitle == 3 ? 'header-ul-li-focus' : '', 'header-ul-li']" @click="changeTitle(3)">我的</li> -->
      </ul>
      <div class="album" @click="toRelease()"></div>
    </div>
</template>

<style lang="less">
  .header {
    width: 100%;
    height: 40px;
    background-color: #49a9ee;
    position: fixed;
    top: 0px;
    &-ul {
      width: 75%;
      margin: 0 auto;
      height: 40px;
      &-li {
        width: 80px;
        height: 25px;
        margin-top: 7.5px;
        line-height: 25px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        float: left;
        margin-left: calc(~"(100% - 180px) / 3");
        position: relative;
      }
      &-li-focus {
        &::after {
          position: absolute;
          bottom: 0px;
          content: " ";
          display: block;
          width: 30px;
          height: 1px;
          margin-left: 24px;
          background-color: #fff;
        }
      }
    }
    .album {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 11px;
      right: 12px;
      background: url(./imgs/album.png) no-repeat;
      background-size: 100% 100%;
      &:hover {
        transition-duration: 0.5s;
        transform: scale(1.4);
      }
    }
  }
</style>
<script>
    export default {
        name: 'headerNav',
        data() {
            return {
            };
        },
        computed: {
          focusTitle() {
            return this.$store.state.article.focusTitle;
          }
        },
        beforeMount() {
        },
        methods: {
          changeTitle(value) {
            let that = this;
            this.$store.commit('article/setFocusTitle',value);
            this.$store.dispatch('article/getArticleFoodList', {
              accounts: that.$store.state.userInfo.accounts,
              type: value
            });
          },
          toRelease() {
            this.$router.push('/Release');
          }
        }
    };
</script>
