<template>
    <div class="shopcar-container">

<<<<<<< HEAD
        <!-- 商品列表区域 -->
=======
        <!-- 商品列表项区域 -->
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
        <div class="goods-list">
            <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
<<<<<<< HEAD
                                <span class="price">￥ {{item.sell_price}}元</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
=======
                                <span class="price">￥{{item.sell_price}}</span>
                                <numbox :initcount='$store.getters.getGoodsCount[item.id]' :goodsid='item.id'></numbox>
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
                                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>

        <!-- 结算区域 -->
        <div class="mui-card">
<<<<<<< HEAD
			<div class="mui-card-content">
				<div class="mui-card-content-inner jiesuan">
					<div class="left">
                        <p>总计（不含运费）</p>
                        <p>
                            已勾选商品 <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件,总价 <span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}元</span>
                        </p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
				</div>
			</div>
		</div>
        
=======
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品 <span class="red">
                                {{$store.getters.getGoodsCountAndAmount.count}}</span> 件，总价 <span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
    </div>
</template>

<script>
<<<<<<< HEAD
import numbox from '../comment/shopcar_numbox.vue'
=======
import numbox from '../subcomponents/shopcar_numbox.vue'
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591

export default {
    data(){
        return {
<<<<<<< HEAD
            goodslist:[],
=======
            goodslist:[] //购物车中所有商品的数据
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
        }
    },
    created(){
        this.getGoodsList();
    },
<<<<<<< HEAD
    methods: {
        getGoodsList(){
            var idArr = [];
            this.$store.state.car.forEach(item=>idArr.push(item.id));
=======
    methods:{
        getGoodsList(){
            // 1. 获取到 store 中所有的商品的Id，然后拼接出一个 用逗号分隔的 字符串
            var idArr = [];
            this.$store.state.car.forEach(item=>idArr.push(item.id));
            // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
            if(idArr.length <= 0){
                return;
            }
            // 获取购物车商品列表
            this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(result=>{
                if(result.body.status === 0){
                    this.goodslist = result.body.message;
                }
            })
        },
        remove(id,index){
<<<<<<< HEAD
            this.goodslist.splice(index,1);
            this.$store.commit('removeFormCar',id);
        },
        selectedChanged(id,val){
            this.$store.commit('updateGoodsSelected',{id,selected:val});
        },
=======
            // 点击删除，把商品从 store 中根据 传递的 Id 删除，同时，把 当前组件中的 goodslist 中，对应要删除的那个商品，使用 index 来删除
            this.goodslist.splice(index,1);
            this.$store.commit('removeFormCar',id)
        },
        selectedChanged(id,val){
            // 每当点击开关，把最新的 快关状态，同步到 store 中
            this.$store.commit('updateGoodsSelected',{id,selected:val})
        }
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
    },
    components:{
        numbox
    }
}
</script>

<style lang="scss" scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
<<<<<<< HEAD
        
        .goods-list{
            .mui-card-content-inner{
                padding: 10px;
                display: flex;
                align-items: center;
                img{
                    width: 50px;
                    height: 50px;
                    margin: 7px;
                }
                .info{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    h1{
                        font-size: 13px;
                    }
                    p{
                        margin-top: 5px;
                    }
                    .price{
                        color: red;
                        font-weight: bold;
                    }
=======
        .goods-list{
            .mint-switch{
                margin-right: 5px;
            }
            .mui-card-content-inner{
                display: flex;
                align-items: center;
            }
            img{
                width: 50px;
                height: 50px;
            }
            h1{
                font-size: 13px;
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 5px;
                p{
                    margin-top: 5px;
                }
                .price{
                    color: red;
                    font-weight: bold;
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
                }
            }
        }
        .jiesuan{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .red{
                color: red;
                font-weight: bold;
                font-size: 16px;
            }
        }
    }
</style>