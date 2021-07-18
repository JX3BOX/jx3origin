<template>
    <div class="m-gamenews m-sideblock">
        <div class="m-sideblock-header">
            <i class="el-icon-message-solid"></i>
            <a class="u-title" href="https://jx3yq.xoyo.com/index/#/latest" target="_blank">游戏更新</a>
            <a
                href="https://jx3yq.xoyo.com/index/#/latest"
                class="u-more"
                target="_blank"
                rel="noopener noreferrer"
                title="查看全部"
            >
                <i class="el-icon-more"></i>
            </a>
        </div>
        <ul class="m-sideblock-list u-list" v-if="data.length">
            <li v-for="(item,i) in data" :key="i">
                <em>{{item.inputtime | dateFormat}}</em>
                <a
                    :href="item.url"
                    target="_blank"
                    rel="noopener noreferrer"
                >{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { getGameNews } from "@/service/spider";
import { getLink } from "@jx3box/jx3box-common/js/utils";
import { simpleDate } from "@/utils/dateFormat.js";
export default {
    name: "gamenews",
    props: [],
    data: function () {
        return {
            list: [],
        };
    },
    computed: {
        data : function (){
            return this.list.slice(0,5)
        }
    },
    methods: {},
    filters: {
        dateFormat: function (val) {
            return simpleDate(new Date(~~val*1000));
        },
    },
    created: function () {
        getGameNews().then((res) => {
            let data = res.data
            let list = []
            for(let group in data){
                list.push(...data[group].list)
            }
            list.sort((a,b) => {
                return ~~b.inputtime - ~~a.inputtime
            })
            this.list = list
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/gamenews.less";
</style>
