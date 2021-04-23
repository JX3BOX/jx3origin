<template>
    <div class="m-topic m-sideblock" v-if="data && data.length">
        <div class="m-topic-header m-sideblock-header">
            <i class="el-icon-star-on"></i>
            <span class="u-title">热点专题</span>
        </div>
        <div class="m-topic-content" id="m-topic">
            <el-row :gutter="20">
                <el-col :span="3" v-for="(item, i) in data" :key="i"
                    ><div>
                        <a
                            :href="item.link"
                            rel="noopener noreferrer"
                            target="_blank"
                            class="u-topic"
                            ><img :src="item.img"
                        /></a></div
                ></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import { buildTarget, resolveImagePath } from "@jx3box/jx3box-common/js/utils";
import { getSliders } from "@/service/cms";
export default {
    name: "topic",
    props: [],
    data: function() {
        return {
            data: [],
        };
    },
    computed: {},
    methods: {},
    created: function() {
        getSliders("topic", 16).then((res) => {
            let data = res.data.data;
            data.forEach((item) => {
                item.img = resolveImagePath(item.img);
            });
            this.data = data.slice(0, 16);
        });
    },
    // updated: function() {
    //     $("#m-event").slick({
    //         infinite: true,
    //         slidesToShow: 6,
    //         slidesToScroll: 5,
    //     });
    // },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/topic.less";
</style>
