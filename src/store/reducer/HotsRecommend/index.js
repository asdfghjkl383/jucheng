import initState from "../../state/HotsRecommend"
export default (state=initState,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="UP_HOT_RECOMMEND"){
        state=payload;
    }
    return state;
};