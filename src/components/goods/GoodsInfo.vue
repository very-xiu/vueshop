<template>
  <div class="goodsinfo-container">

<<<<<<< HEAD
      <!-- 小球动画 -->
      <transition
      @before-enter="beforeEnter"
      @enter="Enter"
      @after-enter="afterEnter">
        <div class="ball" v-show="ballFlag" ref="ball"></div>
      </transition>
=======
    <transition
    @before-enter="beforeEnter"
    @enter="Enter"
    @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591

    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
<<<<<<< HEAD
		<div class="mui-card-header">{{goodsinfo.title}}</div>
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				<p class="price">
                    市场价:<del>￥ {{goodsinfo.market_price}}元</del>&nbsp;&nbsp;
                    销售价:<span class="now_price">￥ {{goodsinfo.sell_price}}元</span>
                </p>
                <p>
                    购买数量:
                    <numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox>
                </p>
                <p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToShowCar">加入购物车</mt-button>
                </p>
			</div>
		</div>
	</div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
		<div class="mui-card-header">商品参数</div>
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				<p>商品货号: {{goodsinfo.goods_no}}</p>
                <p>库存情况: <span style="color:red;font-weight:bold;">{{goodsinfo.stock_quantity}}</span>件</p>
                <p>上架时间: {{goodsinfo.add_time|dateFormat}}</p>
			</div>
		</div>
		<div class="mui-card-footer">
            <mt-button type="primary" plain size="large" @click="getMore(id)">图文介绍</mt-button>
            <mt-button type="danger" plain size="large" @click="getComment(id)">商品评论</mt-button>
        </div>
	</div>

=======
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;
            销售价:<span class="now_price">￥{{goodsinfo.sell_price}}</span>
          </p>

          <p>
            购买数量:
            <numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox>
          </p>

          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShowCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.stock_quantity}}</p>
          <p>上架时间：{{goodsinfo.add_time|dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" plain size="large" @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" plain size="large" @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
  </div>
</template>

<script>
<<<<<<< HEAD
import swiper from "../comment/swiper.vue"
import numbox from '../comment/goodsinfo_numbox.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      ballFlag:false,
      goodsinfo:{},
      selectedCount:1
    };
  },
  created() {
    this.getLunbotu();
    this.getGoodsInfo();
  },
  methods: {
    getLunbotu() {
      console.log(this.id);
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.body.message;
        }
      });
    },
    getGoodsInfo(){
        this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
            if(result.body.status ===0){
                this.goodsinfo = result.body.message[0];
            }
        })
    },
    getComment(id){
      this.$router.push({name:'goodscomment',params:{id}})
    },
    getMore(id){
      this.$router.push({name:'goodsdesc',params:{id}})
    },
    getSelectedCount(count){
      this.selectedCount = count;
      // console.log(this.selectedCount);
    },
    addToShowCar(){
      this.ballFlag = !this.ballFlag;
      var goodsinfo = {
        id:this.id,
        count:this.selectedCount,
        price:this.goodsinfo.sell_price,
        selected:true
      }
      this.$store.commit('addToCar',goodsinfo);
    },
    beforeEnter(el){
      el.style.transform = 'translate(0,0)';
    },
    Enter(el,done){
      el.offsetWidth;

      var ballPosition = this.$refs.ball.getBoundingClientRect();
      var badgePosition = document.getElementById('badge').getBoundingClientRect();
      var xDist = badgePosition.left - ballPosition.left;
      var yDist = badgePosition.top - ballPosition.top;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = 'all .5s cubic-bezier(.4,-0.3, 1, .68)';

      done();
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag;
    }
  },
  components: {
    swiper,
    numbox
  }
=======
import swiper from '../subcomponents/swiper.vue'
// 导入 数字选择框 组件
import numbox from "../subcomponents/goodsinfo_numbox.vue";

export default {
    data(){
        return {
            id:this.$route.params.id,
            lunbotu:[],
            goodsinfo: {}, // 获取到的商品的信息
            ballFlag:false,
            selectedCount: 1 // 保存用户选中的商品数量， 默认，认为用户买1个
        }
    },
    created(){
        this.getLunbotu();
        this.getGoodsInfo();
    },
    methods:{
        getLunbotu(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status === 0){
                    // 先循环轮播图数组的每一项，为 item 添加 img 属性，因为 轮播图 组件中，只认识 item.img， 不认识 item.src
                    result.body.message.forEach(item=>{
                      item.img = item.src;
                    })
                    this.lunbotu = result.body.message;
                }
            })
        },
        getGoodsInfo() {
          // 获取商品的信息
          this.$http.get("api/goods/getinfo/" + this.id).then(result => {
            if (result.body.status === 0) {
            this.goodsinfo = result.body.message[0];
            }
          });
        },
        goDesc(id){
          this.$router.push({name:'goodsdesc',params:{id}});
        },
        goComment(id){
          this.$router.push({name:'goodscomment',params:{id}});
        },
        getSelectedCount(count) {
          // 当子组件把 选中的数量传递给父组件的时候，把选中的值保存到 data 上
          this.selectedCount = count;
          // console.log("父组件拿到的数量值为： " + this.selectedCount);
        },
        addToShowCar(){
          this.ballFlag =!this.ballFlag;
          var goodsinfo = {
            id:this.id,
            count:this.selectedCount,
            price:this.goodsinfo.sell_price,
            selected:true
          }
          this.$store.commit('addToCar',goodsinfo);
        },
        beforeEnter(el){
          el.style.transform = 'translate(0,0)'
        },
        Enter(el,done){
          el.offsetWidth;

          const ballPosition = this.$refs.ball.getBoundingClientRect();
          const badgePosition = document.getElementById('badge').getBoundingClientRect();
          const xDist = badgePosition.left - ballPosition.left;
          const yDist = badgePosition.top - ballPosition.top;

          el.style.transform = `translate(${xDist}px,${yDist}px)`;
          el.style.transition = 'all .5s cubic-bezier(.4,-0.3, 1, .68)';
          done()
        },
        afterEnter(el){
          this.ballFlag =!this.ballFlag;
        }
      },
    components:{
      swiper,
      numbox
    }
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
};
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
    .now_price{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        position: absolute;
        top: 390px;
        left: 146px;
        background-color: red;
        border-radius: 50%;
        z-index: 99;
    }
=======
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price{
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer{
    display: block;
    button{
      margin: 15px 0;
    }
  }
  .ball{
    width: 15px;  
    height: 15px;
    position: absolute;
    top: 390px;
    left: 146px;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
  }
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
}
</style>