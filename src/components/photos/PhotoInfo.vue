<template>
    <div class="photo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间: {{photoinfo.add_time|dateFormat}}</span>
            <span>点击: {{photoinfo.click}}次</span>
        </p>

        <hr>

        <!-- 缩略图区域 -->
        <div class="thumbs">
            <vue-preview :slides="slide1"></vue-preview>
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
import comment from '../comment/comment.vue'
import {Toast} from 'mint-ui'
import imagesData from '../../data/images.json';
import photoinfo37 from '../../data/photoinfo/photoinfo37.json';
import photoinfo38 from '../../data/photoinfo/photoinfo38.json';
import photoinfo39 from '../../data/photoinfo/photoinfo39.json';
import photoinfo40 from '../../data/photoinfo/photoinfo40.json';
import photoinfo41 from '../../data/photoinfo/photoinfo41.json';
import photoinfo42 from '../../data/photoinfo/photoinfo42.json';
import photoinfo43 from '../../data/photoinfo/photoinfo43.json';
import photoinfo44 from '../../data/photoinfo/photoinfo44.json';
import photoinfo45 from '../../data/photoinfo/photoinfo45.json';
import photoinfo46 from '../../data/photoinfo/photoinfo46.json';
import photoinfo47 from '../../data/photoinfo/photoinfo47.json';
import photoinfo48 from '../../data/photoinfo/photoinfo48.json';
import photoinfo49 from '../../data/photoinfo/photoinfo49.json';
import photoinfo50 from '../../data/photoinfo/photoinfo50.json';
import photoinfo51 from '../../data/photoinfo/photoinfo51.json';
import photoinfo52 from '../../data/photoinfo/photoinfo52.json';
import photoinfo53 from '../../data/photoinfo/photoinfo53.json';

export default {
    data(){
        return {
            id:this.$route.params.id,
            photoinfo:{},
            slide1:[]
        }
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods:{
        getPhotoInfo(){
            /* this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                if(result.body.status === 0){
                    this.photoinfo = result.body.message[0]
                }else{
                    Toast("图片详情加载失败!")
                }
                // console.log(this.id);
            }) */
                
            if(this.id == 37){
                this.photoinfo = imagesData.message[0];
            }else if(this.id == 38){
                this.photoinfo = imagesData.message[1];
            }else if(this.id == 39){
                this.photoinfo = imagesData.message[2];
            }else if(this.id == 40){
                this.photoinfo = imagesData.message[3];
            }else if(this.id == 41){
                this.photoinfo = imagesData.message[4];
            }else if(this.id == 42){
                this.photoinfo = imagesData.message[5];
            }else if(this.id == 43){
                this.photoinfo = imagesData.message[6];
            }else if(this.id == 44){
                this.photoinfo = imagesData.message[7];
            }else if(this.id == 45){
                this.photoinfo = imagesData.message[8];
            }else if(this.id == 46){
                this.photoinfo = imagesData.message[9];
            }else if(this.id == 47){
                this.photoinfo = imagesData.message[10];
            }else if(this.id == 48){
                this.photoinfo = imagesData.message[11];
            }else if(this.id == 49){
                this.photoinfo = imagesData.message[12];
            }else if(this.id == 50){
                this.photoinfo = imagesData.message[13];
            }else if(this.id == 51){
                this.photoinfo = imagesData.message[14];
            }else if(this.id == 52){
                this.photoinfo = imagesData.message[15];
            }else if(this.id == 53){
                this.photoinfo = imagesData.message[16];
            }
            
            
        },
        getThumbs(){
            /* this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status === 0){
                    result.body.message.forEach(item=>{
                        item.w = 600;
                        item.h = 500;
                        item.msrc = item.src;
                    })
                    this.slide1 = result.body.message;
                }
            }) */
            if(this.id == 37){
                photoinfo37.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo37.message;
            }else if(this.id == 38){
                photoinfo38.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo38.message;
            }else if(this.id == 39){
                photoinfo39.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo39.message;
            }else if(this.id == 40){
                photoinfo40.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo40.message;
            }else if(this.id == 41){
                photoinfo41.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo41.message;
            }else if(this.id == 42){
                photoinfo42.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo42.message;
            }else if(this.id == 43){
                photoinfo43.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo43.message;
            }else if(this.id == 44){
                photoinfo44.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo44.message;
            }else if(this.id == 45){
                photoinfo45.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo45.message;
            }else if(this.id == 46){
                photoinfo46.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo46.message;
            }else if(this.id == 47){
                photoinfo47.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo47.message;
            }else if(this.id == 48){
                photoinfo48.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo48.message;
            }else if(this.id == 49){
                photoinfo49.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo49.message;
            }else if(this.id == 50){
                photoinfo50.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo50.message;
            }else if(this.id == 51){
                photoinfo51.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo51.message;
            }else if(this.id == 52){
                photoinfo52.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo52.message;
            }else if(this.id == 53){
                photoinfo53.message.forEach(item=>{
                    item.w = 600;
                    item.h = 500;
                    item.msrc = item.src;
                })
                this.slide1 = photoinfo53.message;
            }
        }
    },
    components:{
        'cmt-box':comment
    }
}
</script>

<style lang="scss" scoped>
    .photo-container{
        padding: 3px;
        h3{
            color: #26a2ff;
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
        }
    }
</style>