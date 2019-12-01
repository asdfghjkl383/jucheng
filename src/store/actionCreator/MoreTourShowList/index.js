export const upMoreTourShowList=({type,payload})=>{
    // console.log("payload:",payload)
    return {
        type,
        payload
    }
}
export default {
    getMoreTourShowList(page=1){
        console.log(page,"wserdftgyhujk")
        return async (dispatch)=>{
            const formdata=new FormData();
            formdata.set("page",page);
            const {data}=await this.$axios.post("/m/tour/ShowList",formdata);
            console.log(data);
            dispatch(upMoreTourShowList({type:"UP_MORE_TOUR",payload:data.data}))
        }
    }
}