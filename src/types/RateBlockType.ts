export type RateBlockType = {
  handleCoin: (title: string) => void,
  coinName: string,
  title: string,
  value: number | string,
  color?: string
}