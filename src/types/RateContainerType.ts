export type RateContainerType = {
      currentRateOne: string,
      currentRateTwo: string,
      RateOne: (title: string) => void,
      RateTwo: (title: string) => void,
      currentValueOne: number,
      currentValueTwo: number,
      reverseRateValues: () => void 
}