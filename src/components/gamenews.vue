<template>
    <div class="m-gamenews m-sideblock">
        <div class="m-sideblock-header">
            <i class="el-icon-message-solid"></i
            ><a class="u-title" href="/bbs/#/forum/6" target="_blank"
                >游戏更新</a
            >
            <a
                href="/bbs/#/forum/6"
                class="u-more"
                target="_blank"
                rel="noopener noreferrer"
                title="查看全部"
                ><i class="el-icon-more"></i
            ></a>
        </div>
        <ul class="m-sideblock-list u-list" v-if="data.length">
            <li v-for="(item, i) in data" :key="i">
                <em>{{ item.created_at | dateFormat }}</em>
                <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ item.title }}</a
                >
            </li>
        </ul>
    </div>
</template>

<script>
import { getNews } from "@/service/cms";
import { getLink } from "@jx3box/jx3box-common/js/utils";
import { simpleDate } from "@/utils/dateFormat.js";
export default {
    name: "gamenews",
    props: [],
    data: function() {
        return {
            data: [],
        };
    },
    computed: {},
    methods: {},
    filters: {
        dateFormat: function(val) {
            return simpleDate(new Date(val));
        },
        linkFormat: function(val) {
            return getLink("bbs", val);
        },
    },
    created: function() {
        getNews().then((res) => {
            this.data = res.data.data;
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/gamenews.less";
</style>
