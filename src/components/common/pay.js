import React from "react";
import "../../assets/css/select_box.css";
import {Link,withRouter} from "react-router-dom";
class Ticket extends React.Component {
  render() {
    return (
      <Link className="select_box" to={"/pay/"+this.props.match.params.id}>
        立即支付
      </Link>
    )
  }
  componentDidMount(){
    console.log(this.props.match.params.id)
  }
}
export default withRouter(Ticket);