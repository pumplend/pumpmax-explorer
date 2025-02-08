// src/app/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Kube } from './kube';
import { PinContainer } from '../ui/3d-pin';

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

        <div key={"total_positions"} className={""}>
                <PinContainer
                  title={`Active Positions`}
                  // href={`/block/000`}
                >
                  <div className="tracking-tight text-slate-100/50 w-[18rem] h-[12rem]">
                    <Kube
                      title={`${data.position.total}`}
                      description={`Active Positions`}
                      className='hover:cursor-pointer hover:shadow-md hover:shadow-sky-500 hover:dark:shadow-sky-300 transition-shadow duration-300 ease-in-out'
                    />
                  </div>
                </PinContainer>
        </div>

        <div key={"total_positions"} className={""}>
                <PinContainer
                  title={`Active Hisotry`}
                  // href={`/block/000`}
                >
                  <div className="tracking-tight text-slate-100/50 w-[18rem] h-[12rem]">
                    <Kube
                      title={`${data.history.total}`}
                      description={`History Transactions`}
                      className='hover:cursor-pointer hover:shadow-md hover:shadow-sky-500 hover:dark:shadow-sky-300 transition-shadow duration-300 ease-in-out'
                    />
                  </div>
                </PinContainer>
        </div>
        <div key={"total_positions"} className={""}>
                <PinContainer
                  title={`Liqudting Positions`}
                  // href={`/block/000`}
                >
                  <div className="tracking-tight text-slate-100/50 w-[18rem] h-[12rem]">
                    <Kube
                      title={`${data.goingLiqudtion.total}`}
                      description={`Total Liqudited Position`}
                      className='hover:cursor-pointer hover:shadow-md hover:shadow-sky-500 hover:dark:shadow-sky-300 transition-shadow duration-300 ease-in-out'
                    />
                  </div>
                </PinContainer>
        </div>
        <div key={"total_positions"} className={""}>
                <PinContainer
                  title={`Staking Status`}
                  // href={`/block/000`}
                >
                  <div className="tracking-tight text-slate-100/50 w-[18rem] h-[12rem]">
                    <Kube
                      title={`${data.stake.total} SOL`}
                      description={`Total Stake || Stake Apy :${data.stake.total/100}%`}
                      className='hover:cursor-pointer hover:shadow-md hover:shadow-sky-500 hover:dark:shadow-sky-300 transition-shadow duration-300 ease-in-out'
                    />
                  </div>
                </PinContainer>
        </div>



        </div>
      </div>
    </div>
  );
};

export default Status;
