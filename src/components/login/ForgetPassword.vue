<template>
    <div class="forget-password">
		<header class="mui-bar-nav">
			<h1 class="mui-title">找回密码</h1>
		</header>
		<div class="mui-content">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<label>邮箱</label>
					<input id='email' type="email" class="mui-input-clear mui-input" placeholder="请输入注册邮箱" v-model="msg">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='sendMail' class="mui-btn mui-btn-block mui-btn-primary" @click="goSubmit">提交</button>
			</div>
		</div>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
    data(){
		return {
			msg:''
		}
	},
	methods: {
		goSubmit(){
			var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			if(this.msg.trim().length === 0){
				return Toast('内容不能为空')
			}else if(pattern.test(this.msg)){
				return Toast('提交成功，请稍等。')
			}else{
				return Toast('邮箱格式不正确！')
			}
		}	
	}
}
</script>

<style lang="scss" scoped>
@import '../../lib/mui/css/style.css';

.mui-bar-nav{
  height: 50px;
  background-color: #eee;
  border:1px solid rgb(199, 199, 199);
}
.mui-bar-nav~.mui-content{
	padding: 0;
}
    .area {
				margin: 20px auto 0px auto;
			}
			.mui-input-group:first-child {
				margin-top: 1px;
				z-index: 99;
			}
			.mui-input-group label {
				width: 22%;
			}
			.mui-input-row label~input,
			.mui-input-row label~select,
			.mui-input-row label~textarea {
				width: 78%;
			}
			.mui-checkbox input[type=checkbox],
			.mui-radio input[type=radio] {
				top: 6px;
			}
			.mui-content-padded {
				margin-top: 25px;
			}
			.mui-btn {
				padding: 10px;
			}
			.mui-input-row label~input, .mui-input-row label~select, .mui-input-row label~textarea{
				margin-top: 1px;
			}
</style>