import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const symbol = searchParams.get('symbol')
  const startDate = Number(searchParams.get('startDate'))
  const endDate = Number(searchParams.get('endDate'))
  const difference = (Number(endDate)-Number(startDate))
  let cryptoData:Array<any> = []
  let sd = startDate;
  let ed = endDate
  let diff = difference

  if(difference >86400000){
    while (diff>86400000) {
      const res = await fetch(`https://api.livecoinwatch.com/coins/single/history`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.MARKET_APIKEY!,
      },
      body: JSON.stringify({
        "currency": "USD",
        "code": symbol,
        "start": sd,
        "end": sd + 86400000
      }),
    });
    const data = await res.json();
    cryptoData = [...cryptoData,...data.history]
    sd = sd +86400000;
    diff = diff - 86400000
  }
  const res = await fetch(`https://api.livecoinwatch.com/coins/single/history`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.MARKET_APIKEY!,
      },
      body: JSON.stringify({
        "currency": "USD",
        "code": symbol,
        "start": sd,
        "end": sd + diff
      }),
    });
    const data = await res.json();
    cryptoData = [...cryptoData,...data.history]
    console.log(cryptoData);
    
  return NextResponse.json(cryptoData);
  }
  else{
    const res = await fetch(`https://api.livecoinwatch.com/coins/single/history`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.MARKET_APIKEY!,
      },
      body: JSON.stringify({
        "currency": "USD",
        "code": symbol,
        "start": startDate,
        "end": endDate
      }),
    });
    console.log(startDate,endDate);
    
    const data = await res.json();
    return NextResponse.json(data.history);
  }
}
