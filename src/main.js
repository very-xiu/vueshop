// 项目入口文件
import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from "vue-router"
// 1.2 安装路由
Vue.use(VueRouter)
// 1.3 导入自己的router.js路由模块
import router from './router.js'

// 2.1 导入vue-resource
import VueResource from 'vue-resource'
// 2.2 安装vue-resource
Vue.use(VueResource)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入Mint-UI中的组件
import {Header,Swipe, SwipeItem,Button,Search} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search);

// 导入App根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router // 1.4 挂载路由对象到vm实例上
})