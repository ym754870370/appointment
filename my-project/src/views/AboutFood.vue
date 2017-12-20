<template>
  <div class="aboutFood">

    <footter-nav />
  </div>
</template>


<style lang="less">

</style>
<script>
    import headerNav from '@/components/header/index.vue'
    import showFoodInfo from '@/components/showFoodInfo/index.vue'
    import footterNav from '@/components/footter/index.vue'
    export default {
        name: 'AboutFood',
        components: {
            'header-nav': headerNav,
            'show-food-info': showFoodInfo,
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
