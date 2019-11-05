<template>
    <ul class="login_tabs">
        <li><span>注册</span></li>
        <li class="login_tabs_s">或</li>
        <li><span>登录</span></li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style>
.login_tabs{
    list-style: none;
    display: flex;
    padding: 0 34px;
}
.login_tabs li{
    cursor: pointer;
    display: flex;
    padding: 10px;
    flex:1;
    justify-content: space-around;
    align-items: center;
    transition: all .6s ease;
}
.login_tabs span{
    display: block;
    padding: 4px 10px;
    border: 1px solid #fff;
    border-radius: 3px;
}
.login_tabs .login_tabs_s{
    justify-content: center;
    transition-duration: .55s;
    transition-delay: .05s;
}
.login_tabs_s{
    font-size: 12px;
}
.login_tabs_s::before,
.login_tabs_s::after{
    content: '-';
}

.login_signup .login_tabs li:first-child{
    transition-duration: .5s;
    transition-delay: .1;
    transform: translate(100%) scale(1.5);
}
.login_signup .login_tabs li:first-child span{
    border-color: transparent;
}
.login_signup .login_tabs li:last-child{
    transform: scale(0.6);
    opacity: 0.4;
}
.login_signup .login_tabs_s{
    transform: translateX(58%);
    opacity: 0.8;
}

.login_signin .login_tabs li:last-child{
    transition-duration: .5s;
    transition-delay: .1s;
    transform: translateX(-100%) scale(1.5);
}
.login_signin .login_tabs li:last-child span{
    border-color: transparent;
}
.login_signin .login_tabs li:first-child{
    transform: scale(0.6);
    opacity: 0.4;
}
.login_signin .login_tabs_s{
    transform: translateX(-58%);
    opacity: 0.8;
}
</style>