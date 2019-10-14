<template>
  <div class="container">
    <div class="front">
      <span class="turn">
        <i class="iconfont icon-change" @click="go"></i>
      </span>

      <h2>前端小项目</h2>
      <h4>专注于细</h4>
      <div class="links">
        <a href="#">
          <i class="iconfont icon-html"></i>
        </a>
        <a href="#">
          <i class="iconfont icon-js"></i>
        </a>
        <a href="#">
          <i class="iconfont icon-css"></i>
        </a>
        <a href="#">
          <i class="iconfont icon-vuejs"></i>
        </a>
        <a href="#">
          <i class="iconfont icon-react"></i>
        </a>
        <a href="#">
          <i class="iconfont icon-angular"></i>
        </a>
      </div>
    </div>

    <div class="back">
      <span class="turn">
        <i class="iconfont icon-change" @click="go"></i>
      </span>

      <h2>联系我们</h2>
      <h4>提出宝贵的建议</h4>
      <div class="links">
        <a href="#">
          <i class="iconfont icon-web-icon-"></i>
        </a>
        <a href="#">
          <i class="iconfont icon-weixin"></i>
        </a>
        <a href="#">
          <i class="iconfont icon-email"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import "../../css/style.css";

export default {
    data(){
        return {}
    },
  methods: {
    go(){
        $($(".turn i").click(() => {
          $(".back").toggleClass("back-turn");
          $(".front").toggleClass("front-turn");
        })
      );
    }
  }
};
</script>

<style lang="scss" scped>
</style>

export default router