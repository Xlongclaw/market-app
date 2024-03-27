import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const symbol = searchParams.get('symbol')
  const res = await fetch(`https://api.livecoinwatch.com/coins/single/history`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.MARKET_APIKEY!,
    },
    body: JSON.stringify({
      "currency": "USD",
      "code": symbol,
      "start": 1711434345094,
      "end": Date.now()
    }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}
