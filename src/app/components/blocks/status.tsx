// src/app/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Kube } from './kube';
import { PinContainer } from '../ui/3d-pin';
import { CurrencyDollarIcon,ClockIcon} from "@heroicons/react/20/solid";
interface Block {
  parentHash: string;
  sha3Uncles: string;
  miner: string;
  stateRoot: string;
  transactionsRoot: string;
  receiptsRoot: string;
  logsBloom?: string;
  number: bigint;
  timestamp: string | number;
  transactions: string[]; // Array to store transaction hashes
}

const Status: React.FC = () => {
  const [data, setData] = useState({
    position:{
      total:123,
      close:123,
    },
    history:{
      total:123,
      open:123,
      close:123,
    },
    goingLiqudtion:{
      total:123,
    },
    stake:
    {
      total:123,
      apy:123,
    }
  });

  const fetchBlocks = async () => {
    // const response = await fetch(`/api/blocks`);
    // if (!response.ok) {
    //   console.error('Failed to fetch transactions data');
    //   return;
    // }
    // let blockData = await response.json();
    // let blockData = []
    // console.log(blockData)
    // setBlocks(blockData);
  };

  // Set up the interval
  useEffect(() => {
    fetchBlocks(); // Call it immediately on component mount
    const interval = setInterval(fetchBlocks, 60000); // Then every 60 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);


  return (
    <div>

      {/* Display transactions and blocks here */}
      <div>
        <h1 className='text-2xl'>
          {/* Active Positions  */}
          {/* <button onClick={fetchBlocks} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-3 animate-spin">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button> */}
        </h1>
        <div className='grid grid-cols-4'>

        <div key={"active_positions"} className={""}>
                <PinContainer
                  title={`Active Positions`}
                  // href={`/block/000`}
                >
                  <div className="tracking-tight text-slate-100/50 w-[18rem] h-[12rem]">

                      <div className={`w-full relative max-w-xs`}>
                        <div className={`relative shadow-xl 
                          bg-gray-300  border-gray-300
                          dark:bg-gray-900 dark:border-gray-800
                           border px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start
                          ${'hover:cursor-pointer hover:shadow-md hover:shadow-sky-500 hover:dark:shadow-sky-300 transition-shadow duration-300 ease-in-out'}`}>
                  
                          <h1 className="flex font-bold text-xl text-gray-500 dark:text-white mb-4 relative z-50 middl gap-2">
                            <div className="h-6 w-6 rounded-full border-2 flex items-center justify-center mb-4 border-gray-500">
                              <CurrencyDollarIcon className="h-4 w-4 text-gray-500" />
                            </div> 
                            <span>
                             {data.position.total}
                            </span>
                          </h1>
                  
                          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                          <span className='text-2xl' style={{fontWeight:"bold"}}>{"Active Positions"}</span> 
                          </p>
                         
                        </div>
                      </div>
                  </div>
                </PinContainer>
        </div>
        <div key={"closed_positions"} className={""}>
                <PinContainer
                  title={`Liqudting Positions`}
                  // href={`/block/000`}
                >
                  <div className="tracking-tight text-slate-100/50 w-[18rem] h-[12rem]">
                      <div className={`w-full relative max-w-xs`}>
                        <div className={`relative shadow-xl 
                          bg-gray-300  border-gray-300
                          dark:bg-gray-900 dark:border-gray-800
                           border px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start
                          ${'hover:cursor-pointer hover:shadow-md hover:shadow-sky-500 hover:dark:shadow-sky-300 transition-shadow duration-300 ease-in-out'}`}>
                  
                          <h1 className="flex font-bold text-xl text-gray-500 dark:text-white mb-4 relative z-50 middl gap-2">
                            <div className="h-6 w-6 rounded-full border-2 flex items-center justify-center mb-4 border-gray-500">
                              <CurrencyDollarIcon className="h-4 w-4 text-gray-500" />
                            </div> 
                            <span>
                            {data.goingLiqudtion.total}
                            </span>
                          </h1>
                  
                          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                          <span className='text-2xl' style={{fontWeight:"bold"}}>{"Closed Position"}</span> 
                          </p>
                        </div>
                      </div>
                  </div>
                </PinContainer>
        </div>
        <div key={"active_history"} className={""}>
                <PinContainer
                  title={`Active Hisotry`}
                  // href={`/block/000`}
                >
                  <div className="tracking-tight text-slate-100/50 w-[18rem] h-[12rem]">
                      <div className={`w-full relative max-w-xs`}>
                        <div className={`relative shadow-xl 
                          bg-gray-300  border-gray-300
                          dark:bg-gray-900 dark:border-gray-800
                           border px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start
                          ${'hover:cursor-pointer hover:shadow-md hover:shadow-sky-500 hover:dark:shadow-sky-300 transition-shadow duration-300 ease-in-out'}`}>
                  
                          <h1 className="flex font-bold text-xl text-gray-500 dark:text-white mb-4 relative z-50 middl gap-2">
                            <div className="h-6 w-6 rounded-full border-2 flex items-center justify-center mb-4 border-gray-500">
                              <CurrencyDollarIcon className="h-4 w-4 text-gray-500" />
                            </div> 
                            <span>
                            {data.history.total}
                            </span>
                          </h1>
                  
                          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                          <span className='text-2xl' style={{fontWeight:"bold"}}>{"History Transactions"}</span> 
                          </p>
                         
                        </div>
                      </div>
                  </div>
                </PinContainer>
        </div>

        <div key={"total_stake"} className={""}>
                <PinContainer
                  title={`Staking Status`}
                  // href={`/block/000`}
                >
                  <div className="tracking-tight text-slate-100/50 w-[18rem] h-[12rem]">
                    {/* <Kube
                      title={`${data.stake.total} SOL`}
                      description={`Total Stake || Stake Apy :${data.stake.total/100}%`}
                      className='hover:cursor-pointer hover:shadow-md hover:shadow-sky-500 hover:dark:shadow-sky-300 transition-shadow duration-300 ease-in-out'
                    /> */}

                      <div className={`w-full relative max-w-xs`}>
                        <div className={`relative shadow-xl 
                          bg-gray-300  border-gray-300
                          dark:bg-gray-900 dark:border-gray-800
                           border px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start
                          ${'hover:cursor-pointer hover:shadow-md hover:shadow-sky-500 hover:dark:shadow-sky-300 transition-shadow duration-300 ease-in-out'}`}>
                  
                          <h1 className="flex font-bold text-xl text-gray-500 dark:text-white mb-4 relative z-50 middl gap-2">
                            <div className="h-6 w-6 rounded-full border-2 flex items-center justify-center mb-4 border-gray-500">
                              <CurrencyDollarIcon className="h-4 w-4 text-gray-500" />
                            </div> 
                            <span>
                            {data.history.total} SOL
                            </span>
                          </h1>
                  
                          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                          STAKE APY : <span className='text-2xl' style={{fontWeight:"bold"}}>{`${data.stake.total/100}%`}</span> 
                          </p>
                         
                        </div>
                      </div>
                  </div>
                </PinContainer>
        </div>



        </div>
      </div>
    </div>
  );
};

export default Status;
