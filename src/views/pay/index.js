import React from "react";
import "../../assets/css/select_box.css";
class Ticket extends React.Component {
    constructor(){
        super();
        this.state = {
            page:1,
            name:"",
            time:"",
            city_name:"",
            venue_name:""
        }
    }
    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <div>{this.state.time}</div>
                <div>{this.state.city_name} | {this.state.venue_name}</div>
            </div>
        )
    }
    componentDidMount(page=1){
        this.$axios.get("/api/Show/Search/getShowList",{
            params:{
                page
            }
        }).then(({data})=>{
            const list = data.data.list;
            console.log(list)
            list.map((v)=>{
                console.log(v)
                if(v.schedular_id===this.props.match.params.id/1){
                    this.setState({
                        name:v.name,
                        time:v.start_show_time,
                        city_name:v.city_name,
                        venue_name:v.venue_name
                    })
                }
            })
        })
    }
}

export default Ticket;