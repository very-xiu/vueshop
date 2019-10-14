<template>
    <div class="goodsdesc-container">

        <h3>{{info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
        <a href="#">
            <mt-button type="primary" size="large" plain>返回顶部</mt-button>
        </a>

    </div>
</template>

<script>
export default {
    data(){
        return {
            info:{}
        }
    },
    created(){
        this.getGoodsDesc();
    },
    methods:{
        getGoodsDesc(){
            this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(result=>{
                if(result.body.status === 0){
                    this.info = result.body.message[0];
                }
            })
        }
    }
}
</script>

<style lang="scss">
    .goodsdesc-container{
        padding: 4px;
        h3{
            font-size: 16px;
            color: red;
            margin: 15px 0;
            text-align: center;
        }
        .content{
            img{
                width: 100%;
                height: 100%;
            }
        }
        .mint-button{
            margin: 10px 0;
        }
    }
</style>