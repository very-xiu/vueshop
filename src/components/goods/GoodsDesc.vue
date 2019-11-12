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
import gooddesc from '../../data/goodlist/gooddesc/gooddesc.json'

export default {
    data(){
        return {
            info:{},
            id:this.$route.params.id
        }
    },
    created(){
        this.getGoodsDesc();
    },
    methods:{
        getGoodsDesc(){
            /* this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(result=>{
                if(result.body.status === 0){
                    this.info = result.body.message[0];
                }
            }) */
            if(this.id == 87){
                this.info = gooddesc.message[0];
            }else if(this.id == 88){
                this.info = gooddesc.message[1];
            }else if(this.id == 89){
                this.info = gooddesc.message[2];
            }else if(this.id == 90){
                this.info = gooddesc.message[3];
            }else if(this.id == 91){
                this.info = gooddesc.message[4];
            }else if(this.id == 92){
                this.info = gooddesc.message[5];
            }else if(this.id == 93){
                this.info = gooddesc.message[6];
            }else if(this.id == 94){
                this.info = gooddesc.message[7];
            }else if(this.id == 95){
                this.info = gooddesc.message[8];
            }else if(this.id == 96){
                this.info = gooddesc.message[9];
            }else if(this.id == 97){
                this.info = gooddesc.message[10];
            }else if(this.id == 98){
                this.info = gooddesc.message[11];
            }else if(this.id == 99){
                this.info = gooddesc.message[12];
            }else if(this.id == 100){
                this.info = gooddesc.message[13];
            }else if(this.id == 101){
                this.info = gooddesc.message[14];
            }
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