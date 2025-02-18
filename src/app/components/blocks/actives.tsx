// src/app/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Kube } from './kube';
import { PinContainer } from '../ui/3d-pin';
import { ClockIcon} from "@heroicons/react/20/solid";
import {actives} from "@/core/dataFetch" ; 
interface Block {
  hash: string;
  id: string;
  type: string;
  token: string;
  amount: string;
  blockTime: string;
}

const Actives= ({search}: {search?: string}) => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const fetchBlocks = async () => {
    if(search)
      {
        const s = JSON.parse(search);
        let user = undefined;
        let token = undefined;
        let hash = undefined;
        if(s?.user)
        {
          user = s.user
        }
        if(s?.token)
        {
          token = s.token
        }
        if(s?.hash)
        {
          hash = s.hash
        }
  
        let blockData = await actives(user,token,hash)
        setBlocks(blockData);
      }else{
        let blockData = await actives()
        setBlocks(blockData);
      }
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
          Actives History 
          <button onClick={fetchBlocks} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-3 animate-spin">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </h1>
        <div className='grid grid-cols-4'>
          {blocks.map((block, index) => {
            // Determine if the block is the last in the array
            const isFirstBlock = index === 0;
            const isLastBlock = index === blocks.length - 1;
            const fadeInClass = 'animate-fade-in'; // Make sure this class is defined in your CSS
            const fadeOutClass = 'animate-fade-out'; // Ensure this class is defined to handle fade out
            const animationClass = fadeInClass//isFirstBlock ? fadeInClass : isLastBlock ? fadeOutClass : '';
            let type = "";
            if (block.type == "stake")
            {
              type = "STAKE"
            }
            if (block.type == "withdraw")
            {
              type = "WITHDRTAW"
            }
            if (block.type == "borrow")
            {
              type = "BORROW"
            }
            if (block.type == "repay")
            {
              type = "REPAY POSITION"
            }
            if (block.type == "borrowLoopPump")
            {
              type = "MAKE LONG"
            }
            if (block.type == "borrowLoopRaydium")
            {
              type = "MAKE LONG"
            }
            if (block.type == "liquidatePump")
            {
              type = "CLOSE POSITION"
            }
            if (block.type == "liquidateRaydium")
            {
              type = "CLOSE POSITION"
            }
            const timestamp = new Date(Number(block.blockTime)*1000).toLocaleString()
            return (
              <div key={block.hash.toString()} className={`${animationClass}`}>
                <PinContainer
                  title={`View ${block.hash}`}
                  href={`/active/${block.hash}`}
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
                              <ClockIcon className="h-4 w-4 text-gray-500" />
                            </div> 
                            <span>
                             {`${type}`}
                            </span>
                          </h1>
                  
                          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                          Hash:<span style={{fontWeight:"bold",fontStyle:"italic"}}>{`${block.hash}`}</span> 
                          </p>
                          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                          Time: <span style={{fontWeight:"bold",fontStyle:"italic"}}>{ timestamp}</span> 
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

export default Actives;
