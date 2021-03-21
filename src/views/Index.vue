<template>
    <div class="v-index">
        <div class="m-index-search">
            <el-input
                class="u-input"
                v-model="search"
                placeholder="还在肝……开发睡觉去了"
            ></el-input>
            <el-button class="u-btn"></el-button>
        </div>
        <div class="m-index-content">
            <div class="m-index-qq">
                <span class="u-txt">剑网3缘起官方交流Q群：672613096</span>
                <span class="u-txt">魔盒官方交流Q群：3534604983</span>
            </div>
            <div class="m-index-list">
                <div class="u-bg"></div>
                <div class="u-pic"></div>
                <div class="u-list">
                    <ul v-if="list_top && list_top.length">
                        <li v-for="(item, i) in list_top" :key="i">
                            <a :href="item | getLink" target="_blank"
                                ><span class="u-title">{{
                                    item.post.post_title
                                }}</span
                                ><time class="u-time">{{
                                    item.post.created_at | dateFormat
                                }}</time></a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getLink } from "@jx3box/jx3box-common/js/utils";
import { showDate } from "@jx3box/jx3box-common/js/moment";
import { getPosts } from "@/service/index.js";
export default {
    name: "Index",
    props: [],
    data: function() {
        return {
            search: "",
            list_top : []
        };
    },
    computed: {},
    methods: {},
    filters: {
        getLink: function(item) {
            return getLink(item.post.post_type, item.post.ID);
        },
        dateFormat: function(val) {
            return showDate(val);
        },
    },
    created: function() {
        getPosts({
            type : 'bbs',
            client : 'origin'
        }).then((res) => {
            this.list_top = res.data.data.list
        })
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/index.less";
</style>
