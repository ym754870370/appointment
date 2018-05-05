<template>
  <div class="EditUserInfo">
    <div class="modifyPassword-box">
      <h1>编辑个人信息</h1>
      <el-form :model="modifyPassword"  :rules="modifyPasswordRules" ref="modifyPassword"  label-width="85px" size="medium" class="modifyPassword">
        <el-form-item label="用户名：" prop="name">
          <el-input v-model="modifyPassword.name" placeholder="请填写用户名" class="modifyPassword-input"></el-input>
        </el-form-item>
        <el-form-item label="性别：" prop="gender">
          <el-select v-model="modifyPassword.gender" placeholder="请填写性别信息" class="modifyPassword-input">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="头像名称：">
          <el-input v-model="modifyPassword.photoUrl" placeholder="请填写文件名" class="modifyPassword-input"></el-input>
        </el-form-item>
        <el-form-item label="头像展示：">
          <el-button type="primary" v-show="!showPhoto" @click="changeShowPhoto()">展示</el-button>
          <img :src="modifyPassword.photoUrl" alt="" class="modifyPassword-photo" v-show="showPhoto">
        </el-form-item>
        <el-button type="primary" class="modifyPassword-button" @click="onSubmit('modifyPassword')">保存</el-button>
        <div class="toRegister" @click="toUserInfo">
          返回
        </div>
      </el-form>
    </div>
  </div>
</template>


<style lang="less">
  .EditUserInfo {
    background: url(./imges/home-page.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    .modifyPassword-box {
      width: 300px;
      height: 450px;
      background-color: #fff;
      position: absolute;
      top: calc(~"(100vh - 450px) / 2");
      left: calc(~"(100vw - 300px) / 2");
      border-radius: 5px;
      h1 {
        margin-top: 20px;
        font-size: 20px;
        color: #230e06;
        text-align: center;
      }
      .modifyPassword{
        margin: 20px 20px 0 20px;
      }
      .modifyPassword-input {
        width: 90%;
      }
      .modifyPassword-button{
        width: 80px;
        margin-left: 90px;
        position: absolute;
        bottom: 10px;
      }
      .modifyPassword-photo{
        width: 100px;
        height: 100px;
        display: block;
      }
      .toRegister {
        position: absolute;
        width: 35px;
        height: 15px;
        color: #409EFF;
        font-size: 14px;
        bottom: 10px;
        right: 5px;
      }
    }
  }

</style>
<script>
    export default {
        name: 'ModifyPassword',
        components: {

        },
        data() {
            return {
              showPhoto: false,
              modifyPassword: {
                name: "",
                gender: "",
                photoUrl: "",
              },
              modifyPasswordRules: {
                name: [
                  { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                gender: [
                  { required: true, message: '请输入性别信息', trigger: 'blur' }
                ],
                photoUrl: [
                  { required: true, message: '请正确输入URL', trigger: 'blur' }
                ],
              }
            };
        },
        computed: {
        },
        beforeMount() {
          // this.modifyPassword = {
          //   name: "",
          //   gender: "",
          //   photoUrl: "",
          // }
        },
        methods: {
          onSubmit: function(EditUserInfo) {
            let data = {
              accounts: this.$store.state.userInfo.accounts,
              userName: this.modifyPassword.name,
              sex: this.modifyPassword.gender,
              photoUrl: this.modifyPassword.photoUrl
            }
            let that = this;
            this.$refs[EditUserInfo].validate((valid) => {
              if (valid) {
                // this.$router.push('/UserInfo');
                that.$http.post('/EditUserInfo', data)
                  .then(function (response) {
                    if(response.data.code == 200) {
                      console.log("response.data: ", response.data);
                      that.$store.commit('userInfo/setAccounts',response.data.accounts.accounts);
                      that.$router.push('/ShowFoodInfos');
                    } else {
                      console.log('response: ', response);
                      that.$message.error('请正确输入帐号密码！');
                    }
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
          changeShowPhoto() {
            this.showPhoto = true;
            console.log("this.showPhoto: ", this.showPhoto);
          },
          toUserInfo() {
            this.$router.push('/UserInfo');
          },
        },
        watch: {
          "modifyPassword.photoUrl": function() {
              this.showPhoto = false;
          }
        }
    };
</script>
