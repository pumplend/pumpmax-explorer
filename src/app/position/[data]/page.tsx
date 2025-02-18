
'use client';
import PositionDetails from '@/app/components/details/positions/position-details';
import React, { useEffect, useState } from 'react';
export default function TransactionPage({ params }: { params: { data: string } }) {
  const [block, setBlock] = useState<any>(null);
  const { data } = params; 

  useEffect(() => {
    if (!data) return;
    setBlock(data);
  }, [data]); 

  if (!block) {
    return <div>Loading...</div>;
  }

  return (
    <PositionDetails hash={block} />
  );
};
