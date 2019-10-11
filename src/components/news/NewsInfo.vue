<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
<<<<<<< HEAD
            <span>发表时间：{{newsinfo.add_time|dateFormat}}</span>
=======
            <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
            <span>点击：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content"></div>
<<<<<<< HEAD

=======
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
<<<<<<< HEAD
import comment from '../comment/comment.vue'
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            id: this.$route.params.id,
            newsinfo:{}
=======
import {Toast} from 'mint-ui'
// 导入评论子组件
import comment from '../subcomponents/comment.vue'

export default{
    data(){
        return {
            id:this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
            newsinfo:{} // 新闻对象
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
        }
    },
    created(){
        this.getNewsInfo();
    },
    methods:{
<<<<<<< HEAD
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if(result.body.status === 0){
                    this.newsinfo = result.body.message[0];
                }else{
                    Toast('新闻信息加载失败...')
=======
        getNewsInfo(){ //获取新闻详情
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if(result.body.status === 0){
                    // console.log(this.newsinfo+'22222');
                    this.newsinfo = result.body.message[0];
                }else{
                    Toast('获取新闻内容失败')
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
                }
            })
        }
    },
    components:{
        'comment-box':comment
    }
}
</script>

<style lang="scss">
<<<<<<< HEAD
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 18px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            color: #226abb;
            display: flex;
            justify-content: space-between
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
=======
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        color: red;
        margin: 15px 0;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
</style>