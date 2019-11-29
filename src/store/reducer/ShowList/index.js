import stateInit from "../../state/ShowList";
export default (state=stateInit,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    if(type==="UP_SHOW_LIST"){
        state.page = payload.page;
        state.list = [
            ...state.list,
            ...payload.list
        ]
    }
    return state;
}