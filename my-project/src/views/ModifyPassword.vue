<template>
  <div class="register">
    <div class="login-box">
      <h1>修改密码</h1>
      <el-form :model="registerInfo"  :rules="registerInfoRules" ref="registerInfo"  label-width="92px" size="medium" class="registerInfo">
        <el-form-item label="修改密码：" prop="password">
          <el-input v-model="registerInfo.password" type="password" placeholder="请填写密码" class="login-input"></el-input>
        </el-form-item>
        <el-form-item label="重复密码：" prop="checkPassword">
          <el-input v-model="registerInfo.checkPassword" type="password" placeholder="请重复密码" class="login-input"></el-input>
        </el-form-item>
        <el-button type="primary" class="login-button" @click="onSubmit('registerInfo')">注册</el-button>
      </el-form>
      <div class="return" @click="toUserInfo">
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
      height: 250px;
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
      .registerInfo{
        margin: 20px 20px 0 20px;
      }
      .login-input {
        width: 80%;
      }
      .login-button{
        width: 80px;
        margin-left: 90px;
        margin-top: 5px;
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
              if (this.registerInfo.checkPassword !== '') {
                this.$refs.registerInfo.validateField('checkPassword');
              }
              callback();
            }
          };
          let validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.registerInfo.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
          return {
            registerInfo: {
              password: "",
              checkPassword: ""
            },
            registerInfoRules: {
              password: [
                {required: true, validator: validatePass, trigger: 'blur' }
              ],
              checkPassword: [
                {required: true, validator: validatePass2, trigger: 'blur' }
              ],
            }
          };
        },
        computed: {

        },
        beforeMount() {
        },
        methods: {
          onSubmit: function(registerInfo) {
            this.$refs[registerInfo].validate((valid) => {
              if (valid) {
                this.$router.push('/Login');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          toUserInfo: function() {
            this.$router.push('/UserInfo');
          }
        }
    };
</script>
