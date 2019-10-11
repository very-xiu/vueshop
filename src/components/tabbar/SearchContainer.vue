<template>
  <div>
    <mt-search>
      <mt-cell v-for="item in result" :key="item.title" :title="item.title"></mt-cell>
    </mt-search>
  </div>
</template>

<script>
export default {
  data(){
    return {
      result:[
        {title:'天气'},
        {title:'网络'},
        {title:'狗屎'}
      ]
    }
  }
};
</script>

<style lang="scss" scoped>

</style>