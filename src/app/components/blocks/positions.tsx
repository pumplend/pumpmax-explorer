// src/app/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Kube } from './kube';
import { PinContainer } from '../ui/3d-pin';

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
    // const response = await fetch(`/api/blocks`);
    // if (!response.ok) {
    //   console.error('Failed to fetch transactions data');
    //   return;
    // }
    // let blockData = await response.json();
    let blockData = [{
      "hash": "4T5eLzZx4mpfosDfXfewv6jsNUdiQfW2GMK9QSBFuTGNkeDjSfdjkWnn6Z2XNKezsyrBmyVqdPG1i2uxunHo3pEE",
      "id": "PDMMQiE5PVdu37icVXurDBUsXKGM5NsP3GLmkNEdMSJ",
      "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
      "token": "Eq1Wrk62j2F2tLf9XfdBssYJVr5k8oLJx3pqEL1rpump",
      "collateralAmount": "15793974056718",
      "depositSolAmount": "200000000",
      "borrowedAmount": "294364966",
      "referrer": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
      "blockTime": 1738944442,
      "deadline": 1740828195
      },
      {
        "hash": "4T5eLzZx4mpfosDfXfewv6jsNUdiQfW2GMK9QSBFuTGNkeDjSfdjkWnn6Z2XNKezsyrBmyVqdPG1i2uxunHo3pEE",
        "id": "PDMMQiE5PVdu37icVXurDBUsXKGM5NsP3GLmkNEdMSJ",
        "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "token": "Eq1Wrk62j2F2tLf9XfdBssYJVr5k8oLJx3pqEL1rpump",
        "collateralAmount": "15793974056718",
        "depositSolAmount": "200000000",
        "borrowedAmount": "294364966",
        "referrer": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
        "blockTime": 1738944442,
        "deadline": 1740828195
        },
        {
          "hash": "4T5eLzZx4mpfosDfXfewv6jsNUdiQfW2GMK9QSBFuTGNkeDjSfdjkWnn6Z2XNKezsyrBmyVqdPG1i2uxunHo3pEE",
          "id": "PDMMQiE5PVdu37icVXurDBUsXKGM5NsP3GLmkNEdMSJ",
          "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
          "token": "Eq1Wrk62j2F2tLf9XfdBssYJVr5k8oLJx3pqEL1rpump",
          "collateralAmount": "15793974056718",
          "depositSolAmount": "200000000",
          "borrowedAmount": "294364966",
          "referrer": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
          "blockTime": 1738944442,
          "deadline": 1740828195
          },
          {
            "hash": "4T5eLzZx4mpfosDfXfewv6jsNUdiQfW2GMK9QSBFuTGNkeDjSfdjkWnn6Z2XNKezsyrBmyVqdPG1i2uxunHo3pEE",
            "id": "PDMMQiE5PVdu37icVXurDBUsXKGM5NsP3GLmkNEdMSJ",
            "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
            "token": "Eq1Wrk62j2F2tLf9XfdBssYJVr5k8oLJx3pqEL1rpump",
            "collateralAmount": "15793974056718",
            "depositSolAmount": "200000000",
            "borrowedAmount": "294364966",
            "referrer": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
            "blockTime": 1738944442,
            "deadline": 1740828195
            },
            {
              "hash": "4T5eLzZx4mpfosDfXfewv6jsNUdiQfW2GMK9QSBFuTGNkeDjSfdjkWnn6Z2XNKezsyrBmyVqdPG1i2uxunHo3pEE",
              "id": "PDMMQiE5PVdu37icVXurDBUsXKGM5NsP3GLmkNEdMSJ",
              "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
              "token": "Eq1Wrk62j2F2tLf9XfdBssYJVr5k8oLJx3pqEL1rpump",
              "collateralAmount": "15793974056718",
              "depositSolAmount": "200000000",
              "borrowedAmount": "294364966",
              "referrer": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
              "blockTime": 1738944442,
              "deadline": 1740828195
              },
              {
                "hash": "4T5eLzZx4mpfosDfXfewv6jsNUdiQfW2GMK9QSBFuTGNkeDjSfdjkWnn6Z2XNKezsyrBmyVqdPG1i2uxunHo3pEE",
                "id": "PDMMQiE5PVdu37icVXurDBUsXKGM5NsP3GLmkNEdMSJ",
                "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
                "token": "Eq1Wrk62j2F2tLf9XfdBssYJVr5k8oLJx3pqEL1rpump",
                "collateralAmount": "15793974056718",
                "depositSolAmount": "200000000",
                "borrowedAmount": "294364966",
                "referrer": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
                "blockTime": 1738944442,
                "deadline": 1740828195
                },
                {
                  "hash": "4T5eLzZx4mpfosDfXfewv6jsNUdiQfW2GMK9QSBFuTGNkeDjSfdjkWnn6Z2XNKezsyrBmyVqdPG1i2uxunHo3pEE",
                  "id": "PDMMQiE5PVdu37icVXurDBUsXKGM5NsP3GLmkNEdMSJ",
                  "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
                  "token": "Eq1Wrk62j2F2tLf9XfdBssYJVr5k8oLJx3pqEL1rpump",
                  "collateralAmount": "15793974056718",
                  "depositSolAmount": "200000000",
                  "borrowedAmount": "294364966",
                  "referrer": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
                  "blockTime": 1738944442,
                  "deadline": 1740828195
                  },
                  {
                    "hash": "4T5eLzZx4mpfosDfXfewv6jsNUdiQfW2GMK9QSBFuTGNkeDjSfdjkWnn6Z2XNKezsyrBmyVqdPG1i2uxunHo3pEE",
                    "id": "PDMMQiE5PVdu37icVXurDBUsXKGM5NsP3GLmkNEdMSJ",
                    "user": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
                    "token": "Eq1Wrk62j2F2tLf9XfdBssYJVr5k8oLJx3pqEL1rpump",
                    "collateralAmount": "15793974056718",
                    "depositSolAmount": "200000000",
                    "borrowedAmount": "294364966",
                    "referrer": "Ge3vpViqwz4fvx2EAZPsAfvUiwh7PajvTsZtKW33nMmE",
                    "blockTime": 1738944442,
                    "deadline": 1740828195
                    }]
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
            const animationClass = isFirstBlock ? fadeInClass : isLastBlock ? fadeOutClass : '';

            return (
              <div key={index} className={`${animationClass}`}>
                <PinContainer
                  title={`view ${block.id}`}
                  href={`/position/${block.id}`}
                >
                  <div className="tracking-tight text-slate-100/50 w-[18rem] h-[12rem]">
                    <Kube
                      title={`${block.id.slice(0,15)}...`}
                      description={`Borrowed Amount: ${(Number(block.borrowedAmount)/1e9).toFixed(3)} SOL  Deadline: ${block.deadline} `}
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

export default Positions;
