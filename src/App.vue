<template>
  <div id="app">
    <x-header  :left-options="{showBack: showBack}">请假管理</x-header>
    <router-view></router-view>
    <tabbar>
      <tabbar-item :key="item.label" v-for="item in tabs" :link="item.url" :selected="isSelect(item.url)">
        <span slot="label">{{item.label}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  name: 'app',
  data() {
    return {
      tabs: [
        { label: '首页', url: '/'},
        { label: '请假记录', url: '/history'},
        { label: '德育考勤', url: '/stat'}
      ],
      defaultTab: '/'
    }
  },
  methods: {
    isSelect(tabUrl) {
      return tabUrl === this.$route.path
    }
  },
  computed: {
    showBack() {
      return this.$route.path !== '/'
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
</style>
