export const upHotsRecommend=(payload)=>{
    return {
        type:"UP_HOT_RECOMMEND",
        payload
    }
}
export default {
    getHotsRecommendList(){
        return async (dispatch)=>{
            const {data}=await this.$axios.get("/home/index/getHotsRecommendList",{
                params:{
                    city_id:0
                }
            });
            dispatch(upHotsRecommend(data.data.hots_show_list));
        }
    }
}