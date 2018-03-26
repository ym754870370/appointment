<template>
  <div class="register">
    <div class="login-box">
      <h1>帐号注册</h1>
      <el-form :model="userInfo"  :rules="userInfoRules" ref="userInfo"  label-width="85px" size="medium" class="userInfo">
        <el-form-item label="帐号：" prop="accounts">
          <el-input v-model="userInfo.accounts" placeholder="请填写帐号" class="login-input"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="userInfo.password" type="password" placeholder="请填写密码" class="login-input"></el-input>
        </el-form-item>
        <el-form-item label="重复密码：" prop="repeatPassword">
          <el-input v-model="userInfo.repeatPassword" type="password" placeholder="请重复密码" class="login-input"></el-input>
        </el-form-item>
        <el-button type="primary" class="login-button" @click="onSubmit">注册</el-button>
      </el-form>
      <div class="return" @click="toLogin">
        返回
      </div>
    </div>
  </div>
</template>


<style lang="less">
  .register {
    background: url(./imges/home-page.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    .login-box {
      width: 300px;
      height: 300px;
      background-color: #fff;
      position: absolute;
      top: calc(~"(100vh - 300px) / 2");
      left: calc(~"(100vw - 300px) / 2");
      border-radius: 5px;
      h1 {
        margin-top: 20px;
        font-size: 20px;
        color: #230e06;
        text-align: center;
      }
      .userInfo{
        margin: 20px 20px 0 20px;
      }
      .login-input {
        width: 80%;
      }
      .login-button{
        width: 80px;
        margin-left: 90px;
      }
      .return {
        position: absolute;
        width: 25px;
        height: 15px;
        color: #409EFF;
        font-size: 12px;
        bottom: 5px;
        right: 5px;
      }
    }
  }

</style>
<script>
    export default {
        name: 'Register',
        components: {

        },
        data() {
          let validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.ruleForm2.checkPass !== '') {
                this.$refs.ruleForm2.validateField('checkPass');
              }
              callback();
            }
          };
          return {
            userInfo: {
              accounts: "",
              password: "",
              repeatPassword: ""
            },
            userInfoRules: {
              accounts: [
                { required: true, message: '请输入帐号', trigger: 'blur' }
              ],
              password: [
                { validator: validatePass, trigger: 'blur' }
              ],
            }
          };
        },
        computed: {

        },
        beforeMount() {
        },
        methods: {
          onSubmit: function() {
            this.$router.push('/Login');
          },
          toLogin: function() {
            this.$router.push('/Login');
          }
        }
    };
</script>
