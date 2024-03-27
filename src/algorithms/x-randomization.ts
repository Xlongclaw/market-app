const XRandomisation = ({
  capital,
  symbolHistory,
  lever,
  tpRate,
  slRate,
}: {
  capital: number;
  symbolHistory: Array<any>;
  lever: number;
  tpRate: number;
  slRate: number;
}) => {

  const tableData: Array<ITableData> = [];

  let trade = false;
  let direction: "BUY" | "SELL" = "BUY";
  let qty = 0;
  let rate = 0;
  let cptl = capital;
  let rn;
  // let riskcap = lever * capital*50/100
  let riskcap = 50;
  symbolHistory!.forEach((element,i) => {
    if (!trade) {
      rn = Math.round(Math.random());
      if (rn == 1) {
        rate = element.rate;
        qty = riskcap / rate;
        direction = "BUY";
        trade = true;
        console.log(`BUY QTY : ${qty} at $${rate}`);
        tableData.push({action: direction , change: 0, date:element.date,price:element.rate,quantity:qty, sequence:i+1,tradeStatus:"OPENED"})
      } else {
        rate = element.rate;
        qty = riskcap / rate;
        direction = "SELL";
        trade = true;
        console.log(`SELL QTY : ${qty} at $${rate}`);
        tableData.push({action: direction , change: 0, date:element.date,price:element.rate,quantity:qty, sequence:i+1,tradeStatus:"OPENED"})
      }
    } else {
      if (direction == "BUY") {
        if (element.rate > rate + (tpRate / 100) * rate) {
          let profit = qty * (element.rate - rate);
          cptl = cptl + profit;
          trade = false;
          console.log(`PROFIT : ${profit}`);
        tableData.push({action: "SELL" , change: profit, date:element.date,price:element.rate,quantity:qty, sequence:i+1,tradeStatus:"CLOSED"})
        } else if (element.rate < rate - (slRate / 100) * rate) {
          let loss = qty * (rate - element.rate);
          cptl = cptl - loss;
          trade = false;
          console.log(`LOSS : ${loss}`);
        tableData.push({action: "SELL" , change: loss, date:element.date,price:element.rate,quantity:qty, sequence:i+1,tradeStatus:"CLOSED"})
        } else {
          console.log(`PASS`);
        tableData.push({action: "NA" , change: 0, date:element.date,price:element.rate,quantity:qty, sequence:i+1,tradeStatus:"RUNNING"})
        } 
      } else {
        if (element.rate < rate - (tpRate / 100) * rate) {
          let profit = qty * (rate - element.rate);
          cptl = cptl + profit;
          trade = false;
          console.log(`PROFIT : ${profit}`);
        tableData.push({action: "BUY" , change: profit, date:element.date,price:element.rate,quantity:qty, sequence:i+1,tradeStatus:"CLOSED"})
        } else if (element.rate > rate + (slRate / 100) * rate) {
          let loss = qty * (element.rate - rate);
          cptl = cptl - loss;
          trade = false;
          console.log(`LOSS : ${loss}`);
        tableData.push({action: "BUY" , change: loss, date:element.date,price:element.rate,quantity:qty, sequence:i+1,tradeStatus:"CLOSED"})
        } else {
          tableData.push({action: "NA" , change: 0, date:element.date,price:element.rate,quantity:qty, sequence:i+1,tradeStatus:"RUNNING"})
          console.log(`PASS`);
        } 
      }
    }
  });
  return {cptl, tableData};
};

export default XRandomisation;
