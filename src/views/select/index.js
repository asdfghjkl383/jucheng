import React from "react";
import "../../assets/css/select.css";
import Pay from "../../components/common/pay";
import {withRouter} from "react-router-dom";
class Select extends React.Component{
    render(){
        return (
            <div>
                <div className="selectContainer">
                    <h5>选择日期</h5>
                    <li className="selectDate">2019.12.06 周五</li>
                    <li className="selectDate">2019.12.06 周五</li>
                    <li className="selectDate">2019.12.06 周五</li>
                    <li className="selectDate">2019.12.06 周五</li>
                    <h5>选择场次</h5>
                    <li className="selectCount">19:30</li>
                    <h5>选择价格</h5>
                    <li className="selectPrice">60元</li>
                    <li className="selectPrice">100元</li>
                    <li className="selectPrice">120元</li>
                    <li className="selectPrice">180元</li>
                </div> 
                <Pay ></Pay>
            </div>
        )
    }
    componentDidMount(){
        console.log(111,this.props.match.params.id);
        var selectPriceArr = Array.prototype.slice.call(document.querySelectorAll(".selectPrice"));
        selectPriceArr.map(v=>{
            v.onclick=function(){
                selectPriceArr.map(v=>{
                    v.style.color="#232323";
                    v.style.backgroundColor="rgba(0,0,0,0.08)";
                })
                this.style.backgroundColor="rgba(255,103,67,.08)";
                this.style.color="#ff6743";
            }
        })
        document.querySelector(".selectCount").onclick=function(){
            this.style.color="#ff6743";
            this.style.backgroundColor="rgba(255,103,67,.08)";
        }
        var selectDateArr = Array.prototype.slice.call(document.querySelectorAll(".selectDate"));
        selectDateArr.map(v=>{
            v.onclick=function(){
                selectDateArr.map(v=>{
                    v.style.color="#232323";
                    v.style.backgroundColor="rgba(0,0,0,0.08)";
                })
                this.style.backgroundColor="rgba(255,103,67,.08)";
                this.style.color="#ff6743";
            }
        })
    }
    
}
export default withRouter(Select);