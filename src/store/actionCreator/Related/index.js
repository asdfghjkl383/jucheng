export const upScheduleInfo = (payload)=>({
    type:"UP_RELATED",
    payload
})
export default {
    getRelated(){
        return ()=>{
            const {data} = await this.$axios.get("/api/Show/Search/getShowList",{
                params:{
                    category:this.props.static_data.cate_parent_id,
                    city_id:this.props.static_data.city.city_id
                }
            })
            console.log(222,data);
        }
    }
}