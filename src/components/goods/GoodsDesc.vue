<template>
    <div class="goodsdesc-container">
<<<<<<< HEAD

        <h3>{{info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
        <a href="#">
            <mt-button type="primary" size="large" plain>返回顶部</mt-button>
        </a>

=======
        <h3>{{info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
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
<<<<<<< HEAD
            color: red;
=======
            color: #226aff;
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
            margin: 15px 0;
            text-align: center;
        }
        .content{
            img{
                width: 100%;
<<<<<<< HEAD
                height: 100%;
            }
        }
        .mint-button{
            margin: 10px 0;
        }
=======
            }
        }
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
    }
</style>