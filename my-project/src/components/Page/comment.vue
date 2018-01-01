<template>
  <div class="comment">
    <el-input v-model="input" placeholder="写评论，交流想法" class="comment-input"></el-input>
    <img v-if="!isFabulous" class="fabulous" src="./imgs/fabulous.png" alt="" @click="changeFabulous(true)" >
    <img v-else class="fabulous" src="./imgs/active-fabulous.png" alt="" @click="changeFabulous(false)">
  </div>
</template>

<style lang="less">
  .comment {
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: -2px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    &-input {
      width: 85%;
      height: 30px;
      margin-top: 10px;
      margin-left: 10px;
    }
    .el-input__inner {
      height: 30px;
    }
    .fabulous {
      width: 20px;
      height: 20px;
      position: relative;
      left: 10px;
      top: -3px;
    }
  }
</style>
<script>
    export default {
        name: 'pageContent',
        data() {
            return {
              isFabulous: false
            };
        },
        computed: {

        },
        beforeMount() {
        },
        methods: {
          changeFabulous(boolean) {
            console.log("boolean: ", boolean);
            this.isFabulous = boolean;
          }
        }
    };
</script>
