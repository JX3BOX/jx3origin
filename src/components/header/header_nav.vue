<template>
    <nav class="c-header-nav" v-if="nav">
        <div class="u-item-box" v-for="item in nav" :key="item.key">
            <template v-if="item.children && item.children.length">
                <template v-if="item.status">
                    <el-dropdown
                        class="u-menu"
                        :show-timeout="0"
                        trigger="hover"
                    >
                        <a
                            class="u-item el-dropdown-link"
                            :class="{ on: isFocus(item.link) }"
                            :href="item.link"
                            >{{ item.label
                            }}<i class="el-icon-arrow-down el-icon--right"></i
                        ></a>
                        <el-dropdown-menu
                            slot="dropdown"
                            class="c-header-menu"
                            v-if="item.hasChildren"
                        >
                            <el-dropdown-item
                                v-for="subitem in item.children"
                                :key="subitem.key"
                                class="u-menu-item"
                            >
                                <a :href="subitem.link" v-if="subitem.status"
                                    >{{ subitem.label }}
                                    <span v-if="subitem.desc">{{
                                        subitem.desc
                                    }}</span></a
                                ></el-dropdown-item
                            >
                        </el-dropdown-menu>
                    </el-dropdown>
                </template>
            </template>
            <template v-else>
                <a
                    class="u-item"
                    :class="{ on: isFocus(item.link) }"
                    :href="item.link"
                    v-if="item.status"
                    >{{ item.label }}</a
                >
            </template>
        </div>
    </nav>
</template>

<script>
import nav from "../../assets/data/nav.json";
export default {
    name: "",
    props: [],
    data: function() {
        return {
            nav,
        };
    },
    computed: {},
    methods: {
        isFocus: function(type) {
            return location.href.includes(type);
        },
    },
    mounted: function() {},
    components: {},
};
</script>
