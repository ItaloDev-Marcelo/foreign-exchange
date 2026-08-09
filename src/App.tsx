import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { currencieCoins } from './Data/Moedas';
import RateContainer from './components/CurrencyConverter/RateContainer';

function App() {
  const [currentRateOne, setCurrentRateOne] = useState<string>('US')
  const [currentRateTwo, setCurrentRateTwo] = useState<string>('EU')
  const [currentValueOne, setCurrentValueOne] = useState<number>(0)
  const [currentValueTwo, setCurrentValueTwo] = useState<number>(0)
  const [change, setChange] = useState<boolean >(false)

  const RateOne = (title: string) => setCurrentRateOne(title)
  const RateTwo = (title: string) => setCurrentRateTwo(title)


  useEffect(() => {
  const fetchCurrentRate = async () => {
  try {
  const response = await axios.get(`
    https://api.frankfurter.dev/v1/latest?base=${currencieCoins[currentRateOne]}&symbols=${currencieCoins[currentRateTwo]}`)
    const v = currencieCoins[currentRateTwo]
  setCurrentValueOne(response.data.amount)
  setCurrentValueTwo(response.data.rates[v])
} catch (error) {
  console.error(error);
}
  }

    fetchCurrentRate()
  },[currentRateOne, currentRateTwo])

  const reverseRateValues = () => {


      // if(currentRateOne == currentRateTwo) {
      //   console.log('error mesmo tipo')
      //   return
      // }

       setCurrentRateOne(currentRateTwo)
       setCurrentRateTwo(currentRateOne)

       setChange(prev => !prev)
       console.log(change)
  }

  return (
   <div className='flex flex-col items-center justify-center'>
    <section className='px-7'>
      <h1 className='text-2xl md:text-[17px] font-semibold py-5 text-white uppercase'>Check the rate</h1>
      <RateContainer currentRateOne={currentRateOne} currentRateTwo={currentRateTwo}
     RateOne={RateOne} RateTwo={RateTwo} currentValueOne={currentValueOne} currentValueTwo={currentValueTwo} reverseRateValues={reverseRateValues} />
    </section>
   </div>
  )
}

export default App
