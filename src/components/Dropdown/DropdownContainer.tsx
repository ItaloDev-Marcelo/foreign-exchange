import { IconChevronDown } from "../../assets/Icons"
import { currencie } from "../../Data/Moedas"
import type { DropdownContainerType } from "../../types/DropdownContainerType"
import { DropdownItem } from "./DropdownItem"

export const DropdownContainer = ({dropdown,openDrowpdown,coinName,handleCoin}:DropdownContainerType) => {
  return (
     <div className='flex  w-27.5 rounded-lg border border-[#353537] bg-[#2e2e2e]
        flex-row justify-between items-center gap-1 relative'>
            <ul className="relative">
                <DropdownItem dropdown={dropdown}  title={coinName} space='mx-1.5 my-2 text-[#fcfcfc] cursor-pointer w-[87px]'><img src={IconChevronDown}  alt=''/></DropdownItem>
                 {
                  openDrowpdown &&  <div className='bg-[#2e2e2e] rounded-b-lg  absolute 
      top-full z-50  -mt-1 -ml-[.1em] w-27.5  max-h-19 overflow-y-auto border border-[#353537]  pl-2  '>
                    {
                      currencie.map((item,index) => (
                         <DropdownItem handleCoin={handleCoin} dropdown={dropdown} title={item} key={index} space="my-3 cursor-pointer w-[75px] pr-2 " />
                      ))
                    }
                   </div>
                 }
            </ul>
        </div>
  )
}
