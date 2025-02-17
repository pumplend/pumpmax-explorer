import {
    Connection,
  } from "@solana/web3.js";

  import { Pumplend } from "@pumplend/pumplend-sdk";
  const lend = new Pumplend("mainnet")
  const connection = new Connection(String(process.env.NEXT_PUBLIC_SOLANA_RPC_URL))
  const getStakingData = async ()=>
  {
    return await lend.tryGetPoolStakingData(connection)
  }

  export {
    getStakingData
  }