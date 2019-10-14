import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import FeedBack from './components/message feedback/FeedBack.vue'
import Video from './components/video/Video.vue'
import ForgetPassword from './components/login/ForgetPassword.vue'
import Contact from './components/contanct/Contact.vue'

// 创建路由对象
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/:id',component:NewsInfo},
        {path:'/home/photolist',component:PhotoList},
        {path:'/home/photoinfo/:id',component:PhotoInfo},
        {path:'/home/goodslist',component:GoodsList},
        {path:'/home/goodsinfo/:id',component:GoodsInfo,name:'goodsinfo'},
        {path:'/home/goodscomment/:id',component:GoodsComment,name:'goodscomment'},
        {path:'/home/goodsdesc/:id',component:GoodsDesc,name:'goodsdesc'},
        {path:'/home/feedback',component:FeedBack,name:'feedback'},
        {path:'/home/video',component:Video,name:'video'},
        {path:'/home/forgetpassword',component:ForgetPassword,name:'forgetpassword'},
        {path:'/home/contact',component:Contact,name:'contact'}
    ],
    linkActiveClass:' mui-active', // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
    scrollBehavior(to, from,savedPosition) {
        return {
          x: 0,
          y: 0
        }
      }
})


// 把路由对象暴露出去
export default router