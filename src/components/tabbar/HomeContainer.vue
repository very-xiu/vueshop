<template>
  <div>
<<<<<<< HEAD

=======
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
    <swiper :lunbotuList='lunbotuList' :isfull="true"></swiper>

    <!-- 九宫格 到 6宫格 的改造工程 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#" @click.prevent="goFeedBack">
          <img src="../../images/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#"  @click.prevent="goVideo">
          <img src="../../images/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
<<<<<<< HEAD
import swiper from '../comment/swiper.vue'
=======
import swiper from '../subcomponents/swiper.vue'
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591

export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //获取轮播图数据的方法
<<<<<<< HEAD
      this.$http
        .get("api/getlunbo")
        .then(result => {
=======
      this.$http.get("api/getlunbo").then(result => {
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
          // console.log(result.body);
          if (result.body.status === 0) {
            // 成功了
            this.lunbotuList = result.body.message;
          } else {
            // 失败了
            Toast("加载轮播图失败...");
          }
        });
    },
    goFeedBack(){
      this.$router.push({name:'feedback'})
    },
    goVideo(){
      this.$router.push({name:'video'})
    }
  },
  components:{
    swiper
  }
};
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>