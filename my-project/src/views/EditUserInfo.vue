<template>
  <div class="ModifyPassword">
    <div class="modifyPassword-box">
      <h1>编辑个人信息</h1>
      <el-form :model="modifyPassword"  :rules="modifyPasswordRules" ref="modifyPassword"  label-width="85px" size="medium" class="modifyPassword">
        <el-form-item label="用户名：" prop="name">
          <el-input v-model="modifyPassword.name" placeholder="请填写用户名" class="modifyPassword-input"></el-input>
        </el-form-item>
        <el-form-item label="性别：" prop="gender">
          <el-select v-model="modifyPassword.gender" placeholder="请填写性别信息" class="modifyPassword-input">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="头像：">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
  .ModifyPassword {
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
        margin-top: 5px;
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
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 155px;
      height: 155px;
      line-height: 155px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
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
              modifyPassword: {
                name: "",
                gender: "",
                password: ""
              },
              modifyPasswordRules: {
                name: [
                  { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                gender: [
                  { required: true, message: '请输入性别信息', trigger: 'blur' }
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
          onSubmit: function(modifyPassword) {
            this.$refs[modifyPassword].validate((valid) => {
              if (valid) {
                this.$router.push('/UserInfo');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          toUserInfo: function() {
            this.$router.push('/UserInfo');
          },
          handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
          }
        }
    };
</script>
