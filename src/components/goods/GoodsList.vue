<template>
    <div class="goods-list">

        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="图片">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}元</span>
                    <span class="old">￥{{item.market_price}}元</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
<<<<<<< HEAD
import goodlistData from '../../data/goodlist/goodlist.json';
import goodlistData1 from '../../data/goodlist/goodlist1.json';
=======
import goodslistData from '../../data/goodslist.json'
>>>>>>> 42c5be18811d562560a12d4913cd9cf6405d3620

export default {
    data(){
        return {
            goodslist:[],
            pageindex:1
        }
    },
    created(){
        this.getGoodsList();
    },
    methods:{
        getGoodsList(){
<<<<<<< HEAD
            /* this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
                if(result.body.status === 0){
                    this.goodslist = this.goodslist.concat(result.body.message);
                }
            }) */
            if(this.pageindex == 1){
                this.goodslist = this.goodslist.concat(goodlistData.message);
            }else if(this.pageindex == 2){
                this.goodslist = this.goodslist.concat(goodlistData1.message);
            }
=======
            // this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
            //     if(result.body.status === 0){
            //         this.goodslist = this.goodslist.concat(result.body.message);
            //     }
            // })
            this.goodslist = goodslistData.message
>>>>>>> 42c5be18811d562560a12d4913cd9cf6405d3620
        },
        getMore(){
            this.pageindex++;
            this.getGoodsList();
        },
        goDetail(id){
            this.$router.push({name:'goodsinfo',params:{id}})
        }
    }
}
</script>

<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item{
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 9px #ccc;
            margin: 4px 0;
            padding: 2px;
            min-height: 293px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width: 100%;
                border-bottom: 1px solid #26a2ff;
                padding-bottom: 5px;
            }
            .title{
                font-size: 14px;
            }

            .info{
                background-color: #eee;
                padding: 3px;
                .price{
                    margin-bottom: 2px;
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration: line-through;
                        margin-left: 10px;
                        font-size: 12px
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                    margin-bottom: 0px;
                }
            }

        }
    }
</style>