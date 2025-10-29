import { LocateIcon, MapPin,ChevronDown, User } from "lucide-react"

const Header = () => {
  return (
    <div className="flex flex-col bg-white">

    <div className="flex flex-row mt-5 justify-between">
<div className="flex flex-col">
   <div className="flex flex-row text-red-600 font-bold text-[15px]">
      <span><MapPin className="text-red-600"/></span>
      <h1>No Location</h1>
        <span><ChevronDown /></span>
    </div>
    <p className="text-[13px]">Exact Location Required!</p>
</div>
    <div className="flex mr-4 w-10 h-10 rounded-full justify-center border bg-gray-200 border-none">
      <User color="#2d2a2a" className="text-center mt-1.5"/>
    </div>
    </div>
 <div className="flex flex-row justify-between h-15 mt-5 w-full bg-linear-to-r from-blue-800 from-0.5% to-blue-900">
<div className="flex flex-col">
   <div className="flex flex-row text-white font-bold pt-1 w-90 text-[15px]">
      <span><MapPin className=" bg-blue-600 p-1 mt-1 h-10 w-10 rounded-full"/></span>
      <div>
      <h1 className="ml-3 mt-1 text-[12px]">Give us your Exact location</h1>
      <p className="ml-3 text-[12px]">for seamless delivery</p>
      </div>
    </div>
  
</div>
    <div className="flex mr-4 mt-2 mb-2">
      <button className="ptp-0.5 bg-none border-2 border-amber-50 text-[12px] rounded-xl text-white font-bold">Detect location</button>
    </div>
    </div>
  <div className="grid grid-cols-3 gap-3 m-3 grid-rows-1">
    <span className="w-full h-13 text-center pt-0.5 bg-black text-white rounded-xl">
      <h1>Delivery</h1>
       <p className="text-[13px]">NOW</p>
    </span>
    <span className="w-full text-center pt-1 bg-white text-black border-2 border-gray-100 rounded-xl">
      <h1>Takeaway</h1>
      <p className="text-[12px]">Select Store</p>
    </span>
    <span className="w-full text-center pt-1 bg-white text-black border-2 border-gray-100 rounded-xl">
      <h1>Dine-in</h1>
      <p className="text-[12px]">Select Store</p>
    </span>
    </div>
    </div>
  )
}

export default Header