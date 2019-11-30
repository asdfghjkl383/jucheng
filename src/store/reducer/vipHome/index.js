import initState from "../../state/vipHome"
export default (state=initState,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="UP_VIP_HOME")
    {
        state=payload;
        // console.log("payload:",payload);
    }
    // console.log("state:",state);
    return state;
};