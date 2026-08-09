import { currencieCoins} from "../../Data/Moedas"
import { ContriesFlags } from "../../assets/Flags_icons"
import type { DropdownItemType } from "../../types/DropdownItemType";


export const DropdownItem = ({title,children,space,handleCoin,dropdown}:DropdownItemType) => {
  return (
    <li onClick={() => {handleCoin?.(title); dropdown?.()}} className={`flex font-normal flex-row items-center  justify-between ${space}`}><img src={ContriesFlags[title]} alt='' className='w-5 rounded-full'/><span className="">{currencieCoins[title]}</span>{children}</li>
  )
}
