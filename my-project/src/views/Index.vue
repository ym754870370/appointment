<template>
  <div class="home-page" @click="toLogin">

  </div>
</template>


<style lang="less">
  .home-page {
    background: url(./imges/home-page.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
</style>
<script>
    export default {
        name: 'Index',
        components: {

        },
        data() {
            return {
            };
        },
        computed: {

        },
        beforeMount() {
          let that = this;
          setTimeout(function(){
            that.$router.push('/Login');
          }, 3000)
        },
        methods: {
          toLogin: function() {
            let that = this;
            that.$router.push('/Login');
          }
        }
    };
</script>
