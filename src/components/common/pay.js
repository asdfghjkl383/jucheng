import React from "react";
import "../../assets/css/select_box.css";
import {Link,withRouter} from "react-router-dom";
class Ticket extends React.Component {
  render() {
    return (
      <div className="select_box">立即支付</div>
    )
  }
  componentDidMount(){
    console.log(this.props.match.params.id)
  }
}
export default withRouter(Ticket);