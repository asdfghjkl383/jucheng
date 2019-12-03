import iniState from '../../../../state/home/header/Address/Hotcity';

const HotcityReducer = function (state=iniState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === "ADD_HOT_CITY"){
        state.hcarr = payload.hcarr;
    }
    return state;
}

export default HotcityReducer