<template>
    <div id="app">
        <origin-header></origin-header>
        <bg-canvas class="p-bg" />
        <router-view class="p-container" />
    </div>
</template>

<script>
import OriginHeader from "@/components/Header.vue";
import BgCanvas from "@/components/bg/BgCanvas.vue";
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
        "origin-header": OriginHeader,
        "bg-canvas": BgCanvas,
    },
};
</script>

<style lang="less">
@import "./assets/css/app.less";
</style>
