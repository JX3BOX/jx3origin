<template>
    <div class="m-recommend m-rank m-sideblock">
        <div class="m-sideblock-header">
            <i class="el-icon-s-data"></i>
            <a class="u-title" href="/bbs" target="_blank">推荐攻略</a>
            <a href="/bbs" class="u-more" title="查看更多" target="_blank"
                ><i class="el-icon-more"></i
            ></a>
        </div>
        <ul class="u-list" v-if="data">
            <li v-for="(item, j) in data" :key="j">
                <a class="u-link" :href="item.link" target="_blank">
                    <img class="u-icon" :src="item.icon | iconLink" />
                    <span class="u-name">{{ item.label }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { getMenuGroup } from "@/service/setting";
import {iconLink} from '@jx3box/jx3box-common/js/utils'
export default {
    name: "recommend",
    props: [],
    data: function() {
        return {
            data: [],
        };
    },
    computed: {},
    methods: {},
    filters: {
        iconLink
    },
    created: function() {
        getMenuGroup('origin-recommend').then((res) => {
            this.data = res.data.data.menu_group.menus;
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/rank.less";
@import "../assets/css/recommend.less";
</style>
