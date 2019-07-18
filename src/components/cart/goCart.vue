<template>
    <div class="goCart">
        <router-link :to="{path:'/cart',query:{name:'购物车'}}"> 
            <span class="iconfont">&#xe73d;</span>
        </router-link>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/iconfont/iconfont.css";

.goCart{
    position: fixed;
    bottom: .6rem;
    left: .4rem;
    min-width: .9rem;
    height: .9rem;
    z-index: 1280;
    background-color: rgba(25,29,38,.95);
    border-radius: .6rem;
    text-align: center;
    line-height: .9rem;
    a{
        color: #fff;
        span{
            display: block;
            float: left;
            width: .85rem;
            height: .9rem;
            font-size: .6rem;
            vertical-align: middle;
            text-align: center;
            color: #fff;
        }
    }
    
}
</style>
