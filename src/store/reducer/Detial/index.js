import stateInfo from "../../state/Detial";
export default (state=stateInfo,{type,payload})=>{
    state = JSON.parse(JSON.stringify(state));
    if(type==="UP_SCHEDULE_INFO"){
        state.static_data = payload.static_data;
        state.data = payload.show_time_data.show_time_start_display;
        state.city_name = payload.static_data.city.city_name;
        state.desc = payload.show_desc;
        state.venue_name = payload.static_data.venue.venue_name;
        state.venue_address = payload.static_data.venue.venue_address;
    }
    return state;
}