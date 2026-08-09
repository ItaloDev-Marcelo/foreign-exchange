export type DropdownItemType = {
  title: string,
  children?: React.ReactNode
  space?: string, 
  handleCoin?: (title: string) => void,
  dropdown?: () => void
}