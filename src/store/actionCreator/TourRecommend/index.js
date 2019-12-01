export const upTourRecommendList=({type,payload})=>{
    // console.log("payload:",payload)
    return {
        type,
        payload
    }
}
export default {
    getTourRecommendList(){
        return async (dispatch)=>{
            const {data}=await this.$axios.get("/api/home/index/getTourRecommendList");
            // console.log(data);
            dispatch(upTourRecommendList({type:"UP_TOUR_RECOMMEND",payload:data.data.tour_show_list}));
        }
    }
}