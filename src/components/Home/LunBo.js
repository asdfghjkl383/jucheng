// import { Button } from 'antd-mobile';
import React from "react";
import 'antd-mobile/dist/antd-mobile.css'
import oneImg from "../../assets/images/1.jpg"
import twoImg from "../../assets/images/2.jpg"
import threeImg from "../../assets/images/3.jpg"
import fourImg from "../../assets/images/4.jpg"
import fiveImg from "../../assets/images/5.jpg"
import '../../assets/css/lunbo.css'
// ReactDOM.render(<Button>Start</Button>, mountNode);

import { Carousel, WingBlank } from 'antd-mobile';

class LunBo extends React.Component {
  state = {
    // data: ['1', '2', '3'],
    data:[oneImg,twoImg,threeImg,fourImg,fiveImg],
    imgHeight: 176,
  }

  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <div className={".am-wingblank.am-wingblank-lg"}
              key={val}
              style={{ 
                  display: 'inline-block', 
                  width: '100%', 
                  height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ 
                    margin:0,
                    width: '100%', 
                    verticalAlign: 'top' 
                }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </div>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
  componentDidMount() {
    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
  }
}
export default LunBo
// ReactDOM.render(<App />, mountNode);
