<template>
  <div>
    <div class="mui-content">
      <div class="mui-content-padded">
        <div class="mui-inline">问题和意见</div>
      </div>
      <div class="row mui-input-row">
        <textarea
          id="question"
          class="mui-input-clear question"
          placeholder="请详细描述你的问题和意见..."
          v-model="msg"
        ></textarea>
      </div>
      <p>微信/QQ/邮箱</p>
      <div class="mui-input-row">
        <input id="contact" type="text" class="mui-input-clear contact" placeholder="(选填,方便我们联系你 )" />
      </div>
      <div class="mui-content-padded">
        <div class="mui-inline">应用评分</div>
        <div class="icons mui-inline" style="margin-left: 6px;">
          <i data-index="1" class="mui-icon mui-icon-star"></i>
          <i data-index="2" class="mui-icon mui-icon-star"></i>
          <i data-index="3" class="mui-icon mui-icon-star"></i>
          <i data-index="4" class="mui-icon mui-icon-star"></i>
          <i data-index="5" class="mui-icon mui-icon-star"></i>
        </div>
      </div>
      <br />
      <mt-button id="submit" size="small" type="primary" @click="goSuccess">发送</mt-button>
    </div>
  </div>
</template>

<script>

import mui from "../../lib/mui/js/mui.min.js";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    mui.init();
    mui(".mui-scroll-wrapper").scroll();

    //应用评分
    mui(".icons").on("tap", "i", function() {
      var index = parseInt(this.getAttribute("data-index"));
      var parent = this.parentNode;
      var children = parent.children;
      if (this.classList.contains("mui-icon-star")) {
        for (var i = 0; i < index; i++) {
          children[i].classList.remove("mui-icon-star");
          children[i].classList.add("mui-icon-star-filled");
        }
      } else {
        for (var i = index; i < 5; i++) {
          children[i].classList.add("mui-icon-star");
          children[i].classList.remove("mui-icon-star-filled");
        }
      }
      starIndex = index;
    });
  },
  methods: {
    goSuccess() {
      if (this.msg.trim().length === 0) {
        Toast({
            message:"发送内容不能为空!",
            position:'top',
            iconClass:'glyphicon glyphicon-remove',
            className:'myToast'
        });
      }else{
        Toast({
            message:"发送成功",
            iconClass:'glyphicon glyphicon-ok',
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../lib/mui/css/feedback.css";
@import '../../lib/bootstrap-3.3.7-dist/css/bootstrap--.css';
@import '../../css/toast.css';

.mui-content {
  overflow: hidden;
  padding: 5px;
  p{
    color: black;
    margin-left: 10px;
  }
}
</style>