<template>
  <div>
    <ul class="mui-table-view">
<<<<<<< HEAD
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key='item.id'>
        <router-link :to="'/home/newsinfo/'+ item.id">
=======
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
<<<<<<< HEAD
                <span>发表时间：{{item.add_time | dateFormat}}</span>
=======
                <span>发表时间：{{item.add_time|dateFormat}}</span>
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
                <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
<<<<<<< HEAD
export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
      this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          this.newslist = result.body.message;
        } else {
          Toast("新闻详情页面加载失败");
        }
      });
    }
  }
=======

export default {
    data(){
        return {
            newslist:[] //新闻列表
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('api/getnewslist').then(result=>{
                if(result.body.status === 0){
                    // 如果没有失败，应该把数据保存到data上
                    this.newslist = result.body.message;
                }else{
                    Totast('加载新闻列表失败，请重试')
                }
            })
        }
    }
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
};
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
=======
.mui-table-view{
    li{
        h1{
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
>>>>>>> 68b7e90327b2c553f488466bc349a4d8684a0591
}
</style>