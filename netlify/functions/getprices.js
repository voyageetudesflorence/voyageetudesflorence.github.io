
export async function handler(event, context) {
  const API_KEY = process.env.TWELVEDATA_API_KEY;
  const url = `https://api.twelvedata.com/price?symbol=NVDA,USD/CHF&apikey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: response.ok ? 200 : 500,
    body: JSON.stringify({
      nvda: parseFloat(data.NVDA.price),
      usdchf: parseFloat(data["USD/CHF"].price)
    })
  };
}
