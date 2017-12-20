<template>
    <div class="header">
      <ul class="header-ul">
        <li class="header-ul-li">热门</li>
        <li class="header-ul-li">关注</li>
        <li class="header-ul-li">附近</li>
      </ul>
      <div class="album"></div>
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
        width: 60px;
        height: 25px;
        margin-top: 7.5px;
        line-height: 25px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        float: left;
        margin-left: calc(~"(100% - 180px) / 4");
        position: relative;
        &:hover::after {
          position: absolute;
          bottom: 0px;
          content: " ";
          display: block;
          width: 14px;
          height: 1px;
          margin-left: 23px;
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

        },
        beforeMount() {

        },
        methods: {

        }
    };
</script>
