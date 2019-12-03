import React from 'react';
import '../../App.css';
import './index1.css';
class Theater_one extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list:[],           
            keywords:"",
            page:1
        }
    }
    render() {
        return (
            <div>
                <div className={'header'}>
                <input 
                ref={"wj"}
                type={'text'} placeholder={'搜索热门演出'}                   
                    onKeyDown={(v) => this.searchShowList(v,this.state.page++)} />取消
                <input onClick={()=>this.props.history.push('./theater')} style={{width:'100px',position:'absolute',left:'0px'}} type={'button'} value={'>'}/>  
                </div>
                {                                          
                this.state.list.map(v=>(   
                    <div key={v.id} className={'big1'}>
                        <div className={"one"} onClick={this.handleClickBtn.bind(this)}>
<<<<<<< HEAD
<<<<<<< HEAD
                        <div className={'Img_two'}><img src={v.pic}  alt=""/></div>
=======
                        <img className="theaterImg" src={v.pic}  alt=""/>
>>>>>>> 579538cdb8f5982d7c4d0db3e36b843d24c9905b
=======
                        <img className="theaterImg" src={v.pic}  alt=""/>
>>>>>>> 579538cdb8f5982d7c4d0db3e36b843d24c9905b
                        <div className={'two1'}>
                        <div className="theater_one_h">{v.end_show_time}</div>
                        <div className="theater_one_h">{v.name}</div>  
                        <div className="theater_one_g">{v.city_name}|{v.venue_name}</div>
                        <div className="theater_one_g" style={{color:'red'}}>￥:{v.min_price}元</div>
                        </div> 
                        </div>                        
                        </div>                                                                   
                    ))      
                }                
            </div>
        )
    }
// 搜索判断
    searchShowList(v,page) {        
        const evt = window.event || v;
        console.log(evt.keyCode)
        const target = evt.target.value;
        if (evt.keyCode === 13) {
             this.searchList(page)
        } else { 
            console.log(999,evt)            
        }
    }
    // axios获取接口的数据，传参，重新设置list，page的值
    searchList() {
        this.$axios.get("/Show/Search/getShowList",{
                params:{//page必须传否则无法产生关联
                    keywords:this.refs.wj.value,
                    page:1,
                }
            }).then(({ data }) => {
                // console.log(this.refs.wj.value)
                // console.log(111,data.data.list);
                const list = data.data.list;
                this.setState({
                    list:data.data.list,
                    page:data.data.page
                })
            })
    }  
    // 点击按钮跳转页面
    handleClickBtn(){
        this.props.history.push('../showsLibrary')
    }   
    // 挂载渲染
    componentDidMount(){
        this.searchList();
    }
}
export default Theater_one;
