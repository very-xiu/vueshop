<template>

    <div class="mui-numbox" data-numbox-min='1' style="height:30px;padding:0 30px">
		<button class="mui-btn mui-btn-numbox-minus" type="button" style="width:30px;">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button" style="width:30px;">+</button>
	</div>

</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
    mounted(){
        mui('.mui-numbox').numbox();
    },
    props:['max'],
    methods: {
        countChanged(){
            this.$emit('getcount',parseInt(this.$refs.numbox.value));
        }
    },
    watch:{
        //属性监听
        max:function(newVal,oldVal){
            // 使用 MUI的number box组件中的JS API 设置 numbox 的最大值
            mui('.mui-numbox').numbox().setOption('max',newVal);
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>