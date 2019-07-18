
export default {
   
    state:{
        cartList:localStorage.vipCart?JSON.parse(localStorage.vipCart).cart:[]
    },
    mutations:{
        addData(state,payload){
            if(state.cartList.length==0){
                state.cartList.push(payload)
            }else{
                var bStop=state.cart.some((item)=>{
                    if(item.filmId===payload.filmId){
                        item.count++
                        return false; 
                    }else{
                        return true
                    }
                })
            }
            if(bStop){
                state.cartList.push(payload)
            }
            localStorage.setItem("vipCart",JSON.stringify(state))
        }
    }
}