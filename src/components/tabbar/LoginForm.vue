<template>
    <form class="login_form">
        <div class="login_form_r1">
            <div class="login_text">
                <login-textfield label="注册邮箱地址" icon="envelope-o" />
                <!-- <login-textfield label="Last name" /> -->
            </div>
        </div>
        <div class="login_form_r2">
            <login-textfield label="用户名" icon="user" />
        </div>
        <div class="login_form_r3">
            <login-textfield label="密码" icon="lock" flag='isPassword' />
        </div>
        <div class="login_form_r4">
            <login-textfield label="再次输入注册密码" icon="lock" flag='isPassword' />
        </div>
        <div class="login_form_r5">
            <login-checkbox label="记住我" />
            <label>忘记密码</label>
        </div>
        <div>
            <login-submit />
        </div>
    </form>
</template>

<script>
import LoginTextfield from './LoginTextfield.vue'
import LoginCheckbox from './LoginCheckbox.vue'
import LoginSubmit from './LoginSubmit.vue'

export default {
    data(){
        return {
            isPassword:true
        }
    },
    components:{
        LoginTextfield,
        LoginCheckbox,
        LoginSubmit
    }
}
</script>

<style>

.login_form{
    padding: 20px;
}
.login_form>div{
    padding-bottom: 10px;
    display: flex;
    min-height: 40px;
    justify-content: space-between;
    transition: all .6s ease;
}
.login_text{
    display: flex;
    flex: 1;
}
.login_text .login_textfield{
    border-radius: 0;
}
.login_text .login_textfield:first-child{
    border-radius: 2px 0 0 2px;
}
.login_text .login_textfield:last-child{
    border-radius: 0 2px 2px 0;
}

/* 控制自动登录和忘记密码的显示与隐藏 */
.login_signup .login_form_r5{
    opacity: 0;
    transition-duration: .4s;
}

/* 当点击上方按钮时文字显示为'注册'，隐藏文字为'登录'的字样 */
.login_signup .login_button label:nth-child(2){
    transform: translateY(-100%);
    opacity: 0;
}
/* 当点击上方按钮时文字显示为'登录'，隐藏文字为'注册'的字样 */
.login_signin .login_button label:nth-child(3){
    transform: translateY(100%);
    opacity: 0;
}

/* 当点击上方按钮时文字显示为'登录'，隐藏 r1和r4 的内容 */
.login_signin .login_form_r1,
.login_signin .login_form_r4{
    opacity: 0;
    transform: translateY(30%) scale(0.8)
}

.login_signin .login_form_r2,
.login_signin .login_form_r3{
    transform: translateY(-100%);
}
.login_signin .login_form_r5{
    transform: translateY(-350%);
}
.login_signin .login_form_r5 label{
    cursor: pointer;
}
    
</style>