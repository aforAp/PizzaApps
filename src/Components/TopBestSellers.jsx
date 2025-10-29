import React from 'react'
import { MapPin } from 'lucide-react'
const TopBestSellers = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='flex flex-row'>
       <img src="https://api.dominos.co.in/prod-olo-api/contents/home-cms/aAkqT7DxtxYFTQfcAuPU9XM1e2zYY21KngQDeXBz.png" className='w-50 h-10'/>
       </div>
       <h1 className='-ml-2 mt-3 text-xl font-bold bg-linear-to-r from-yellow-300 20% to-yellow-800 bg-clip-text text-transparent'>Top 10 Best Sellers</h1>
       <h1 className='flex mt-5 py-3 bg-linear-[90deg,white_10%,var(--light-yellow)_50%,white_75%] w-full justify-center text-[15px] font-medium text-amber-800/75'><span><MapPin className='text-[10px]'/></span>In Your Locality</h1>
   </div>
  )
}

export default TopBestSellers