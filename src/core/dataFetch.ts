import {api_pumpmax_get_main} from "./api"
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
export{
    mainPage
}