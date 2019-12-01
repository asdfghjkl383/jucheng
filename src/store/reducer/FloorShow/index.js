import initState from "../../state/FloorShow"
export default (state=initState,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="UP_FLOOR_SHOW"){
        // console.log("123payload:",payload);
        state=payload;
    }
    // console.log(state)
    return state;
};