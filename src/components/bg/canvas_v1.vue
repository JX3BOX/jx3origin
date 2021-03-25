<template>
    <div class="m-canvas-v1">
        <img class="u-person" :src="getImg('person')" />
        <!-- TODO:H5动画 -->
        <!-- <img class="u-flower" :src="getImg('flower')"> -->
        <!-- <img class="u-bird" :src="getImg('bird')"> -->
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "Canvas_v1",
    props: [],
    data: function() {
        return {};
    },
    computed: {},
    methods: {
        getImg: function(val) {
            return __imgPath + "image/origin/v1/" + val + ".png";
        },
    },
    mounted: function() {},
    components: {},
};
</script>

<style scoped lang="less">
.m-canvas-v1 {
    background: url("@{v1}bg.png") no-repeat top center;
    background-color: #3e6095;
    .h(100vh);
    .x;
    // .u-flower{
    //     .pa;.lt(15%,0);
    // }
}
</style>
