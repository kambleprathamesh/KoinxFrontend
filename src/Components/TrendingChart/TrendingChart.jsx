import React, { useState, useEffect } from "react";

const TradingViewChart = () => {
  const [symbol, setSymbol] = useState("BTCUSD"); // Default symbol: Bitcoin in USD
  const [name, setName] = useState("Bitcoin"); // State for storing the first part of the label
  const [prices, setPrices] = useState({
    usd: null,
    inr: null,
    usdChange: null,
    inrChange: null,
  });

  const symbols = [
    { value: "BTCUSD", label: "Bitcoin (BTC/USD)" },
    { value: "ETHUSD", label: "Ethereum (ETH/USD)" },
    { value: "BNBUSD", label: "Binance Coin (BNB/USD)" },
    { value: "XRPUSD", label: "Ripple (XRP/USD)" },
    { value: "DOGEUSD", label: "Dogecoin (DOGE/USD)" },
    { value: "SOLUSD", label: "Solana (SOL/USD)" },
    { value: "ADAUSD", label: "Cardano (ADA/USD)" },
    { value: "MATICUSD", label: "Polygon (MATIC/USD)" },
    { value: "LTCUSD", label: "Litecoin (LTC/USD)" },
    { value: "DOTUSD", label: "Polkadot (DOT/USD)" },
    { value: "SHIBUSD", label: "Shiba Inu (SHIB/USD)" },
    { value: "TRXUSD", label: "TRON (TRX/USD)" },
    { value: "AVAXUSD", label: "Avalanche (AVAX/USD)" },
    { value: "ATOMUSD", label: "Cosmos (ATOM/USD)" },
    { value: "NEARUSD", label: "NEAR Protocol (NEAR/USD)" },
    { value: "AAVEUSD", label: "Aave (AAVE/USD)" },
    { value: "UNIUSD", label: "Uniswap (UNI/USD)" },
    { value: "FTMUSD", label: "Fantom (FTM/USD)" },
    { value: "ETCUSD", label: "Ethereum Classic (ETC/USD)" },
    { value: "EOSUSD", label: "EOS (EOS/USD)" },
    { value: "XMRUSD", label: "Monero (XMR/USD)" },
    { value: "ZECUSD", label: "Zcash (ZEC/USD)" },
    { value: "USDJPY", label: "USD/JPY (Forex)" },
    { value: "EURUSD", label: "EUR/USD (Forex)" },
    { value: "AAPL", label: "Apple (AAPL)" },
    { value: "TSLA", label: "Tesla (TSLA)" },
    { value: "AMZN", label: "Amazon (AMZN)" },
    { value: "GOOGL", label: "Google (GOOGL)" },
    { value: "MSFT", label: "Microsoft (MSFT)" },
  ];

  // Fetch the price data from CoinGecko API
  useEffect(() => {
    // const symbolId = symbol.split("U")[0].toLowerCase(); // Convert symbol to lowercase for API query
    const id = name.toLowerCase();
    console.log(id);
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd,inr&include_24hr_change=true`;

    const fetchPriceData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);

        // Ensure the data is valid and contains the symbolId
        const coinData = data[id];
        console.log("coinData", coinData);
        if (coinData) {
          setPrices({
            usd: coinData.usd,
            inr: coinData.inr,
            usdChange: coinData.usd_24h_change,
            inrChange: coinData.inr_24h_change,
          });
        } else {
          console.error("No data found for symbol:", symbolId);
        }
      } catch (err) {
        console.error("Error fetching price data:", err);
      }
    };

    // Call the function when needed
    fetchPriceData();
  }, [symbol]); // Re-run when symbol changes

  useEffect(() => {
    // Load TradingView widget script dynamically
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      // Clear the existing widget before creating a new one
      document.getElementById("tradingview_widget").innerHTML = "";

      // Create the TradingView widget
      new window.TradingView.widget({
        container_id: "tradingview_widget", // ID of the container
        autosize: true, // Automatically adjusts size to container
        symbol: symbol, // Symbol selected by the user
        interval: "D", // Default interval: Daily
        theme: "light", // Chart theme: light or dark
        style: "3", // Chart type: Area
        locale: "en", // Language for the interface
        enable_publishing: false, // Disable idea publishing
        hide_top_toolbar: false, // Hide the top toolbar for a cleaner look
        hide_side_toolbar: true, // Hide the side toolbar
        save_image: false, // Disable saving chart as an image
        studies: [], // Disable indicators
        withdateranges: false, // Disable date range selection
        details: false, // Hide additional details
        calendar: false, // Disable calendar feature
        showVolume: false, // Remove volume bars completely
      });
    };

    document.body.appendChild(script);
  }, [symbol]); // Re-run when symbol changes

  // Handle symbol selection change
  const handleSymbolChange = (e) => {
    const selectedSymbol = e.target.value;
    setSymbol(selectedSymbol);

    // Find the label based on the selected symbol and extract the first word
    const selectedCoin = symbols.find((coin) => coin.value === selectedSymbol);
    if (selectedCoin) {
      const firstWord = selectedCoin.label.split(" ")[0]; // Get first word of the label
      setName(firstWord); // Set the name to the first word of the label
    }
  };

  const symbolId = symbol.split("U")[0];
  return (
    <div>
      <div>
        <select
          id="symbol-select"
          value={symbol}
          onChange={handleSymbolChange}
          className="rounded bg-gray-800 text-white w-40 p-1 text-md md:text-[12px] md:w-44 md:h-10 mb-4"
        >
          {symbols.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <p className="text-[16px] font-medium text-[#768396]">
        {`Cryptocurrencies >>`} <strong className="text-black">{name}</strong>
      </p>
      <div className="bg-white rounded-lg h-full w-full border-2 p-4">
        <div className="CoinsMetaData flex gap-4 items-center w-full h-10 bg-white p-2 mb-4">
          {/* Displaying first word of the label in name field */}
          <div className="text-2xl font-semibold text-[#0B1426]">{name}</div>
          <div className="text-[16px] text-[#5D667B] font-semibold mt-1">
            {symbolId}
          </div>
          <div className="text-[16px] bg-gray-500 rounded-lg p-2 text-[#ffffff] font-medium mt-1 ">
            Rank #1
          </div>
        </div>

        <div className="w-full  flex justify-start items-center ">
          <div className=" w-48 text-[28px] text-[#0B1426] font-semibold mt-1">
            {prices.usd && `$${prices.usd.toFixed(2)}`}
          </div>
          <div
            className={`text-[10px] font-semibold mt-1 flex  items-center gap-1`}
          >
            <p
              className={`w-14 p-1 rounded-lg flex items-center justify-center gap-1 ${
                prices.usdChange < 0
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {prices.usdChange < 0 ? "▼" : "▲"}{" "}
              {/* Inline icons for up/down */}
              {prices.usdChange && `${prices.usdChange.toFixed(2)}%`}
            </p>
            <p className="text-[#768396]">(24H)</p>
          </div>
        </div>
        <div className="text-[16px]  text-[#0B1426] font-semibold mt-1">
          {prices.inr && `₹${prices.inr.toFixed(2)}`}
        </div>

        <div className="text-[16px] font-semibold text-[#0B1426] mt-4">
          {name} Price Chart (USD)
        </div>
        <div
          className="h-[300px] md:h-[400px] w-[100%]"
          id="tradingview_widget"
        ></div>
      </div>
    </div>
  );
};

export default TradingViewChart;
