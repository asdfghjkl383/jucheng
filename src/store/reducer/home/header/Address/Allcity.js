import iniState from '../../../../state/home/header/Address/Allcity';

const AllcityReducer = function (state=iniState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === "ADD_ALL_CITY"){
        state.acarr = payload.acarr;
        state.acarrId = payload.acarrId
    }
    // console.log(state,999);    //执行了五次空。
    return state;
}

export default AllcityReducer