export const upFloorShowList=({type,payload})=>{
    // console.log("payload:",payload)
    return {
        type,
        payload
    }
}
export default {
    getFloorShowList(){
        return async (dispatch)=>{
            const {data}=await this.$axios.get("/api/home/index/getFloorShow",{
                params:{
                    city_id:0
                }
            })
            // console.log(data);
            dispatch(upFloorShowList({type:"UP_FLOOR_SHOW",payload:data.data}))
        }
    }
}