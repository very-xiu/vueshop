<template>
  <div>
    <mt-search cancel-text="取消" placeholder="搜索" :result.sync="result" :autofocus='true'></mt-search>
  </div>
</template>

<script>
export default {
  data(){
    return {
      result:['看看','一起看','走着看','看地下','看天上']
    }
  }
};
</script>

<style lang="scss">
input[type=search]{
  padding: 0;
  margin: 0;
  height: 26px;
  background-color: white;
}
.mint-cell:hover {
  background-color: #eee;
}
.mint-search-list{
  padding-top: 100px;
}
</style>