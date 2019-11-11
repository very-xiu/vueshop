<template>
  <div>

    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id ==0?'mui-active':'']" v-for="item in cates" :key="item.id" @click.prevent="getPhotoListByCateId(item.id)">{{item.title}}</a>
        </div>
      </div>
    </div>

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

  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
import { Toast } from "mint-ui";
import imagesData from '../../data/images.json';
import imgcategoryData from '../../data/imgcategory.json';

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
    });
  },
  methods:{
    getAllCategory(){
      // this.$http.get('api/getimgcategory').then(result=>{
      //   if(result.body.status === 0){
      //       result.body.message.unshift({title:'全部',id:0})
      //       this.cates = result.body.message
      //   }else{
      //     Toast('分类列表刚开始不能滑动')
      //   }
      // })
      this.cates = imgcategoryData.message;//假数据
    },
    getPhotoListByCateId(cateId){
      this.$http.get('api/getimages/'+ cateId).then(result=>{
        if(result.body.status === 0){
          this.list = result.body.message;
        }else{
          Toast('根据分类ID获取图片列表');
        }
      })
    }
  }
};
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
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 9px rgb(78, 78, 78);
    img{
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"]{
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba($color: black, $alpha: .7);
      max-height: 84px;
      .info-title{
        font-size: 14px;
        font-weight: bold;
      }
      .info-body{
        font-size: 13px
      }
    }
  }
}
</style>