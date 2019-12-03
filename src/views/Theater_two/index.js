// import React from 'react';
// // import '../../App.css';

// class Theater_two extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             hots_show_list:[],            
//         }
//     }
//     render() {
//         return (
//             <div style={{display:'flex', width:'100px'}}>             
//                 <div style={{display:'flex',flexDirection:'row-reverse'}}>
//                     {                                          
//                     this.state.hots_show_list.map(v=>(                                                                                        
//                     <div key={v.id} className={'big'} style={{width:'100px'}}>                                            
//                         <div>
//                          <img src={v.pic} style={{width:'100px',height:'100px'}} alt=""/>                                                 
//                          <p style={{height:'50px',overflow:'hidden',fontWeight:'bolder'}}>{v.show_name}</p>                    
//                         </div> 
//                         </div>                                                                                                          
//                     ))                          
//                     } 
//                   </div>                 
//             </div>
//         )
//     }
//     getList() {
//         this.$axios.get("/home/index/getHotsRecommendList").then(({data})=>{
//             console.log(data)
//             const {hots_show_list}=data.data.hots_show_list; 
//             this.setState({
//                 hots_show_list:data.data.hots_show_list
//             })
//         })
//     }    
//     componentDidMount(){
//         this.getList()                
//     }
//     // 点击按钮跳转页面
//     // handleClickBtn(){
//     //     this.props.history.push('..')
//     // }

// }
// export default Theater_two;
