
'use client';
import React, { useEffect, useState } from 'react';
import Positons from "@/app/components/blocks/positions";
import Actives from "@/app/components/blocks/actives";
import {addressGuess} from "@/core/utils"
export default function TransactionPage({ params }: { params: { address: string } }) {
  const [addressDetail, setAddressDetail] = useState<any>(null);
  const { address } = params; 

  useEffect(() => {
    if (!address) return; // Exit if the hash is not yet available
    const fetchWalletData = async () => {

      setAddressDetail(
        addressGuess(address)
      )
    };
    fetchWalletData();
  }, [address]); // Re-run the effect if the hash changes

  if (!addressDetail) {
    return <div>Loading...</div>;
  }

  return (

    <div className="pt-14">
    <Positons  
    search={addressDetail}
    />
    <Actives 
      search={addressDetail}
      />

    {/* <GoingLiqudtion /> */}
  </div>
   
  );
};
