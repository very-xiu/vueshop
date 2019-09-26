<template>
  <div>
    <form class="mui-input-group">
      <div class="mui-input-row">
        <label>用户名</label>
        <input type="text" class="mui-input-clear" placeholder="请输入用户名" />
      </div>
      <div class="mui-input-row">
        <label>密码</label>
        <input type="password" class="mui-input-password" placeholder="请输入密码" />
      </div>
        <mt-button type="danger" size="large">登录</mt-button>
        <mt-button type="primary" size="large">注册</mt-button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button{
  margin-top: 18px;
}
</style>