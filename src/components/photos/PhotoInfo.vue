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
            this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                if(result.body.status === 0){
                    this.photoinfo = result.body.message[0]
                }else{
                    Toast("图片详情加载失败!")
                }
                // console.log(this.id);
            })
        },
        getThumbs(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status === 0){
                    result.body.message.forEach(item=>{
                        item.w = 600;
                        item.h = 500;
                        item.msrc = item.src;
                    })
                    this.slide1 = result.body.message;
                }
            })
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