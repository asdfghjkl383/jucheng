export const upVipHome=(payload)=>{
    return {
        type:"UP_VIP_HOME",
        payload
    }
}
export default {
    getVipHomeList(){
        return async (dispatch)=>{
            const {data}=await this.$axios.get("/api/vip/index/getVipHomeSchedular",{});
            // console.log(111,data.data);
            dispatch(upVipHome(data.data.priorList[0]));
        }
    }
}