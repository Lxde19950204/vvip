<template>
    <div class="top">
        <div class="goBack" @click="back">
            <span><</span>
        </div>
        <div class="tit">
            {{tit}}
        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tit:""
        }
    },
    created() {
        
    },
    watch: {
        $route:{
            handler(newV){
                console.log(newV.query)
                this.tit=newV.query.name
            },
            deep:true,
            immediate:true
        }
    },
    methods: {
        back(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss" scoped>
    .top{
        height: .88rem;
        line-height: .88rem;
        overflow: hidden;
        font-size: .52rem;
        background-color: #fbfbfa;
        text-align: center;
        display: flex;
        align-items: center;
        border: 0;
        background-position: 0 100%;
        background-size: 100% 1px;
        background-repeat: repeat-x;
        background-image: linear-gradient(180deg,transparent 50%,#dbdbdb 0);
        .goBack{
            width: .88rem;
            height: 100%;
            font-size: .6rem;
            font-weight: 700;
            font-family: "宋体"
        }
        .tit{
            padding-right: .88rem;
            flex: 1;
        font-size: .36rem;
        }
    }
</style>
