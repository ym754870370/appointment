<template>
  <div class="userInfo">
    <div class="header">个人信息</div>
    <user-info></user-info>
    <footter-nav />
  </div>
</template>


<style lang="less">
  .userInfo {
    width: 100%;
    height: 100%;
    .header {
      width: 100%;
      height: 40px;
      background-color: #49a9ee;
      position: fixed;
      top: 0px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      font-size: 14px;
      font-weight: bolder;
    }
  }
</style>
<script>
    import headerNav from '@/components/header/index.vue'
    import UserInfo from '@/components/UserInfo/index.vue'
    import footterNav from '@/components/footter/index.vue'
    export default {
        name: 'UserInfo',
        components: {
            'header-nav': headerNav,
            'user-info': UserInfo,
            'footter-nav': footterNav
        },
        data() {
            return {
            };
        },
        computed: {

        },
        beforeMount() {
        },
        methods: {

        }
    };
</script>
