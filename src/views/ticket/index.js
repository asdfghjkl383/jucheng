import React from "react";
class Ticket extends React.Component{
    render(){
        return (
            <div>Ticket
                <img src={require("../../assets/images/ticket_empty.png")} />
            </div>
        )
    }
}
export default Ticket;