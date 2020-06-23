import Vue from 'vue'

import _ from 'lodash';
Object.defineProperty(Vue.prototype, '$_', { value: _ });

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/callouts.scss'

import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

export const EventBus = new Vue();

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
