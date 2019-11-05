<template>
    <span class="login_checkbox">
        <input :id="id" type="checkbox">
        <label :for="id">{{label}}</label>
    </span>    
</template>

<script>

let GID = 1;
export default {
    props:{
        label:{
            type:String
        }
    },
    
    data(){
        return {
            id:`login-checkbox-${GID++}`
        }
    }
}
</script>

<style>
/* 隐藏默认的多选框，并自己制作出一个多选框 */
.login_checkbox input{
    display: none;
}
.login_checkbox label::before,
.login_checkbox label::after{
    content: '';
    display: inline-block;
    margin-right: 5px;
    margin-top: 3px;
    width: 14px;
    height: 14px;
    vertical-align: top;
}
.login_checkbox label::before{
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 1px 1px #004c9c;
}

/* 多选框里面的 √ 的样式 */
.login_checkbox label::after{
    content: '\f00c';
    position: relative;
    display: none;
    z-index: 10;
    margin-right: -14px;
    width: 12px;
    height: 12px;
    padding: 1px;
    font: normal normal normal 12px/1 FontAwesome;
    color: #007ddf;
    float: left;
}
.login_checkbox input:checked+label::after{
    display: inline-block;
}
</style>