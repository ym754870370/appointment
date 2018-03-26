<template>
  <div class="comment">
    <el-input v-model="input" placeholder="写评论，交流想法" class="comment-input"></el-input>
    <span class="comment-button">发布</span>
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
      width: 60%;
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
    &-button {
      width: 40px;
      height: 18px;
      border: 1px solid #dcdfe6;
      color: rgba(96, 98, 102, .4);
      padding: 5px 15px;
      border-radius: 4px;
      text-align: center;
      display: inline-block;
      line-height: 20px;
      margin-left: 10px;
      cursor: pointer;
      &:hover {
        color: #fff;
        border: 1px solid rgba(0, 0, 0, 0);
        background-color: #49a9ee;
      }
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
