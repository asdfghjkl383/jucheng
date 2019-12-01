export const upShowsLibrary=({type,payload})=>{
    // console.log("payload:",payload)
    return {
        type,
        payload
    }
}
export const upCity=({type,payload})=>{
    return {
        type,
        payload
    }
}
export default {
    getShowsLibraryList(category=0){
        return async (dispatch)=>{
            const {data}=await this.$axios.get("/api/Show/Search/getShowList",{
                params:{
                    category,
                    city_id:0,
                    page:1
                }
            });
            dispatch(upShowsLibrary({type:"UP_SHOWS_LIBRARY_SHOW_LIST",payload:data.data.list}));
        }
    },
    getCity(){
        return async (dispatch)=>{
            const {data}=await this.$axios.get("/m/Search/getShowCategory",{
                params:{
                    version:"6.0.8",
                    referer:2
                }
            });
            // console.log(data);
            dispatch(upCity({type:"UP_CITY_LIST",payload:data.data.show_category_list}));
        }
    },

}