<template>
    <div class="c-bg">
        <canvas-v1 />
    </div>
</template>

<script>
import canvas_v1 from "@/components/bg/canvas_v1.vue";
export default {
    name: "",
    props: [],
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    mounted: function() {},
    components: {
        "canvas-v1": canvas_v1,
    },
};
</script>

<style scoped lang="less">
.c-bg {
    .pa;
    .z(-1);
    .lt(50%, 0);
    transform: translateX(-50%);
    min-height: 100vh;
    .w(100%);
}
</style>
