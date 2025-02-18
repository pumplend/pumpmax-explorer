"use client";
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Web3 from 'web3';
import React, { useEffect, useState } from 'react';
import {positions} from "@/core/dataFetch" ; 
export default function PositionDetails({ hash }: { hash: String}) {
  const [data, setData] = useState<any>({});

  const fetchData = async () => {
    let d = await positions(undefined,undefined,undefined,String(hash))
    if(d.length>0)
    {
        setData(d[0]);
    }
    
  };
  useEffect(() => {
    fetchData();
  }, []);


  const router = useRouter();

  return (
    <div>
      <h1 className="text-3xl font-semibold leading-7 text-gray-900 dark:text-gray-300 mb-6">
        {/*  We need to go back in history -1 */}
        <a onClick={() => router.back()} className="text-blue-500 dark:text-blue-400 cursor-pointer">
          <ArrowLeftIcon className="h-5 w-5 inline-block mr-2" />
        </a>
        Ongoing Position
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
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">ID</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
              <Link href={`https://solscan.io/address/${data.id}`} className='text-blue-500 dark:text-blue-400 cursor-pointer'>
                {data.id}
            </Link>
              </dd>
            </div>
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
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Debt Amount
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                {((Number(data.borrowedAmount)+Number(data.depositSolAmount))/1e9).toFixed(3)} SOL
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Collateral Token
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                {(Number(data.collateralAmount)/1e6).toFixed(3).toLocaleString()} Coin
              </dd>
            </div>
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
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Open Time
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                {
                    new Date(data.blockTime*1000).toLocaleString()
                }
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Liqudtion Time
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                {
                    new Date(data.deadline*1000).toLocaleString()
                }
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
