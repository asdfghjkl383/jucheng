import axios from 'axios';

/*******************加载热门城市********************** */

export const upHotcity = (payload) => {
    // console.log(222,payload)
    return {
        type:"ADD_HOT_CITY",
        payload
    }
}

/*****************加载所有城市*********************** */
export const upAllcity = (payload)=>{
    // console.log(payload,234);
    return {
        type:"ADD_ALL_CITY",
        payload
    }
}
    // console.log(111,payload)
    //取出所有城市中的排序的首字母  利用for in来遍历
    // for(payload.id in payload){
    //     console.log(333,payload.id);
    //     // console.log(444,payload);
    // }
    // export const upAllcityId = (payload)=>{
    //     console.log(payload,999);
    //     return {
    //         type:"ADD_ALL_CITY",
    //         payload
    //     }
    // }
    
export default {
    // this.props.Allcity();
    getAllcity (){
        return async (dispatch) => {
            const {data} = await axios.get("/api/city/city/getSortedCityList?version=6.0.8&referer=2")
            // console.log(data.data) // const id=data.data.id;
            let acarr=[];  //全部城市
            let acarrId=[]
            for(var i in data.data){
                // console.log(666,data.data[i].id);
                acarr.push(data.data[i].id)
                acarrId.push(data.data[i].id)
                // console.log(777,data.data[i].list);
    /**********************调取所有城市********************************* */
                for (let j in data.data[i].list){
                    // console.log(888,data.data[i].list[j].name);
                    acarr.push(data.data[i].list[j].name);
                }
            }
            // console.log("qqq",data.data)
            // console.log("id",acarrId);
            dispatch(upAllcity({acarr,acarrId}))
        }
    },
    // 加载热门城市
    getHotcity (){
        return async (dispatch) => {
            const {data} = await axios.get("/api/city/city/getHotCityList?version=6.0.8&referer=2");
            var hcarr=[];   //热门城市
            for (var i in data.data){
                // console.log("qqq",data.data[i]);
                for(var j in data.data[i]){
                    // console.log('www',data.data[i][j].name);
                    hcarr.push(data.data[i][j].name)
                }
            }
            // console.log(hcarr);
            dispatch(upHotcity({hcarr}))
        }
    }
}
// import Allcity from '../../../state/home/header/Address/Allcity';

// export default  {
//     async getAllcity (dispatch) {
//     const {data} = await axios.get("/api/city/city/getSortedCityList?version=6.0.8&referer=2")
//     dispatch({
//         type:"ADD_ALL_CITY",
//         payload:{
//             id:data.id,
//             name:data.name 
//         }

//     })
//     }
// }
