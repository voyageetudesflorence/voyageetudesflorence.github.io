export async function handler(event, context) {
  const apiKey = process.env.TWELVEDATA_API_KEY;

  try {
    const response = await fetch(`https://api.twelvedata.com/price?symbol=NVDA&apikey=${apiKey}`);
    const data = await response.json();

    if (data && data.price) {
      return {
        statusCode: 200,
        body: JSON.stringify({ currentPrice: parseFloat(data.price) }),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Invalid response from Twelve Data" }),
      };
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch NVDA price" }),
    };
  }
}

