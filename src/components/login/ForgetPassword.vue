<template>
    <div class="forget-password">
		<div class="mui-content">
            <h1>找回密码</h1>
			<form class="mui-input-group">
				<!--
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>             	
                -->
				<div class="mui-input-row">
					<label>邮箱</label>
					<input id='email' type="email" class="mui-input-clear mui-input" placeholder="请输入注册邮箱">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='sendMail' class="mui-btn mui-btn-block mui-btn-primary">提交</button>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    h1{
        font-size: 16px;
        margin: 0;
        padding: 10px;
    }
    .mui-bar-nav~.mui-content{
        padding-top: 66px;
    }
</style>