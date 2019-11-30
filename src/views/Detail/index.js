import React from "react";
import "../../assets/css/detail.css";
// import "../../assets/js/babel.min.js";
class Detail extends React.Component{
    constructor(){
        super();
        this.state = {
            static_data:{},
            date:"",
            city_name:"",
            desc:""
        }
    }
    
    render(){
        const static_data = this.state.static_data;
        return (
            <div>详情页
                {
                    <div>
                        <img src={static_data.pic} alt="" />
                        <p>{static_data.show_name}</p>
                        <p>￥{static_data.price_range}</p>
                        <p>{this.state.date}</p>
                        <p>{this.state.city_name}</p>
                        <div className="box" dangerouslySetInnerHTML={{__html:this.state.desc}}></div>
                        {/* <script src="../../assets/js/babel.min.js"></script>
                        <script type="text/babel">{this.state.desc}</script> */}
                    </div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.$axios.get("/api/Schedule/Schedule/getScheduleInfo",{
            params:{
                schedular_id:this.props.match.params.id
            }
        }).then(({data})=>{
            const static_data = data.data.static_data;
            var b = function(obj) {
                for(var key in obj) {
                    return false;
                }
                return true;
            }
    
            if(!b(static_data)){
                console.log(static_data);
                const {show_time_data} = static_data;
                const {city} = static_data;
                const {show_desc} = static_data;
                if(!b(show_time_data)){
                    const date = show_time_data.show_time_start_display
                    console.log(show_time_data.show_time_start_display);
                    this.setState({
                        date
                    })
                }
                if(!b(city)){
                    const city_name = city.city_name
                    console.log(city_name);
                    this.setState({
                        city_name
                    })
                }
                if(!b(show_desc)){
                    const desc = show_desc.desc
                    console.log(desc);
                    this.setState({
                        desc
                    })
                }
            }
            this.setState({
                static_data,
            })
        })
    }
}
export default Detail;