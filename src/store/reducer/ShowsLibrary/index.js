import initState from "../../state/ShowsLibrary"
export default (state=initState,{type,payload})=>{
    state=JSON.parse(JSON.stringify(state));
    if(type==="UP_SHOWS_LIBRARY_SHOW_LIST")
    {
        state.showsLibraryList=payload;
    }
    if(type==="UP_CITY_LIST"){
        state.city=payload;
        // console.log("payload:",payload);
    }
    // console.log("state:",state);
    return state;
}