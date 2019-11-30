export const upShowList = (payload)=>({
    type:"UP_SHOW_LIST",
    payload
})
export default {
     getShowList(page=1){
        console.log(page);
        return async (dispatch)=>{
            const {data} = await this.$axios.get("/api/Show/Search/getShowList",{
                params:{
                    page
                }
            })
            // console.log(data.data);
            // const {list} = data.data;
            // console.log(list,page);
            // let page = data.data.page;
            dispatch(upShowList({page:data.data.page,list:data.data.list}))
        }
    }
}
