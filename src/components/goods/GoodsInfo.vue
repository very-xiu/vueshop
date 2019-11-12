<template>
  <div class="goodsinfo-container">

      <!-- 小球动画 -->
      <transition
      @before-enter="beforeEnter"
      @enter="Enter"
      @after-enter="afterEnter">
        <div class="ball" v-show="ballFlag" ref="ball"></div>
      </transition>

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

  </div>
</template>

<script>
import swiper from "../comment/swiper.vue"
import numbox from '../comment/goodsinfo_numbox.vue'

import goodinfoimage87 from '../../data/goodlist/goodinfoimage/goodinfoimage87.json'
import goodinfoimage88 from '../../data/goodlist/goodinfoimage/goodinfoimage88.json'
import goodinfoimage89 from '../../data/goodlist/goodinfoimage/goodinfoimage89.json'
import goodinfoimage90 from '../../data/goodlist/goodinfoimage/goodinfoimage90.json'
import goodinfoimage91 from '../../data/goodlist/goodinfoimage/goodinfoimage91.json'
import goodinfoimage92 from '../../data/goodlist/goodinfoimage/goodinfoimage92.json'
import goodinfoimage93 from '../../data/goodlist/goodinfoimage/goodinfoimage93.json'
import goodinfoimage94 from '../../data/goodlist/goodinfoimage/goodinfoimage94.json'
import goodinfoimage95 from '../../data/goodlist/goodinfoimage/goodinfoimage95.json'
import goodinfoimage96 from '../../data/goodlist/goodinfoimage/goodinfoimage96.json'
import goodinfoimage97 from '../../data/goodlist/goodinfoimage/goodinfoimage97.json'
import goodinfoimage98 from '../../data/goodlist/goodinfoimage/goodinfoimage98.json'
import goodinfoimage99 from '../../data/goodlist/goodinfoimage/goodinfoimage99.json'
import goodinfoimage100 from '../../data/goodlist/goodinfoimage/goodinfoimage100.json'
import goodinfoimage101 from '../../data/goodlist/goodinfoimage/goodinfoimage101.json'

import goodinfo87 from '../../data/goodlist/goodinfo/goodinfo87.json'
import goodinfo88 from '../../data/goodlist/goodinfo/goodinfo88.json'
import goodinfo89 from '../../data/goodlist/goodinfo/goodinfo89.json'
import goodinfo90 from '../../data/goodlist/goodinfo/goodinfo90.json'
import goodinfo91 from '../../data/goodlist/goodinfo/goodinfo91.json'
import goodinfo92 from '../../data/goodlist/goodinfo/goodinfo92.json'
import goodinfo93 from '../../data/goodlist/goodinfo/goodinfo93.json'
import goodinfo94 from '../../data/goodlist/goodinfo/goodinfo94.json'
import goodinfo95 from '../../data/goodlist/goodinfo/goodinfo95.json'
import goodinfo96 from '../../data/goodlist/goodinfo/goodinfo96.json'
import goodinfo97 from '../../data/goodlist/goodinfo/goodinfo97.json'
import goodinfo98 from '../../data/goodlist/goodinfo/goodinfo98.json'
import goodinfo99 from '../../data/goodlist/goodinfo/goodinfo99.json'
import goodinfo100 from '../../data/goodlist/goodinfo/goodinfo100.json'
import goodinfo101 from '../../data/goodlist/goodinfo/goodinfo101.json'

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
      // console.log(this.id);
      /* this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.body.message;
        }
      }); */
      if(this.id == 87){
        goodinfoimage87.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage87.message;
      }else if(this.id == 88){
        goodinfoimage88.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage88.message;
      }else if(this.id == 89){
        goodinfoimage89.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage89.message;
      }else if(this.id == 90){
        goodinfoimage90.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage90.message;
      }else if(this.id == 91){
        goodinfoimage91.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage91.message;
      }else if(this.id == 92){
        goodinfoimage92.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage92.message;
      }else if(this.id == 93){
        goodinfoimage93.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage93.message;
      }else if(this.id == 94){
        goodinfoimage94.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage94.message;
      }else if(this.id == 95){
        goodinfoimage95.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage95.message;
      }else if(this.id == 96){
        goodinfoimage96.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage96.message;
      }else if(this.id == 97){
        goodinfoimage97.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage97.message;
      }else if(this.id == 98){
        goodinfoimage98.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage98.message;
      }else if(this.id == 99){
        goodinfoimage99.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage99.message;
      }else if(this.id == 100){
        goodinfoimage100.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage100.message;
      }else if(this.id == 101){
        goodinfoimage101.message.forEach(item=>{
          item.img = item.src;
        });
        this.lunbotu = goodinfoimage101.message;
      }
    },
    getGoodsInfo(){
        /* this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
            if(result.body.status ===0){
                this.goodsinfo = result.body.message[0];
            }
        }) */
        if(this.id == 87){
          this.goodsinfo = goodinfo87.message[0];
        }else if(this.id == 88){
          this.goodsinfo = goodinfo88.message[0];
        }else if(this.id == 89){
          this.goodsinfo = goodinfo89.message[0];
        }else if(this.id == 90){
          this.goodsinfo = goodinfo90.message[0];
        }else if(this.id == 91){
          this.goodsinfo = goodinfo91.message[0];
        }else if(this.id == 92){
          this.goodsinfo = goodinfo92.message[0];
        }else if(this.id == 93){
          this.goodsinfo = goodinfo93.message[0];
        }else if(this.id == 94){
          this.goodsinfo = goodinfo94.message[0];
        }else if(this.id == 95){
          this.goodsinfo = goodinfo95.message[0];
        }else if(this.id == 96){
          this.goodsinfo = goodinfo96.message[0];
        }else if(this.id == 97){
          this.goodsinfo = goodinfo97.message[0];
        }else if(this.id == 98){
          this.goodsinfo = goodinfo98.message[0];
        }else if(this.id == 99){
          this.goodsinfo = goodinfo99.message[0];
        }else if(this.id == 100){
          this.goodsinfo = goodinfo100.message[0];
        }else if(this.id == 101){
          this.goodsinfo = goodinfo101.message[0];
        }
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
};
</script>

<style lang="scss" scoped>
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
}
</style>