<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">

          <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in videolist" :key="item.id" @click.prevent="goVideoText(item.id)">{{item.name}}</a>

        </div>
      </div>
    </div>

    <!-- 视频列表区域 -->
    <ul class="video-list">
      <li>
        <h3 v-for="item in cates1" :key="item.num" v-html="item.text"></h3>
        <!-- <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player>-->
      </li>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: "http://www.w3school.com.cn/example/html5/mov_bbb.mp4" //url地址
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      videolist: [
        { id: 0, name: "全部" },
        { id: 1, name: "电影区" },
        { id: 2, name: "动漫区" },
        { id: 3, name: "电视区" },
        { id: 4, name: "LOL区" },
        { id: 5, name: "美食区" },
        { id: 6, name: "音乐区" },
        { id: 7, name: "户外区" },
        { id: 8, name: "搞笑视频区" }
      ],
      cates: [
        {num:0,text:
          "<p>这是电影区，自己的假数据</p><p>这是动漫区，自己的假数据</p><p>这是电视区，自己的假数据</p><p>这是LOL区，自己的假数据</p><p>这是美食区，自己的假数据</p><p>这是音乐区，自己的假数据</p><p>这是户外区，自己的假数据</p><p>这是搞笑视频区，自己的假数据</p>"
        },
        {num:1,text:'这是电影区，自己的假数据'},
        {num:2,text:'这是动漫区，自己的假数据'},
        {num:3,text:'这是电视区，自己的假数据'},
        {num:4,text:'这是LOL区，自己的假数据'},
        {num:5,text:'这是美食区，自己的假数据'},
        {num:6,text:'这是音乐区，自己的假数据'},
        {num:7,text:'这是户外区，自己的假数据'},
        {num:8,text:'这是搞笑视频区，自己的假数据'}
      ],
      cates1:[]
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  created() {
    this.goVideoText(0);
  },
  methods: {
    goVideoText(id){
      this.cates1 = this.cates.slice(id,id+1);
    }
  } 
}
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.video-list {
  list-style: none;
  padding: 0 5px;
  li {
    margin-bottom: 5px;
  }
  p{
    color: red;
    font-weight: bold;
  }
}
</style>