import React from 'react';
import '../../App.css';
import '../Theater_one/index1.css';
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
                </div>
                {                                          
                this.state.list.map(v=>(   
                    <div key={v.id} className={'big1'}>
                        <div className={"one"} onClick={this.handleClickBtn.bind(this)}>
                        <img src={v.pic}  alt=""/>
                        <div className={'two1'}>
                        <h2  >{v.end_show_time}</h2>
                        <h2  >{v.name}</h2>  
                        <h3>{v.city_name}|{v.venue_name}</h3>
                        <h3 style={{color:'red'}}>￥:{v.min_price}元</h3>
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
        this.props.history.push('../Theater_two')
    }   
    // 挂载渲染
    componentDidMount(){
        this.searchList();
    }
}
export default Theater_one;
