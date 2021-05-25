<template>
    <div id="app">
        <Header client="origin" :overlayEnable="true"></Header>
        <!-- <bg /> -->
        <div class="p-container">
            <div class="m-main">
                <div class="m-primary">
                    <live />
                    <slider />
                    <event />
                    <box />
                    <joke />
                    <!-- <guide /> -->
                    <!-- TODO:表情 -->
                    <topic />
                    <newpost />
                    <!-- TODO:剑三直播 -->
                    <!-- <team /> -->

                    <div class="m-left">
                        <daily />
                        <jx3code />
                        <gamenews />
                        <servers />
                        <price />
                        <!-- TODO:账号同步工具 -->
                        <!-- TODO:APP下载 -->
                    </div>

                    <div class="m-right">
                        <notice />
                        <recommend />
                        <!-- <cjrank /> -->
                        <!-- <macrorank /> -->
                        <!-- <jx3datrank /> -->
                        <!-- TODO:DPS天梯 -->
                        <!-- <wikirank /> -->
                        <!-- <collectionrank /> -->
                        <!-- <examrank /> -->
                        <!-- <namespacerank /> -->
                        <contact />
                    </div>

                    <Footer></Footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Bg from "@/components/bg/Bg.vue";
import box from "@/components/box.vue";
import notice from "@/components/notice.vue";
import slider from "@/components/slider.vue";
import event from "@/components/event.vue";
import live from "@/components/live.vue";
import contact from "@/components/contact.vue";
// import activity from "@/components/activity.vue";

import daily from "@/components/daily.vue";
import jx3code from "@/components/jx3code.vue";
import gamenews from "@/components/gamenews.vue";
import servers from "@/components/servers.vue";
import price from "@/components/price.vue";

import recommend from "@/components/recommend.vue";
// import macrorank from "@/components/rank_macro.vue";
// import jx3datrank from "@/components/rank_jx3dat.vue";
// import examrank from "@/components/rank_exam.vue";
// import wikirank from "@/components/rank_knowledges.vue";
// import cjrank from "@/components/rank_achievements.vue";
// import collectionrank from "@/components/rank_collections.vue";
// import namespacerank from "@/components/rank_namespaces.vue";

import topic from "@/components/topic.vue";
import newpost from "@/components/newpost.vue";
// import team from "@/components/team.vue";
// import guide from "@/components/guide.vue";
import joke from "@/components/joke.vue";

import User from "@jx3box/jx3box-common/js/user";
import { getProfile } from "@/service/user";
import { getConfig } from "@/service/setting.js";
export default {
    name: "App",
    props: [],
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    components: {
        // bg: Bg,
        box,
        notice,
        slider,
        event,
        live,
        contact,

        daily,
        jx3code,
        gamenews,
        servers,
        price,

        recommend,
        // cjrank,
        // macrorank,
        // jx3datrank,
        // wikirank,
        // collectionrank,
        // examrank,
        // namespacerank,

        topic,
        newpost,
        // team,
        // guide,
        joke,
    },
    created: function() {
        if (User.isLogin()) {
            getProfile().then((data) => {
                if (data) {
                    this.$store.state.server = data.jx3_server;
                }
            });
        }

        getConfig().then((res) => {
            let data = res.data.data;
            let _data = {};
            if (data) {
                data.forEach((item) => {
                    _data[item.key] = item.val;
                });
            }
            this.$store.state.config = _data;
        });
    },
};
</script>

<style lang="less">
@import "./assets/css/app.less";
</style>
