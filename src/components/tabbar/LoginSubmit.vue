<template>
    <span class="login_button">
        <input type="button">
        <label for="">登录</label>
        <label for="">注册</label>
    </span>
</template>

<style>
.login_button{
    position: relative;
    display: flex;
    flex:1;
    overflow: hidden;
}
.login_button input{
    display: block;
    flex: 1;
    width: 0;
    height: 40px;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #0066d0;
}
.login_button label:hover{
    background-color: #1abc9c;
    border-radius: 5px;
}
.login_button label:active{
    background-color: #e74c3c;
}
.login_button label{
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    transition: all .6s ease;
    cursor: pointer;
}
</style>