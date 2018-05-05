<template>
  <div class="release">
    <div class="release-btn release-pre" @click="onPre()">取消</div>
    <div class="release-btn release-content" @click="release()">发布</div>
    <div class="release-title">
      <el-input
        type="input"
        placeholder="请输入标题"
        v-model="releaseTitle">
      </el-input>
    </div>
    <div class="release-word">
      <el-input
        type="textarea"
        :autosize="{ minRows: 6, maxRows: 9}"
        placeholder="请输入内容"
        v-model="releaseContent">
      </el-input>
    </div>
    <el-select v-model="type" placeholder="请选择发布类别" class="release-type">
      <el-option label="美食记忆" value="1"></el-option>
      <el-option label="美景记忆" value="2"></el-option>
    </el-select>
    <el-date-picker
      v-model="date"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      class="release-date">
    </el-date-picker>
    <el-button type="primary" class="release-button" @click="addPhoto()">添加图片</el-button>
    <div class="release-photo" v-for="(photoUrl, index) in photoUrls">
      <el-input
        type="input"
        placeholder="请输入链接"
        v-model="photoUrl.url">
      </el-input>
      <img class="release-photo-img" :src="photoUrl.url" alt="">
      <div class="release-photo-delete" @click="delPhoto(index)">删除</div>
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
    &-type {
      margin: 10px 0px 0px 20px;
    }
    &-pre {
      left: 10px;
    }
    &-content {
      right: 10px;
      color: #49a9ee;
    }
    &-title {
      margin-top: 50px;
      width: 90%;
      margin-left: 5%;
    }
    &-word {
      margin-top: 20px;
      width: 90%;
      margin-left: 5%;
    }
    &-button {
      width: 100px;
      margin: 10px 0px 10px 20px;
      display: block;
    }
    &-photo {
      width: 105px;
      height: 210px;
      float: left;
      margin-left: 20px;
      &-img {
        width: 100%;
        height: 105px;
        margin-top: 10px;
        display: block;
        border: 1px solid rgba(10,10,10, 0.2);
        border-radius: 6px;
      }
      &-delete{
        width: 60px;
        height: 30px;
        text-align: center;
        margin: 0 auto;
        background-color: #409EFF;
        border-radius: 5px;
        color: #fff;
        line-height: 30px;
        margin-top: 10px;
      }
    }
    &-date {
      margin: 10px 10px 0px 20px;
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
              releaseContent: '',
              releaseTitle: '',
              photoUrls: [],
              date: '',
              type: '1',
            };
        },
        computed: {

        },
        beforeMount() {
          this.dialogImageUrl = '';
          this.dialogVisible = false;
          this.releaseContent = '';
          this.releaseTitle = '';
          this.photoUrls = [];
          this.date =  '';
          this.type = '1';
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
          },
          addPhoto() {
            this.photoUrls.push({url: ''});
          },
          delPhoto(index) {
            this.photoUrls.splice(index,1);
            console.log(index);
          },
          release() {
            let that = this;
             console.log('date: ', this.date);
            if(!this.releaseTitle) {
              that.$message.error('请输入日记标题！');
              return;
            }
            if(!this.releaseContent) {
              that.$message.error('请输入日记内容！');
              return;
            }
            let photoUrlsWrong = false;
            if(this.photoUrls.length == 0) {
              that.$message.error('请至少添加一张图片！');
              return;
            }
            this.photoUrls.forEach(v => {
              if(!v.url) {
                photoUrlsWrong = true;
              }
            })
            if(photoUrlsWrong) {
              that.$message.error('图片链接不可为空！');
              return;
            }

            let data = {
              accounts: this.$store.state.userInfo.accounts,
              title: this.releaseTitle,
              content: this.releaseContent,
              photoUrls: this.photoUrls,
              date: this.date,
              type: this.type
            }
            that.$http.get('/release', {
              params: {
                data: data,
              }
            })
              .then(function (response) {
                if(response.data.code == 200) {
                  that.$store.commit('article/setFocusTitle', that.type);
                  that.$store.dispatch('article/getArticleFoodList', {
                    accounts: that.$store.state.userInfo.accounts,
                    type: that.type
                  });
                  that.$router.push('/ShowFoodInfos');
                } else {
                  console.log('response: ', response);
                  that.$message.error('请正确输入帐号密码！');
                }
              })
              .catch(function (error) {
                console.log('error: ', error);
            });
          }

        }
    };
</script>
