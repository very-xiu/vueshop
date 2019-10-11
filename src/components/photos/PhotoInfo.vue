<template>
<<<<<<< HEAD
    <div class="photo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间: {{photoinfo.add_time|dateFormat}}</span>
            <span>点击: {{photoinfo.click}}次</span>
=======
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time|dateFormat}}</span>
            <span>点击:{{photoinfo.click}}次</span>
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
        </p>

        <hr>

        <!-- 缩略图区域 -->
        <div class="thumbs">
<<<<<<< HEAD
            <vue-preview :slides="slide1"></vue-preview>
=======
            <vue-preview :slides="slide1"  @close="handleClose"></vue-preview>
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
<<<<<<< HEAD
</template>

<script>
import comment from '../comment/comment.vue'
import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            id:this.$route.params.id,
            photoinfo:{},
=======
    
</template>

<script>
import {Toast} from 'mint-ui'
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return{
            id:this.$route.params.id,//从路由中获取到的图片ID
            photoinfo:{}, //图片详情
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
            slide1:[]
        }
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods:{
        getPhotoInfo(){
<<<<<<< HEAD
            this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                if(result.body.status === 0){
                    this.photoinfo = result.body.message[0]
                }else{
                    Toast("图片详情加载失败!")
=======
            // 获取图片的详情
            this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                if(result.body.status === 0){
                    this.photoinfo = result.body.message[0];
                }else{
                    Toast('图片详情加载失败!');
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
                }
            })
        },
        getThumbs(){
<<<<<<< HEAD
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status === 0){
                    result.body.message.forEach(item=>{
                        item.w = 600;
                        item.h = 500;
=======
            //获取缩略图
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status === 0){
                    //循环每个图片数据，补全图片的宽和高
                    result.body.message.forEach(item=>{
                        item.w = 600;
                        item.h = 400;
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
                        item.msrc = item.src;
                    })
                    this.slide1 = result.body.message;
                }
            })
<<<<<<< HEAD
        }
=======
        },
        handleClose () {
        console.log('close event')
      }
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
    },
    components:{
        'cmt-box':comment
    }
}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
    .photo-container{
        padding: 3px;
        h3{
            color: #26a2ff;
=======
    .photoinfo-container{
        padding: 3px;
        h3{
            color: #26A2FF;
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content{
            font-size: 13px;
            line-height: 30px;
        }
        .thumbs{
<<<<<<< HEAD
            /deep/ .my-gallery{
                display: flex;
                flex-wrap: wrap;
                figure{
                    width: 30%;
                    margin: 5px;
                    img{
                        width: 100%;
                        box-shadow:  0 0 8px #999;
                        border-radius: 5px;
                    }
                }
            }
=======
            /deep/ .my-gallery{   //deep深层作用选择器
              display: flex;
              flex-wrap:wrap;//默认换行
              figure{
                  width: 30%;  
                  margin: 5px; 
                  img{
                      width: 100%;
                      box-shadow: 0 0 8px #999;  
                      border-radius: 5px;
                  }
              }
          }
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
        }
    }
</style>