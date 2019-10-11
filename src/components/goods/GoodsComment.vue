<template>
    <div>
        <cmt-box :id="$route.params.id"></cmt-box>
    </div>
</template>

<script>

import comment from '../comment/comment.vue'

export default {
    components:{
        'cmt-box':comment
    }
}
</script>

<style lang="scss" scoped>
    
</style>