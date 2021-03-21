<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
// import Info from "@/components/Info.vue";
import Nav from '@/components/Nav.vue'
// import Extend from "@/components/Extend.vue";
// import tabs from "@/components/tabs";
// import single from "@/components/single.vue";
 

export default {
  name: 'App',
  props: [],
  data: function() {
    return {}
  },
  computed: {},
  methods: {},
  beforeCreate: function() {
   
  },
  components: {
    Nav,
  },
}
</script>

<style lang="less">
@import './assets/css/app.less';
</style>
