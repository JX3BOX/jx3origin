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
                <em>{{ item.post.post_date | dateFormat }}</em>
                <a
                    :href="item.post.ID | linkFormat"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ item.post.post_title }}</a
                >
            </li>
        </ul>
    </div>
</template>

<script>
import { getGameNews } from "@/service/spider";
import { getLink } from "@jx3box/jx3box-common/js/utils";
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
            let month = new Date(val).getMonth() + 1;
            let date = new Date(val).getDate();
            return month + "-" + date;
            // return val.replace('/','-')
        },
        linkFormat: function(val) {
            // if(val.startsWith('/')){
            //     return 'https://jx3.xoyo.com' + val
            // }else{
            //     return val
            // }
            return getLink('bbs',val);
        },
    },
    created: function() {
        getGameNews().then((res) => {
            console.log(res.data.data);
            this.data = res.data.data.list.slice(0, 5);
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/gamenews.less";
</style>
