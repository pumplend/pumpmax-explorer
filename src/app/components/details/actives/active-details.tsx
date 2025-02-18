"use client";
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Web3 from 'web3';
import React, { useEffect, useState } from 'react';
import {actives, positions} from "@/core/dataFetch" ; 
export default function ActiveDetails({ hash }: { hash: String}) {
  const [data, setData] = useState<any>({});

  const fetchData = async () => {
    let d = await actives(undefined,undefined,String(hash))
    if(d.length>0)
    {
        setData(d[0]);
    }
    
  };
  useEffect(() => {
    fetchData();
  }, []);


  const router = useRouter();

  const actionType = (t:string)=>
  {
    let type = "";
    if (t == "stake")
    {
      type = "STAKE SOL"
    }
    if (t == "withdraw")
    {
      type = "WITHDRTAW SOL"
    }
    if (t == "borrow")
    {
      type = "BORROW TOKEN"
    }
    if (t == "repay")
    {
      type = "REPAY POSITION"
    }
    if (t == "borrowLoopPump")
    {
      type = "MAKE LONG"
    }
    if (t == "borrowLoopRaydium")
    {
      type = "MAKE LONG"
    }
    if (t == "liquidatePump")
    {
      type = "CLOSE POSITION"
    }
    if (t == "liquidateRaydium")
    {
      type = "CLOSE POSITION"
    }
    return (
      type
    );
  }

  const actionAmountDisplay = (data:any) =>
  {

    if (data.type == "stake")
      {
            return (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Deposite Amount
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                {
                  (Number(data.amount)/1e9).toFixed(3)
              } SOL
              </dd>
            </div>
            )
      }
      if (data.type == "withdraw")
      {
        return (
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
            Withdraw Share
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
            {
              (Number(data.share)/1e9).toFixed(3)
          } Share
          </dd>
        </div>
        )
      }
      if (data.type == "borrow")
      {
        return (
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
          Collateral Token
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
            {
              (Number(data.amount)/1e6).toFixed(3)
          } Coin
          </dd>
        </div>
        )
      }
      if (data.type == "borrowLoopPump" || data.type == "borrowLoopRaydium")
      {
        return (
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
          Collateral SOL
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
            {
              (Number(data.amount)/1e9).toFixed(3)
          } SOL
          </dd>
        </div>
        )
      }

    return (
      null
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold leading-7 text-gray-900 dark:text-gray-300 mb-6">
        {/*  We need to go back in history -1 */}
        <a onClick={() => router.back()} className="text-blue-500 dark:text-blue-400 cursor-pointer">
          <ArrowLeftIcon className="h-5 w-5 inline-block mr-2" />
        </a>
        {
          actionType(data.type)
        }
      </h1>
      <div className="overflow-hidden bg-white dark:bg-gray-800 shadow sm:rounded-lg p-3">
        <div className="px-4 py-6 sm:px-6">
          <p className="font-bold text-gray-500 dark:text-gray-300">
          
            <Link href={`https://solscan.io/tx/${data.hash}`} className='text-blue-500 dark:text-blue-400 cursor-pointer'>
                {data.hash}
            </Link>
          </p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-900">
          <dl className="divide-y divide-gray-200 dark:divide-gray-900">
            
            {
              data?.id ?
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">ID</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                <Link href={`https://solscan.io/address/${data.id}`} className='text-blue-500 dark:text-blue-400 cursor-pointer'>
                  {data.id}
                </Link>
                </dd>
              </div>
              :
              null
            }
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
                User
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                <Link href={`https://solscan.io/address/${data.user}`} className='text-blue-500 dark:text-blue-400 cursor-pointer'>
                    {data.user}
                </Link>
              </dd>
            </div>

            {
              data?.token ?
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Token
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
              <Link href={`https://solscan.io/address/${data.token}`} className='text-blue-500 dark:text-blue-400 cursor-pointer'>
                {data.token}
              </Link>
              </dd>
            </div>
            :
            null
            }

            {
              actionAmountDisplay(data)
            }
            {
              data?.referrer ?
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Refferal
              </dt>
              <dd>
              <Link href={`https://solscan.io/address/${data.referrer}`} className='text-blue-500 dark:text-blue-400 cursor-pointer'>
                {data.referrer}
              </Link>
              </dd>
            </div>
            :
            null
            }
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Block Time
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                {
                    new Date(data.blockTime*1000).toLocaleString()
                }
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  )
}
