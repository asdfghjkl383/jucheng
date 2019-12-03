import React from 'react';
import {
    BrowserRouter as Router,// 路由器
    Link,// 链接
    withRouter
} from "react-router-dom"
import '../../../../assets/css/Search.css'
// import '../../../../views/searchwj'

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    render(){
        return (
            <div className={"search_warp"}>
                <div className={"search_header"}>
                    <input type="text" className={"search_text"} placeholder="请输入关键词" ref={"searchText"}
                    type={'text'} placeholder={'搜索热门演出'}                   
                    onKeyDown={(v) => this.searchShowList(v,this.state.page++)}/>
                    <Link to={"/"} className={"goHome"}>取消</Link>
                </div>
                <p className={"search_title"}>热门搜索</p>
                <div className={"hot_searchwarp"}>
                    <div >
                        
                        {
                             this.state.list.map((v)=>(
                                <Link className={"hotName"} to={"/theater_one"} key={v} >
                                    {v}
                                </Link>
                                
                            ))
                        }
                    </div>
                </div>
        </div>
            
        )
    }

    // // 搜索判断
    // searchShowList(v,page) {        
    //     const evt = window.event || v;
    //     console.log(evt.keyCode)
    //     const target = evt.target.value;
    //     if (evt.keyCode === 13) {
    //          this.searchList(page)
    //     } else { 
    //         console.log(999,evt)            
    //     }
    // }
    async hotContent(){
        const {data} = await this.$axios.get("/api/Show/Search/getHotWord?version=6.0.8&referer=2")
        console.log(data);
        var contentName = [];
        for (var i in data.data){
            console.log(data.data[i]);
            contentName.push(data.data[i]);
            if (i==5){
                break
            }
            // for(var j in data.data){
                
            // }
        };
        this.setState({
            list:contentName
        })
        console.log(this.state.list,contentName);
    }
    // // axios获取接口的数据，传参，重新设置list，page的值
    // searchList() {
    //     this.$axios.get("/Show/Search/getShowList",{
    //             params:{//page必须传否则无法产生关联
    //                 keywords:this.refs.searchText.value,
    //                 page:1,
    //             }
    //         }).then(({ data }) => {
    //             // console.log(this.refs.wj.value)
    //             // console.log(111,data.data.list);
    //             const list = data.data.list;
    //             this.setState({
    //                 list:data.data.list,
    //                 page:data.data.page
    //             })
    //         })
    // } 
    componentDidMount(){
        this.hotContent()
    }
}





export default withRouter(Search)