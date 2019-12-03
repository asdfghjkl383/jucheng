import React from "react";
import {Link} from "react-router-dom";
import "../../assets/css/ticket.css";
class Ticket extends React.Component{
    render(){
        return (
            <div>
                <div className="ticket_header">
                    <Link className="ticket_header_return" to={"/"}>{"<"}</Link>
                    <span className="ticket_header_span">票夹</span>
                    <img className="ticket_header_more" src={require("../../assets/images/dot.png")} alt={""}/>
                </div>
                <div className="ticket_img">
                    <img src={require("../../assets/images/ticket_empty.png")} />
                </div>
                
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
export default Ticket;