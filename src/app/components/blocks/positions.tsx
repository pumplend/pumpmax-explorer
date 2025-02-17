// src/app/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Kube } from './kube';
import { PinContainer } from '../ui/3d-pin';

import { CurrencyDollarIcon} from "@heroicons/react/20/solid";
import {positions} from "@/core/dataFetch" ; 
interface Block {
  hash: string;
  id: string;
  user: string;
  token: string;
  collateralAmount: string;
  depositSolAmount: string;
  borrowedAmount: string;
  referrer: string;
  blockTime: string | number;
  deadline: string | number;
}

const Positions: React.FC = () => {
  const [data, setData] = useState<Block[]>([]);

  const fetchBlocks = async () => {
    let blockData = await positions()
    setData(blockData);
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
        Ongoing Positions 
          <button onClick={fetchBlocks} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-3 animate-spin">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </h1>
        <div className='grid grid-cols-4'>
          {data.map((block, index) => {
            // Determine if the block is the last in the array
            const isFirstBlock = index === 0;
            const isLastBlock = index === data.length - 1;
            const fadeInClass = 'animate-fade-in'; // Make sure this class is defined in your CSS
            const fadeOutClass = 'animate-fade-out'; // Ensure this class is defined to handle fade out
            const animationClass =fadeInClass// isFirstBlock ? fadeInClass : isLastBlock ? fadeOutClass : '';

            return (
              <div key={index} className={`${animationClass}`}>
                <PinContainer
                  title={`view ${block.id}`}
                  href={`/position/${block.id}`}
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
                             {`${block.id.slice(0,15)}...`}
                            </span>
                          </h1>
                  
                          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                          Borrowed Amount:<span style={{fontWeight:"bold",fontStyle:"italic"}}>{`${(Number(block.borrowedAmount)/1e9).toFixed(3)} SOL `}</span> 
                          </p>
                          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                          Deadline: <span style={{fontWeight:"bold",fontStyle:"italic"}}>{ `${new Date(Number(block.deadline)*1000).toLocaleString()}`}</span> 
                          </p>
                         
                        </div>
                      </div>

                  </div>
                </PinContainer>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Positions;
