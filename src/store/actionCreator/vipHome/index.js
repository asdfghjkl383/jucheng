export const upVipHome=(payload)=>{
    return {
        type:"UP_VIP_HOME",
        payload
    }
}
export default {
    getVipHomeList(){
        return async (dispatch)=>{
            const {data}=await this.$axios.get("/vip/index/getVipHomeSchedular",{});
            dispatch(upVipHome(data.data.priorList[0]));
        }
    }
}