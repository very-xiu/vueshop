<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
            <span>点击：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content">

        </div>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default{
    data(){
        return {
            id:this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
            newsinfo:{} // 新闻对象
        }
    },
    created(){
        this.getNewsInfo();
    },
    methods:{
        getNewsInfo(){ //获取新闻详情
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if(result.body.status === 0){
                    this.newsinfo = result.body.message[0];
                }else{
                    Toast('获取新闻内容失败')
                }
            })
        }
    }
}
</script>

<style lang="scss">
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
</style>