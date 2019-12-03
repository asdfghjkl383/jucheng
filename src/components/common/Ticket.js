import React from "react";
import "../../assets/css/select_box.css";
import {Link,withRouter} from "react-router-dom";
class Ticket extends React.Component {
  render() {
    return (
      <Link className="select_box" to={"/select-seat/"+this.props.match.params.id}>
        选座
      </Link>
    )
  }
  componentDidMount(){
    console.log(this.props.match.params.id)
    console.log(this.props)
  }
}
export default withRouter(Ticket);