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

const Blocks: React.FC = () => {
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
        "difficulty": "0",
        "extraData": "0x6265617665726275696c642e6f7267",
        "gasLimit": 35400401,
        "gasUsed": 30225202,
        "hash": "0x9e78f00c78e8eb110e85d0c533023b88aebd4f3f9bccdec7bdf296155387afda",
        "logsBloom": "0xf7ffb567fbfdedf7f470307ef3f335edfdeea3bfbfb7ef9b998ff3efb5b7d3c2d6ce8d6eadfeeb83137cfdd5fa630d3cbfe3ebdd8fb97d9f6ff32fe344bfe7d3ff8bc75e03a5aaaffaaff5fedbe34ffc1dd7615f3766ff3b3e5ebe0ff6f6bac5febbb857a6ef92ffea6fd7e37e2defdbebdf773e19b5aec293aac7bd5cfbb1b1e77ebd7dfe61d9fdfafbfddb7b72db7f9fe9feb5fff93bffcd6d3edcf6b6cbbafffd79fb9fb77ef929d977f2ffbbc6aa7dfdedb07cfe5dfb7defdfe7febbdff5dbfbbbfe678bbbf567cbdebf8af9ddbef9ecaf7ffd7e767e4febe4faffef6a07ebfb3ffe3dfccc19fbe7dbd3ef43ff7fdfe5f3bf5f9fdafed5abffca5eddf71f",
        "miner": "0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5",
        "nonce": "0",
        "parentHash": "0x7d69e01264b630e227c3e1779cbc6156e64d6f91b92edc853d6bdcd4285f8b06",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": 111653,
        "stateRoot": "0x5a717e0b5eaf3a070d400834c1d64f01bf922a507c8a1058b88dca82fd15dc3a",
        "totalDifficulty": "undefined",
        "transactionsRoot": "0x189852d9c8db896702fb26d5a502bcbf5e553d80a7f523f7ad21b3997fe68b1f",
        "number": 21801151,
        "timestamp": 1739009939,
        "transactions": []
    },
    {
      "difficulty": "0",
      "extraData": "0x6265617665726275696c642e6f7267",
      "gasLimit": 35400401,
      "gasUsed": 30225202,
      "hash": "0x9e78f00c78e8eb110e85d0c533023b88aebd4f3f9bccdec7bdf296155387afda",
      "logsBloom": "0xf7ffb567fbfdedf7f470307ef3f335edfdeea3bfbfb7ef9b998ff3efb5b7d3c2d6ce8d6eadfeeb83137cfdd5fa630d3cbfe3ebdd8fb97d9f6ff32fe344bfe7d3ff8bc75e03a5aaaffaaff5fedbe34ffc1dd7615f3766ff3b3e5ebe0ff6f6bac5febbb857a6ef92ffea6fd7e37e2defdbebdf773e19b5aec293aac7bd5cfbb1b1e77ebd7dfe61d9fdfafbfddb7b72db7f9fe9feb5fff93bffcd6d3edcf6b6cbbafffd79fb9fb77ef929d977f2ffbbc6aa7dfdedb07cfe5dfb7defdfe7febbdff5dbfbbbfe678bbbf567cbdebf8af9ddbef9ecaf7ffd7e767e4febe4faffef6a07ebfb3ffe3dfccc19fbe7dbd3ef43ff7fdfe5f3bf5f9fdafed5abffca5eddf71f",
      "miner": "0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5",
      "nonce": "0",
      "parentHash": "0x7d69e01264b630e227c3e1779cbc6156e64d6f91b92edc853d6bdcd4285f8b06",
      "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
      "size": 111653,
      "stateRoot": "0x5a717e0b5eaf3a070d400834c1d64f01bf922a507c8a1058b88dca82fd15dc3a",
      "totalDifficulty": "undefined",
      "transactionsRoot": "0x189852d9c8db896702fb26d5a502bcbf5e553d80a7f523f7ad21b3997fe68b1f",
      "number": 21801151,
      "timestamp": 1739009939,
      "transactions": []
  },
  {
    "difficulty": "0",
    "extraData": "0x6265617665726275696c642e6f7267",
    "gasLimit": 35400401,
    "gasUsed": 30225202,
    "hash": "0x9e78f00c78e8eb110e85d0c533023b88aebd4f3f9bccdec7bdf296155387afda",
    "logsBloom": "0xf7ffb567fbfdedf7f470307ef3f335edfdeea3bfbfb7ef9b998ff3efb5b7d3c2d6ce8d6eadfeeb83137cfdd5fa630d3cbfe3ebdd8fb97d9f6ff32fe344bfe7d3ff8bc75e03a5aaaffaaff5fedbe34ffc1dd7615f3766ff3b3e5ebe0ff6f6bac5febbb857a6ef92ffea6fd7e37e2defdbebdf773e19b5aec293aac7bd5cfbb1b1e77ebd7dfe61d9fdfafbfddb7b72db7f9fe9feb5fff93bffcd6d3edcf6b6cbbafffd79fb9fb77ef929d977f2ffbbc6aa7dfdedb07cfe5dfb7defdfe7febbdff5dbfbbbfe678bbbf567cbdebf8af9ddbef9ecaf7ffd7e767e4febe4faffef6a07ebfb3ffe3dfccc19fbe7dbd3ef43ff7fdfe5f3bf5f9fdafed5abffca5eddf71f",
    "miner": "0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5",
    "nonce": "0",
    "parentHash": "0x7d69e01264b630e227c3e1779cbc6156e64d6f91b92edc853d6bdcd4285f8b06",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": 111653,
    "stateRoot": "0x5a717e0b5eaf3a070d400834c1d64f01bf922a507c8a1058b88dca82fd15dc3a",
    "totalDifficulty": "undefined",
    "transactionsRoot": "0x189852d9c8db896702fb26d5a502bcbf5e553d80a7f523f7ad21b3997fe68b1f",
    "number": 21801151,
    "timestamp": 1739009939,
    "transactions": []
},
{
  "difficulty": "0",
  "extraData": "0x6265617665726275696c642e6f7267",
  "gasLimit": 35400401,
  "gasUsed": 30225202,
  "hash": "0x9e78f00c78e8eb110e85d0c533023b88aebd4f3f9bccdec7bdf296155387afda",
  "logsBloom": "0xf7ffb567fbfdedf7f470307ef3f335edfdeea3bfbfb7ef9b998ff3efb5b7d3c2d6ce8d6eadfeeb83137cfdd5fa630d3cbfe3ebdd8fb97d9f6ff32fe344bfe7d3ff8bc75e03a5aaaffaaff5fedbe34ffc1dd7615f3766ff3b3e5ebe0ff6f6bac5febbb857a6ef92ffea6fd7e37e2defdbebdf773e19b5aec293aac7bd5cfbb1b1e77ebd7dfe61d9fdfafbfddb7b72db7f9fe9feb5fff93bffcd6d3edcf6b6cbbafffd79fb9fb77ef929d977f2ffbbc6aa7dfdedb07cfe5dfb7defdfe7febbdff5dbfbbbfe678bbbf567cbdebf8af9ddbef9ecaf7ffd7e767e4febe4faffef6a07ebfb3ffe3dfccc19fbe7dbd3ef43ff7fdfe5f3bf5f9fdafed5abffca5eddf71f",
  "miner": "0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5",
  "nonce": "0",
  "parentHash": "0x7d69e01264b630e227c3e1779cbc6156e64d6f91b92edc853d6bdcd4285f8b06",
  "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  "size": 111653,
  "stateRoot": "0x5a717e0b5eaf3a070d400834c1d64f01bf922a507c8a1058b88dca82fd15dc3a",
  "totalDifficulty": "undefined",
  "transactionsRoot": "0x189852d9c8db896702fb26d5a502bcbf5e553d80a7f523f7ad21b3997fe68b1f",
  "number": 21801151,
  "timestamp": 1739009939,
  "transactions": []
},
{
  "difficulty": "0",
  "extraData": "0x6265617665726275696c642e6f7267",
  "gasLimit": 35400401,
  "gasUsed": 30225202,
  "hash": "0x9e78f00c78e8eb110e85d0c533023b88aebd4f3f9bccdec7bdf296155387afda",
  "logsBloom": "0xf7ffb567fbfdedf7f470307ef3f335edfdeea3bfbfb7ef9b998ff3efb5b7d3c2d6ce8d6eadfeeb83137cfdd5fa630d3cbfe3ebdd8fb97d9f6ff32fe344bfe7d3ff8bc75e03a5aaaffaaff5fedbe34ffc1dd7615f3766ff3b3e5ebe0ff6f6bac5febbb857a6ef92ffea6fd7e37e2defdbebdf773e19b5aec293aac7bd5cfbb1b1e77ebd7dfe61d9fdfafbfddb7b72db7f9fe9feb5fff93bffcd6d3edcf6b6cbbafffd79fb9fb77ef929d977f2ffbbc6aa7dfdedb07cfe5dfb7defdfe7febbdff5dbfbbbfe678bbbf567cbdebf8af9ddbef9ecaf7ffd7e767e4febe4faffef6a07ebfb3ffe3dfccc19fbe7dbd3ef43ff7fdfe5f3bf5f9fdafed5abffca5eddf71f",
  "miner": "0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5",
  "nonce": "0",
  "parentHash": "0x7d69e01264b630e227c3e1779cbc6156e64d6f91b92edc853d6bdcd4285f8b06",
  "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  "size": 111653,
  "stateRoot": "0x5a717e0b5eaf3a070d400834c1d64f01bf922a507c8a1058b88dca82fd15dc3a",
  "totalDifficulty": "undefined",
  "transactionsRoot": "0x189852d9c8db896702fb26d5a502bcbf5e553d80a7f523f7ad21b3997fe68b1f",
  "number": 21801151,
  "timestamp": 1739009939,
  "transactions": []
},
{
  "difficulty": "0",
  "extraData": "0x6265617665726275696c642e6f7267",
  "gasLimit": 35400401,
  "gasUsed": 30225202,
  "hash": "0x9e78f00c78e8eb110e85d0c533023b88aebd4f3f9bccdec7bdf296155387afda",
  "logsBloom": "0xf7ffb567fbfdedf7f470307ef3f335edfdeea3bfbfb7ef9b998ff3efb5b7d3c2d6ce8d6eadfeeb83137cfdd5fa630d3cbfe3ebdd8fb97d9f6ff32fe344bfe7d3ff8bc75e03a5aaaffaaff5fedbe34ffc1dd7615f3766ff3b3e5ebe0ff6f6bac5febbb857a6ef92ffea6fd7e37e2defdbebdf773e19b5aec293aac7bd5cfbb1b1e77ebd7dfe61d9fdfafbfddb7b72db7f9fe9feb5fff93bffcd6d3edcf6b6cbbafffd79fb9fb77ef929d977f2ffbbc6aa7dfdedb07cfe5dfb7defdfe7febbdff5dbfbbbfe678bbbf567cbdebf8af9ddbef9ecaf7ffd7e767e4febe4faffef6a07ebfb3ffe3dfccc19fbe7dbd3ef43ff7fdfe5f3bf5f9fdafed5abffca5eddf71f",
  "miner": "0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5",
  "nonce": "0",
  "parentHash": "0x7d69e01264b630e227c3e1779cbc6156e64d6f91b92edc853d6bdcd4285f8b06",
  "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  "size": 111653,
  "stateRoot": "0x5a717e0b5eaf3a070d400834c1d64f01bf922a507c8a1058b88dca82fd15dc3a",
  "totalDifficulty": "undefined",
  "transactionsRoot": "0x189852d9c8db896702fb26d5a502bcbf5e553d80a7f523f7ad21b3997fe68b1f",
  "number": 21801151,
  "timestamp": 1739009939,
  "transactions": []
}
    ]
    console.log(blockData)
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
          Blocks 
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

            return (
              <div key={block.number.toString()} className={`${animationClass}`}>
                <PinContainer
                  title={`View Block ${block.number}`}
                  href={`/block/${block.number}`}
                >
                  <div className="tracking-tight text-slate-100/50 w-[18rem] h-[12rem]">
                    <Kube
                      title={`${block.number}`}
                      description={`Timestamp: ${block.timestamp}, Transactions: ${block.transactions.length}`}
                      className='hover:cursor-pointer hover:shadow-md hover:shadow-sky-500 hover:dark:shadow-sky-300 transition-shadow duration-300 ease-in-out'
                    />
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

export default Blocks;
