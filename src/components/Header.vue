<template>
    <header class="c-header c-origin-header">
        <div class="c-header-inner">
            <!-- logo -->
            <router-link to="/" class="c-header-logo" id="c-header-logo">
                <i class="u-pic"
                    ><img svg-inline src="../assets/img/header/logo.svg"
                /></i>
                <span class="u-txt">魔盒</span>
            </router-link>
            <!-- client -->
            <clientSwitch client="origin" />
            <!-- nav -->
            <header-nav></header-nav>
            <!-- right -->
            <div class="c-header-right">
                <!-- TODO:优先匹配怀旧服铭牌 -->
                <!-- search -->
                <div class="c-header-search">
                    <div class="c-search">
                        <form
                            class="u-form"
                            :action="search_url"
                            :target="isPhone ? '_self' : '_blank'"
                        >
                            <input
                                class="u-text"
                                type="text"
                                autocomplete="off"
                                name="q"
                                placeholder="搜索.."
                            />
                            <i class="u-btn"
                                ><img
                                    svg-inline
                                    src="../assets/img/header/search-key-slash.svg"
                            /></i>
                        </form>
                    </div>
                </div>
                <!-- user -->
                <!-- <div class="c-header-user" id="c-header-user"> -->
                <!-- TODO:登录注册 -->
                <!-- </div> -->
            </div>
        </div>
    </header>
</template>

<script>
import header_nav from "./header/header_nav.vue";
import {__Root} from '@jx3box/jx3box-common/data/jx3box.json'
export default {
    name: "originHeader",
    data: function() {
        return {
            clientThink: false,
            search_url : __Root + 'search',
            isPhone: false,
        };
    },
    computed: {},
    methods: {
        
    },
    mounted: function() {},
    components: {
        "header-nav": header_nav,
    },
};
</script>

<style lang="less">
@import "../assets/css/header.less";
</style>
