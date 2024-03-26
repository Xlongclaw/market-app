export default async function getMarketDataBySymbol(symbol: string) {
  const res = await fetch(`http://localhost:3000/api/symbol?symbol=${symbol}`);
  const data = await res.json();
  return data;
}
