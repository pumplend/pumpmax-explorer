'use client'

import Blocks from "./components/blocks/blocks";
import Hero from "./components/ui/hero";
import Positons from "./components/blocks/positions";
import Actives from "./components/blocks/actives";
import GoingLiqudtion from "./components/blocks/going_liqudtion";
import Status from "./components/blocks/status";
import React, { useEffect, useState } from 'react';
import {mainPage} from "@/core/dataFetch" ; 
export default function Home() {
    useEffect(() => {
      const init = async ()=>
      {
        const init = await mainPage()
        console.log("Init page" , init , process.env.NEXT_PUBLIC_SOLANA_RPC_URL)
      }
      init()
    }, []);
  
  return (
    <div className="pt-14">
      <Hero />
      <Status />
      <Positons />
      <Actives />

      {/* <GoingLiqudtion /> */}
    </div>
  );
}
