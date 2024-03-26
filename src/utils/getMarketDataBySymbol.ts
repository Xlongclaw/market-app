export default async function getMarketDataBySymbol(symbol: string) {
  const res = await fetch(`/api/symbol?symbol=${symbol}`);
  const data = await res.json();
  return data;
}
