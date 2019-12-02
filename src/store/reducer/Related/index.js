import stateInit from "../../state/Related";
export default (state=stateInit,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    if(type==="UP_RELATED"){
        state.list = payload.list
    }
    return state;
}