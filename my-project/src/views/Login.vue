<template>
  <div class="login">
    <div class="login-box">
      <h1>帐号登陆</h1>
      <el-form :model="userInfo"  :rules="userInfoRules" ref="userInfo"  label-width="70px" size="medium" class="login-form">
        <el-form-item label="帐号：" prop="accounts">
          <el-input v-model="userInfo.accounts" placeholder="请填写帐号" class="login-input"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="userInfo.password" type="password" placeholder="请填写密码" class="login-input"></el-input>
        </el-form-item>
        <el-button type="primary" class="login-button" @click="onSubmit('userInfo')">登陆</el-button>
        <div class="toRegister" @click="toRegister">
          注册
        </div>
      </el-form>
    </div>
  </div>
</template>


<style lang="less">
  .login {
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
      top: calc(~"(100vh - 250px) / 2");
      left: calc(~"(100vw - 300px) / 2");
      border-radius: 5px;
      h1 {
        margin-top: 20px;
        font-size: 20px;
        color: #230e06;
        text-align: center;
      }
      .login-form{
        margin: 20px 20px 0 20px;
      }
      .login-input {
        width: 90%;
      }
      .login-button{
        width: 80px;
        margin-left: 90px;
        margin-top: 5px;
      }
      .toRegister {
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
        name: 'Login',
        components: {

        },
        data() {
            return {
              userInfo: {
                accounts: "",
                password: ""
              },
              userInfoRules: {
                accounts: [
                  { required: true, message: '请输入帐号', trigger: 'blur' }
                ],
                password: [
                  { required: true, message: '请正确输入密码', trigger: 'blur' }
                ],
              }
            };
        },
        computed: {

        },
        beforeMount() {
        },
        methods: {
          onSubmit: function(userInfo) {
            let that = this;
            this.$refs[userInfo].validate((valid) => {
              if (valid) {
                // this.$router.push('/ShowFoodInfos');

                this.$http.post('/login', {
                  userInfo: that.userInfo
                })
                .then(function (response) {
                  console.log('response: ', response);
                  that.$router.push('/ShowFoodInfos');
                })
                .catch(function (error) {
                  console.log('error: ', error);
                });
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          toRegister: function() {
            this.$router.push('/Register');
          }
        }
    };
</script>
