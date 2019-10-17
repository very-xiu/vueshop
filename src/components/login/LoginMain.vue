<template>
    <div>
        <header class="mui-bar-nav" style="padding-right: 15px;">
			<h1 class="mui-title">登录模板</h1>
			<!-- <button id='setting' class=" mui-pull-right mui-btn-link">设置</button> -->
		</header>
		<div class="mui-content">
			<div class="mui-content-padded">
				<p>
					您好 <span id='account'></span>，您已成功登录。
					<ul>
						<li>这是mui带登录和设置模板的示例App首页。</li>
						<li>您可以点击右上角的 “设置” 按钮，进入设置模板，体验div窗体切换示例。</li>
						<li>在 “设置” 中点击 “退出” 可以 “注销当前账户” 或 “直接关闭应用”。</li>
						<li>你可以设置 “锁屏图案”，这样可通过手势密码代替输入账号、密码；</li>
					</ul>
				</p>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.mui-bar-nav{
  height: 50px;
  background-color: #eee;
  border:1px solid rgb(199, 199, 199);
}
ul {
	font-size: 14px;
	color: #8f8f94;
    padding-left: 15px;
    box-sizing: border-box;
}
.mui-btn {
	padding: 10px;
}
</style>