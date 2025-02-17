import {api_pumpmax_get_main, api_pumpmax_get_user_actives, api_pumpmax_get_user_positions} from "./api"
import {getStakingData} from "./web3"
const mainPage = async ()=>
{
    const mainData = await api_pumpmax_get_main();
    const stakingData = await getStakingData();
    return {
        mainData:mainData.data,
        stakingData
    }
}
const positions = async (user?:string,token?:string,hash?:string,page=1,pageSize=8)=>
{
    const ret = await api_pumpmax_get_user_positions(page,pageSize,user,token,hash)
    if(ret?.code && ret?.data)
    {
        return ret.data
    }
    return [];
}

const actives = async (user?:string,token?:string,hash?:string,page=1,pageSize=8)=>
    {
        const ret = await api_pumpmax_get_user_actives(page,pageSize,user,token,hash)
        if(ret?.code && ret?.data)
        {
            return ret.data
        }
        return [];
    }
export{
    mainPage,
    positions,
    actives
}