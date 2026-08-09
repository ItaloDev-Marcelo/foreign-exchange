import { useState } from "react"
import { DropdownContainer } from "../Dropdown/DropdownContainer"
import type { RateBlockType } from "../../types/RateBlockType"


export const RateBlock = ({handleCoin, coinName, title, value,color}:RateBlockType) => {
  const [openDrowpdown, setOpenDropdown] = useState(false)
  const dropdown = () => setOpenDropdown(!openDrowpdown)
  
  return (
    <div className="bg-[#202022] border border-[#353537] w-[350px] md:w-[260px]  h-32   p-4 gap-2 rounded-xl xl:w-101.75   hover:bg-[#262629] cursor-pointer ease-in-out delay-250 duration-500 ">
        <h2 className='text-left  my-2 uppercase text-gray-400 tracking-wider'>{title}</h2>
        <div className="flex flex-row  items-center justify-between">
        <p className={`text-[2.3em] md:text-[1.9em] font-semibold ${color}`}>{value}</p>
          <DropdownContainer dropdown={dropdown} openDrowpdown={openDrowpdown} coinName={coinName} handleCoin={handleCoin} />
        </div>
    </div>
  )
}
