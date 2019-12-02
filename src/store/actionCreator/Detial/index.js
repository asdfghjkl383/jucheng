export const upScheduleInfo = (payload)=>({
    type:"UP_SCHEDULE_INFO",
    payload
})
export const upRelated = (payload)=>({
    type:"UP_RELATED",
    payload
})
export default {
    getScheduleInfo(){
        return async (dispatch)=>{
            const {data} = await this.$axios.get("/api/Schedule/Schedule/getScheduleInfo",{
                params:{
                    schedular_id:this.props.match.params.id
                }
            });
            const static_data = data.data.static_data;
            var b = function(obj) {
                for(var key in obj) {
                    return false;
                }
                return true;
            }
            if(!b(static_data)){
                const {show_time_data,city,show_desc,venue} = static_data;
                if(!b(show_time_data)){
                    const date = show_time_data.show_time_start_display;
                    this.setState({
                        date
                    })
                }
                if(!b(city)){
                    const {city_name,city_id} = city;
                    this.setState({
                        city_name,
                        city_id
                    })
                }
                if(!b(show_desc)){
                    const desc = show_desc.desc;
                    this.setState({
                        desc
                    })
                }
                if(!b(venue)){
                    const {venue_address,venue_name} = venue;
                    this.setState({
                        venue_address,
                        venue_name
                    })
                }
            }
            dispatch(upScheduleInfo({
                static_data:data.data.static_data,
                show_time_data:data.data.static_data.show_time_data,
                city_name:data.data.static_data.city.city_name,
                show_desc:data.data.static_data.show_desc,
                venue_address:data.data.static_data.venue.venue_address,
                venue_name:data.data.static_data.venue.venue_name
            }))
        }
    },
    getRelated(){
        return async(dispatch)=>{
            const {data} = await this.$axios.get("/api/Schedule/Schedule/getScheduleInfo",{
                params:{
                    schedular_id:this.props.match.params.id
                }
            });
            const category=data.data.static_data.cate_parent_id;
            const city_id = data.data.static_data.city.city_id;
            const results = await this.$axios.get("/api/Show/Search/getShowList",{
                params:{
                    category,
                    city_id
                }
            })
            const relatedList = results.data.data.list;
            const List = relatedList.slice(0,3);
            dispatch(upRelated({
                list:List
            }))
        }
        
    }
}