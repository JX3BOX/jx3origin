<template>
  <nav class="m-nav">
    <div class="m-nav-list">
      <span class="m-nav-list-item" v-for="(item, i) in list" :key="i">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </span>
    </div>
    <div class="m-nav-logo"></div>
    <div class="m-nav-set"></div>
  </nav>
</template>

<script>
// import single_nav from "./single_nav";
// import list_nav from "./list_nav";
export default {
  name: 'Nav',
  data: function() {
    return {
      list: [
        {
          name: '新闻资讯',
          link: './news',
        },
        {
          name: '干货资料',
          link: './news',
        },
        {
          name: '休闲分享',
          link: './news',
        },
      ],
    }
  },
  computed: {},
  methods: {},
  mounted: function() {},
  components: {
    // single_nav,
    // list_nav,
  },
}
</script>

<style lang="less">
@import '../assets/css/nav.less';
</style>
