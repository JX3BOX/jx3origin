<template>
    <div id="app">
        <origin-header></origin-header>
        <router-view />
    </div>
</template>

<script>
import OriginHeader from '@/components/Header.vue'
export default {
    name: "App",
    props: [],
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    beforeCreate: function() {},
    components: {
        'origin-header':OriginHeader
    },
};
</script>

<style lang="less">
@import "./assets/css/app.less";
</style>
