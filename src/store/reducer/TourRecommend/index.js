import initState from "../../state/TourRecommend"
export default (state=initState,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="UP_TOUR_RECOMMEND")
    {
        state=payload;
        // console.log("1payload:",payload);
    }
    // console.log("2state:",state);
    return state;
};