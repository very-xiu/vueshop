<template>
    <div class="login" :class="{login_signin:isSignIn,login_signup:isSignUp}">
        <LoginTabs @click.native="switchState"></LoginTabs>
        <LoginForm />
    </div>
</template>

<script>
import LoginTabs from './LoginTabs.vue'
import LoginForm from './LoginForm.vue'

export default {
    components:{
        LoginTabs,
        LoginForm
    },
    data() {
        return {
            state:1       
        }
    },
    computed: {
        isSignIn(){
            return this.state === 1
        },
        isSignUp(){
            return this.state === 2
        }
    },
    methods: {
        switchState(){
            this.state = this.state === 1?2:1;
        }
    }
}
</script>

<style>
.login{
    width:100%;
    height: 100%;
    color: white;
    font-size: 14px;
    background-color: #1e90ff;
    overflow: hidden;
}
</style>

