// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import {
  XButton,
  XHeader,
  ButtonTab,
  ButtonTabItem,
  Panel
} from 'vux'

import Home from './components/home'
import InCharge from './components/incharge'
import NoCharge from './components/nocharge'
import History from './components/history'
import Stat from './components/stat'

Vue.component('panel', Panel)
Vue.component('x-button', XButton)
Vue.component('x-header', XHeader)
Vue.component('button-tab', ButtonTab)
Vue.component('button-tab-item', ButtonTabItem)
Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home,
  },
  {
    path: '/vacation/incharge',
    name: 'incharge',
    component: InCharge,
  },
  {
    path: '/vacation/nocharge',
    name: 'nocharge',
    component: NoCharge,
  },
  {
    path: '/history',
    name: 'history',
    component: History,
  },
  {
    path: '/stat',
    name: 'stat',
    component: Stat
  }

];

const router = new VueRouter({
  routes,
});

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  render: h => h(App),
})
