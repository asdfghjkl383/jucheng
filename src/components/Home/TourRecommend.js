import React from "react"
import {
    Link
} from "react-router-dom"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import tourRecommendListActionCreator from "../../store/actionCreator/TourRecommend"
import "../../assets/css/tourRecommend.css"
import { Carousel, WingBlank } from 'antd-mobile';

class TourRecommend extends React.Component{
    state = {
        data: ['1', '2', '3','4','5','6','7','8','9','10','11', '12', '13','14','15','16','17','18','19','20'],
        imgHeight: 176,
    }
    render(){
        setTimeout(() => {
            this.setState({
                data: this.props.TourRecommendList,
            });
        }, 100);
        return (
            <WingBlank className="tourRecommendContainer">
                <h3>巡回演出</h3><Link to={"/moreTourShowList"} className="more">></Link>
                <Carousel className="space-carousel"
                frameOverflow="visible"
                cellSpacing={10}
                slideWidth={0.8}
                autoplay={false}
                infinite={false}
                dots={false}
                swipeSpeed={20}
                afterChange={index => this.setState({ slideIndex: index })}
                >
                {this.state.data.map((v, index) => (
                    <div key={v} style={{ 
                        display: 'block',
                        position: 'relative',
                        top: this.state.slideIndex === index ? -10 : 0,
                        height: this.state.imgHeight,
                        boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                    }}>
                        <div>
                            <img src={v.pic} alt="" style={{ 
                                width: '100%',
                                height: "150px",
                                verticalAlign: 'top'
                            }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                            }}/>
                            <p className="showName">{v.show_name}</p>
                        </div>
                    </div>
                ))}
                </Carousel>
            </WingBlank>
        )
    }
    componentDidMount(){
        this.props.getTourRecommendList.call(this);
    }
}
function mapStateTpProps(state){
    // console.log("state:",state)
    return {
        TourRecommendList:state.TourRecommend
    }
}
function mapDispatchTpProps(dispatch){
    return bindActionCreators(tourRecommendListActionCreator,dispatch);
}
export default connect(mapStateTpProps,mapDispatchTpProps)(TourRecommend);