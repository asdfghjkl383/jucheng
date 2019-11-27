import React from 'react';
import '../../App.css';
import '../../assets/css/theater.css'
class App extends React.Component {
    constructor(){
        super();
        this.state={
            theatre_list:[],
            
        }
    }
    render() {
        return (
            <div>
                
                    {   
                    this.state.theatre_list.map(v=>(
                    <div key={v.id} className={"one"} >
                        <img src={v.pic} alt=""/>
                        <div className={'two'}> 
                        <div>{v.name}</div>  
                        <div>演出场次: {v.count}</div> 
                        </div>                                                                                            
                        <hr></hr>
                    </div>                       
                    ))        
                }
                 
                
            </div>
        )
    }
    getList() {
        this.$axios.get("/home/index/getHotTheatre").then(({data})=>{
            console.log(data)
            const {theatre_list}=data.data.theatre_list; 
            this.setState({
                theatre_list:data.data.theatre_list
            })
        })
    }
     
    componentDidMount(){
        this.getList()
                
    }
}

export default App;
