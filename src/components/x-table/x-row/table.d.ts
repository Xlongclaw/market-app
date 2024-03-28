interface ITableData {
  sequence:number,
  date:string,
  tradeStatus:"RUNNING" | "CLOSED" | "OPENED",
  action:"BUY" | "SELL" | "NA",
  quantity:number,
  price:number,
  change:number,
  unrealizedPnl:number
}

