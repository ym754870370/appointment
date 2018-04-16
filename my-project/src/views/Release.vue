<template>
  <div class="release">
    <div class="release-btn release-pre" @click="onPre()">取消</div>
    <div class="release-btn release-content">发布</div>
    <div class="release-word">
      <el-input
        type="textarea"
        :autosize="{ minRows: 6, maxRows: 9}"
        placeholder="请输入内容"
        v-model="releaseContent">
      </el-input>
    </div>
    <div class="upload-box">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
  </div>
</template>


<style lang="less">
  .release {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    &-btn {
      position: absolute;
      top: 10px;
      font-size: 14px;
    }
    &-pre {
      left: 10px;
    }
    &-content {
      right: 10px;
      color: #49a9ee;
    }
    &-word {
      margin-top: 50px;
      width: 90%;
      margin-left: 5%;
    }
    .upload-box {
        margin-top: 20px;
        margin-left: 5%;
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
          width: 178px;
          height: 178px;
          line-height: 178px;
          text-align: center;
        }
        .avatar {
          width: 178px;
          height: 178px;
          display: block;
        }
    }

  }
</style>
<script>
    export default {
        name: 'Release',
        components: {

        },
        data() {
            return {
              dialogImageUrl: '',
              dialogVisible: false,
              releaseContent: ''
            };
        },
        computed: {

        },
        beforeMount() {
        },
        methods: {
          onPre() {
            this.$router.push('/ShowFoodInfos');
          },
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          }

        }
    };
</script>
