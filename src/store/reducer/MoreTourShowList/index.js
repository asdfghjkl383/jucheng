import initState from "../../state/MoreTourShowList"
export default (state=initState,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="UP_MORE_TOUR"){
        state.moreTourShowList=[
            ...state.moreTourShowList,
            ...payload
        ]
        // console.log("payload:",payload);
    }
    // console.log("state:",state);
    return state;
}