<template>
    <span class="login_textfield">
        <label><i v-if="icon" :class="['fa',`fa-${icon}`]"></i>{{label}}</label>
        <input :type="flag?'password':'text'">
    </span>
</template>

<script>
export default {
    props:['label','icon','flag'],
    created() {

    }
}
</script>

<style>
.login_textfield{
    flex: 1;
    display: flex;
    padding: 10px;
    width: 100%;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 1px #0066d0;
}
.login_textfield label{
    line-height: 40px;
    margin-right: 10px;
    color: #007dff;
}
.login_textfield label i{
    width: 20px;
}
.login_textfield input{
    flex: 1;
    width: 0;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    color: #007dff;
}
</style>