// src/app/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Kube } from './kube';
import { PinContainer } from '../ui/3d-pin';
import { ClockIcon} from "@heroicons/react/20/solid";
interface Block {
  hash: string;
  id: string;
  type: string;
  token: string;
  amount: string;
  blockTime: string;
}

const Actives: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const fetchBlocks = async () => {
    // const response = await fetch(`/api/blocks`);
    // if (!response.ok) {
    //   console.error('Failed to fetch transactions data');
    //   return;
    // }
    // let blockData = await response.json();
    let blockData = [
      {
        "hash": "2DgieKZMVb3SoteEuiaDbM6uwcwJnXZ8Vo2Cjs5DMCYiz8uS63tsqXmQGxjwHtEqxYNqGERSYbTXddDduP79JohS",
        "id": "CRpHGVNCrKa6YwnX7Pn84M6S9YQRQkkEHuxB6pkXBW3B",
        "type": "borrowLoopPump",
        "user": "FqJ1vRkdaipZ9WYTf3UAaDSsFHCjvBodQUodyMCdhdRX",
        "token": "CbineB365vkiy3rNgvxuBm6cXxA4iu6uAAsHwX5rpump",
        "amount": "30000000",
        "blockTime": 1739006856
        },
        {
        "hash": "4T5eLzZx4mpfosDfXfewv6jsNUdiQfW2GMK9QSBFuTGNkeDjSfdjkWnn6Z2XNKezsyrBmyVqdPG1i2uxunHo3pEE",
        "id": "PDMMQiE5PVdu37icVXurDBUsXKGM5NsP3GLmkNEdMSJ",
        "type": "borrowLoopPump",
        "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "token": "Eq1Wrk62j2F2tLf9XfdBssYJVr5k8oLJx3pqEL1rpump",
        "amount": "200000000",
        "blockTime": 1738944442
        },
        {
        "hash": "n8bokMwRhmPx5HHQUeWjpXPe1gZakXbcLbX62p5ja9gbYPC2jL9E6MmxnEhTcND5fLjk5tibAevzGJJcrKnoqKm",
        "id": "2g8XG2pQSn6q9LLDEckBqbnyxZC1rCsxkD1tX62VcbCK",
        "type": "liquidateRaydium",
        "liquidator": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "token": "GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump",
        "referrer": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "blockTime": 1738944410
        },
        {
        "hash": "67gQXaxaNjS8YHUvxboDgLD4kM1XJgHSdH4akP6qJ78yNGgsRan4Mz2EDxc5iMVoN3mKzRmUpWTaW9iiWFRZsrBK",
        "id": "PDMMQiE5PVdu37icVXurDBUsXKGM5NsP3GLmkNEdMSJ",
        "type": "liquidatePump",
        "liquidator": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "token": "Eq1Wrk62j2F2tLf9XfdBssYJVr5k8oLJx3pqEL1rpump",
        "referrer": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "blockTime": 1738944367
        },
        {
        "hash": "352SZxMuU7Ys9Gwxcv2zuzARJqJafHxZz5jtcuuqntpZuirWrfs5yvJbyR4DfyZsxd7rYrkUXZo96QtFeMCTwCJr",
        "id": "FsFndvrY4bTU35JyCYERXMEpE2MX27NVvnWVbLjBdGqv",
        "type": "liquidatePump",
        "liquidator": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "token": "CbineB365vkiy3rNgvxuBm6cXxA4iu6uAAsHwX5rpump",
        "referrer": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "blockTime": 1738943436
        },
        {
        "hash": "352hf2M7QNXUEvjMCFseZQzbQR27aeA5cFRGeJgHSu4eMKdZznZ1zigJLYX4QfNJyqyC18SZayzq5E57Q5YKN7q9",
        "id": "FsFndvrY4bTU35JyCYERXMEpE2MX27NVvnWVbLjBdGqv",
        "type": "borrowLoopPump",
        "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "token": "CbineB365vkiy3rNgvxuBm6cXxA4iu6uAAsHwX5rpump",
        "amount": "200000000",
        "blockTime": 1738925930
        },
        {
        "hash": "2hM1EBhUZSPfrp9Dq1gm4wtiXZm5N1PyN8JnKJRVzYZP7r9JU3Xou6aEAi8EUmZPiohaR5J1QEqooxYWeyYe7xKX",
        "id": "FsFndvrY4bTU35JyCYERXMEpE2MX27NVvnWVbLjBdGqv",
        "type": "borrowLoopPump",
        "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "token": "CbineB365vkiy3rNgvxuBm6cXxA4iu6uAAsHwX5rpump",
        "amount": "100000000",
        "blockTime": 1738925769
        },
        {
        "hash": "2C6Eab7BSE2SPWMJTZsdgpxw9xAmgSFtdnAEc29DsKYirZ4T82cbhMvx4mU1GTWs6PG3aLC7VJKiqMnHEAZLaVu",
        "id": "2g8XG2pQSn6q9LLDEckBqbnyxZC1rCsxkD1tX62VcbCK",
        "type": "borrowLoopRaydium",
        "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "token": "GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump",
        "amount": "100000000",
        "blockTime": 1738922080
        }
    ]
    console.log(blockData)
    setBlocks(blockData);
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
            const animationClass = isFirstBlock ? fadeInClass : isLastBlock ? fadeOutClass : '';
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
              type = "REPAY"
            }
            if (block.type == "borrowLoopPump")
            {
              type = "LONG"
            }
            if (block.type == "borrowLoopRaydium")
            {
              type = "LONG"
            }
            if (block.type == "liquidatePump")
            {
              type = "CLOSE"
            }
            if (block.type == "liquidateRaydium")
            {
              type = "CLOSE"
            }
            const timestamp = new Date(Number(block.blockTime)*1000).toLocaleString()
            return (
              <div key={block.hash.toString()} className={`${animationClass}`}>
                <PinContainer
                  title={`View ${block.hash}`}
                  href={`/actives/${block.hash}`}
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
