import React from 'react';
// import '../../App.css';
import '../../assets/css/theater.css'
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            theatre_list:[], 
            showList:[],//原有数据数组
            showList1:[]  //接收的重新获取的数组   
        }
    }
    render() {
        return (
            <div style={{background:'white',fontSize:'30px',fontWeight:'bolder'}}> 影院 
                    <input onClick={()=>this.props.history.go(-1)} 
                    style={{width:'100px',position:'absolute',left:'1px'}} 
                    type={'button'} value={'>'}/>    
                    <div>
                    { //渲染部分                     
                    this.state.theatre_list.map(v=>(    
                        <div key={v.id} className={'big'}>
                            <div className={"one"} onClick={this.handleClickBtn.bind(this)}>
                                <img className="theaterImg" src={v.pic} style={{width:'80px',height:'60px'}} alt=""/>
                                <div className={'two'}>
                                    <input type={'button'} value={'.....'}/> 
                                    <p style={{fontSize:'20px'}}>{v.name}</p>  
                                    <p>{v.count}场在售演出</p>              
                                </div>                   
                            </div>
                            <div className="aaa" style={{display:'flex',flexDirection:'row',overflow:'auto'}}>
                            {    
                                //对theatre_list下的showList进行数组二次遍历           
                                v.showList.map(v=>(   
                                <div className={'swiper'} style={{marginRight:'40px'}}>          
                                    <div key={v.id}  style={{height:'100%',width:'100px'}}>          
                                        <img className="theaterImg" src={v.pic}  alt=""/>
                                    </div> 
                                </div>
                                ))                         
                            }       
                            </div>
                        </div>                 
                    ))                               
                    }                   
                    </div>                                                                
            </div>                           
        )
    }
    getList() {
<<<<<<< Updated upstream
        this.$axios.get("/api/theatre/index/getTheatreList",{
=======
        this.$axios.get("api//theatre/index/getTheatreList",{
>>>>>>> Stashed changes
            params:{
                page:1
            }
        }
        ).then(({data})=>{
            const {theatre_list}=data.data;
            var {showList} = data.data.theatre_list
            console.log(theatre_list[1]);
            var showList1=[]
            // 循环数组列表theater_list和showList
            for(var i=0;i<theatre_list.length;i++){
                for(var j=0;j<theatre_list[i].showList.length;j++){
                    showList1.push(theatre_list[i].showList[j])
                }
            }
            this.setState({
                theatre_list,
                showList1
            })    
            console.log(this.state.showList1)      
        })        
    }    
    componentDidMount(){
        this.getList()                
    }    
    // 点击按钮跳转页面
    handleClickBtn(){
        this.props.history.push('../theater_one')
    }
}
export default App;
