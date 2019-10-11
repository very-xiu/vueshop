<template>
  <div>
<<<<<<< HEAD

    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id ==0?'mui-active':'']" v-for="item in cates" :key="item.id" @click.prevent="getPhotoListByCateId(item.id)">{{item.title}}</a>
=======
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">{{item.title}}</a>
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
        </div>
      </div>
    </div>

<<<<<<< HEAD
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link :to="'/home/photoinfo/'+ item.id" tag="li" v-for="item in list" :key="item.id">
        <img v-lazy="item.img_url" alt="">
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>

=======
  <!-- 图片列表区域 -->
  <ul class="photo-list">
    <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
      <img v-lazy="item.img_url">
      <div class="info">
        <h1 class="info-title">{{item.title}}</h1>
        <div class="info-body">{{item.zhaiyao}}</div>
      </div>
    </router-link>
  </ul>
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
  </div>
</template>

<script>
<<<<<<< HEAD
import mui from "../../lib/mui/js/mui.min.js";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      cates:[],
      list:[]
    };
  },
  created(){
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
=======
// 1.导入mui的js文件
import mui from '../../lib/mui/js/mui.min.js';
import {Toast} from 'mint-ui'

export default {
  data(){
    return {
      cates:[], //所有分类列表的数组
      list:[] //图片列表的数据
    }
  },
  created(){
    this.getAllCategory();
    // 默认进入页面，就主动请求所有图片列表的数据
    this.getPhotoListByCateId(0);
  },
  mounted(){
    // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
    // 2. 初始化滑动控件
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
    });
  },
  methods:{
    getAllCategory(){
<<<<<<< HEAD
      this.$http.get('api/getimgcategory').then(result=>{
        if(result.body.status === 0){
            result.body.message.unshift({title:'全部',id:0})
            this.cates = result.body.message
        }else{
          Toast('分类列表刚开始不能滑动')
=======
      // 获取所有的图片分类
      this.$http.get('api/getimgcategory').then(result=>{
        if(result.body.status === 0){
          // 手动拼接一个最完整的图片列表
          result.body.message.unshift({title:'全部',id:0});
          this.cates = result.body.message;
        }else{
          Toast('图片列表加载失败!')
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
        }
      })
    },
    getPhotoListByCateId(cateId){
<<<<<<< HEAD
      this.$http.get('api/getimages/'+ cateId).then(result=>{
        if(result.body.status === 0){
          this.list = result.body.message;
        }else{
          Toast('根据分类ID获取图片列表');
=======
      // 根据分类ID获取图片列表
      this.$http.get('api/getimages/' + cateId).then(result=>{
        if(result.body.status === 0){
          this.list = result.body.message;
        }else{
          Toast('分类获取ID失败！')
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
        }
      })
    }
  }
<<<<<<< HEAD
};
=======
}
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photo-list{
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li{
    text-align: center;
    background-color: #ccc;
    margin-bottom: 10px;
<<<<<<< HEAD
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 9px rgb(78, 78, 78);
=======
    box-shadow: 0 0 9px rgb(78, 78, 78);
    position: relative;
    overflow: hidden;
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
    img{
      width: 100%;
      vertical-align: middle;
    }
<<<<<<< HEAD
    img[lazy="loading"]{
=======
    img[lazy="loading"] {
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
<<<<<<< HEAD
      background-color: rgba($color: black, $alpha: .7);
=======
      background-color: rgba(0, 0, 0, 0.699);
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
      max-height: 84px;
      .info-title{
        font-size: 14px;
        font-weight: bold;
      }
      .info-body{
<<<<<<< HEAD
        font-size: 13px
=======
        font-size: 13px;
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
      }
    }
  }
}
</style>