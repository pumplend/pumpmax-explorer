import {
    Connection,
  } from "@solana/web3.js";

  import { Pumplend } from "@pumplend/pumplend-sdk";
  const lend = new Pumplend("mainnet")
  const connection = new Connection("https://api.mainnet-beta.solana.com")
  const getStakingData = async ()=>
  {
    return await lend.tryGetPoolStakingData(connection)
  }

  export {
    getStakingData
  }