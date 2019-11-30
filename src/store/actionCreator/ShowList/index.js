export const upShowList = (payload)=>({
    type:"UP_SHOW_LIST",
    payload
})
export default {
     getShowList(page=1){
        return async (dispatch)=>{
            const {data} = await this.$axios.get("/api/Show/Search/getShowList",{
                params:{
                    page
                }
            })
            dispatch(upShowList({page:data.data.page,list:data.data.list}))
        }
    }
}
