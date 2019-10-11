// 项目入口文件
import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 1.1 导入路由的包
import VueRouter from "vue-router"
// 1.2 安装路由
Vue.use(VueRouter)
// 1.3 导入自己的router.js路由模块
import router from './router.js'

// 导入格式化插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

// 2.1 导入vue-resource
import VueResource from 'vue-resource'
// 2.2 安装vue-resource
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root='http://www.liulongbin.top:3005'
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import './lib/bootstrap-3.3.7-dist/css/bootstrap--.css'
import './css/toast.css'

import VideoPlayer from 'vue-video-player'
require('../node_modules/video.js/dist/video-js.css')
require('../node_modules/vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

// 按需导入Mint-UI中的组件
/* import {Header,Swipe, SwipeItem,Button,Search} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search); */
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入App根组件
import app from './App.vue'

// 每次刚进入网站肯定会调用main.js，在刚调用的时候，先从本地存储中，把购物车的数据读取出来放到store中
var car = JSON.parse(localStorage.getItem('car')||'[]');
var store = new Vuex.Store({
    state:{
        car:car     // 将 购物车中的商品的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象， 咱们可以暂时将这个商品对象，设计成这个样子: { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
    },
    mutations:{
        addToCar(state,goodsinfo){
            // 假设在购物车中没有对应的商品
            var flag = false;

            state.car.some(item=>{
                if(item.id == goodsinfo.id){
                    item.count += parseInt(goodsinfo.count);
                    flag = true;
                    return true;
                }
            })

            if(!flag){
                state.car.push(goodsinfo);
            }

            // 当更新car之后，把car数组，存储到本地的localStorage中
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        removeFormCar(state,id){
            state.car.some((item,i)=>{
                if(item.id == id){
                    state.car.splice(i,1);
                    return true;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        updateGoodsInfo(state,goodsinfo){
            state.car.some(item=>{
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count);
                    return true;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        updateGoodsSelected(state,val){
            state.car.forEach(item=>{
                if(item.id == val.id){
                    item.selected = val.selected;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car));
        }
    },
    getters:{
        getAllCount(state){
            var c = 0;
            state.car.forEach(item=>{
                c += item.count;
            })
            return c;
        },
        getGoodsCount(state){
            var o = {};
            state.car.forEach(item=>{
                o[item.id] = item.count;
            })
            return o;
        },
        getGoodsSelected(state){
            var o = {};
            state.car.some(item=>{
                o[item.id] = item.selected;
            })
            return o;
        },
        getGoodsCountAndAmount(state){
            var o = {
                count:0,
                amount:0
            }
            state.car.forEach(item=>{
                if(item.selected){
                    o.count += item.count;
                    o.amount += item.price*item.count;
                }
            })
            return o;
        }
    }
})

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router, // 1.4 挂载路由对象到vm实例上
    store
})