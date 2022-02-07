import Vue from 'vue'
import App from './App.vue'
import ASUI from '../src/index'
import router from './router/index'
import DemoBlock from './components/DemoBlock/index.vue'
import '../assets/iconfont/iconfont.css'

import '../styles/index.scss'

import './router-guard'

console.log("ASUI: ", ASUI)
Vue.use(ASUI);
Vue.component("demo-block", DemoBlock)

new Vue({
    el:"#app",
    router,
    render:(h)=>h(App)
})
