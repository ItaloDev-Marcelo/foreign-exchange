import { IconExchange, IconExchangeVertical } from "../../assets/Icons"
import { currencieCoins } from "../../Data/Moedas"
import type { RateContainerType } from "../../types/RateContainerType"
import { RateBlock } from "./RateBlock"

const RateContainer = ({currentRateOne,currentRateTwo,RateOne,RateTwo,currentValueOne,currentValueTwo,reverseRateValues}:RateContainerType) => {
  return (
    <div className="bg-[#171719] w-screen rounded-xl flex flex-col  items-center justify-center     md:w-160  xl:w-[99%]  h-auto  ">
     <div className='flex flex-col md:flex-row items-center gap-2 md:gap-5 p-5 '>
     <RateBlock coinName={currentRateOne} handleCoin={RateOne} title='Send' value={currentValueOne.toFixed(3).replace('.', ',')} />
     <button onClick={reverseRateValues} className='p-2.5 w-10 rounded-lg border border-[#353537] bg-[#2e2e2e] hover:bg-[#525151] cursor-pointer ease-in-out delay-250 duration-500'>
      <img src={IconExchangeVertical} className='md:hidden' alt='' />
      <img src={IconExchange} alt='' className='hidden md:flex' />
       </button>
     <RateBlock color='text-[#caf23a]' coinName={currentRateTwo} handleCoin={RateTwo} title='Receive' value={currentValueTwo.toFixed(4)}  />
    </div>
    <div className="border-t border-gray-700 my-5 pt-6 md:pt-4 gap-5 md:mt-2 md:py-0 py-2 px-6 border-dashed flex flex-col md:flex-row items-center justify-center md:justify-between w-full">
      
        <p className="text-white">
          <span>{currentValueOne} {currencieCoins[currentRateOne]} = {currentValueTwo} {currencieCoins[currentRateTwo]} </span>
        </p>
      
      <div className="flex flex-row justify-between gap-2 items-center">
        <button className="btn border border-[#caf23a] bg-transparent">Favorited</button>
        <button className="btn border border-[#caf23a] bg-transparent">Log Conversion</button>
      </div>
    </div>
    </div>
  )
}

export default RateContainer