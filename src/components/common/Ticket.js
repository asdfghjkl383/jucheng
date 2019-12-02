import React from "react";
import "../../assets/css/Ticket.css";
import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';

// class Ticket extends React.Component{
    function closest(el, selector) {
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        while (el) {
          if (matchesSelector.call(el, selector)) {
            return el;
          }
          el = el.parentElement;
        }
        return null;
      }
      
      
      class Ticket extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              modal2: false,
            };
          }
          showModal = key => (e) => {
            console.log(e)
            e.preventDefault(); // 修复 Android 上点击穿透
            this.setState({
              [key]: true,
            });
          }
          onClose = key => () => {
            this.setState({
              [key]: false,
            });
          }
        
          onWrapTouchStart = (e) => {
            // fix touch to scroll background page on iOS
            if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
              return;
            }
            const pNode = closest(e.target, '.am-modal-content');
            if (!pNode) {
              e.preventDefault();
            }
          }
        
          render() {
            return (
              <WingBlank>
                <div onClick={this.showModal('modal2')} className="ticket_box">选坐</div>
                <WhiteSpace />
                <Modal
                  popup={true}
                  visible={false}
                  onClose={this.onClose('modal2')}
                  animationType="slide-up"
                  afterClose={() => { alert('afterClose'); }}
                >
                  <List renderHeader={() => <div>委托买入</div>} className="popup-list">
                    {['股票名称', '股票代码', '买入价格'].map((i, index) => (
                      <List.Item key={index}>{i}</List.Item>
                    ))}
                    <List.Item>
                      <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
                    </List.Item>
                  </List>
                </Modal>
              </WingBlank>
              
            );
          }
      }
       
// }
export default Ticket;
// ReactDOM.render(<Ticket />, mountNode);