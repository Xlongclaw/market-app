import SearchBar from '@/components/search-bar';
import SearchPanel from '@/components/search-panel';
import getMarketDataBySymbol from '@/utils/getMarketDataBySymbol';
import React from 'react'

export default async function Page() { 
  return (
    <div className='p-4'>
      <SearchPanel/>
    </div>
  )
}
