import React, { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";
import PriceDisplay from "./PriceDisplay";
import NavTabs from "./NavTabs";
import ChartSection from "./ChartSection";
import { styles } from "../styles/cryptoDashboardStyles";

const CryptoDashboard = () => {
  const [priceData, setPriceData] = useState({ price: 0, percentageChange: 0, priceDifference: 0 });
  const [chartData, setChartData] = useState(null);
  const [timeframe, setTimeframe] = useState("1w");
  const [activeTab, setActiveTab] = useState("Chart");
  const [loading, setLoading] = useState(true);

  // Fetch price data from the API and process it to update state
  const fetchPriceData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart`,
        {
          params: {
            vs_currency: "usd",
            days: timeframe === "1w" ? 7 : 1, // Fetch data based on selected timeframe
          },
        }
      );

      if (response.data && response.data.prices) {
        // Convert API price data into a more usable format for display and charting
        const prices = response.data.prices.map((price) => ({
          x: new Date(price[0]), // Timestamp
          y: price[1],            // Price value
        }));

        const latestPrice = prices[prices.length - 1].y;
        const oldPrice = prices[0].y;

        setPriceData({
          price: latestPrice.toFixed(2),
          priceDifference: (latestPrice - oldPrice).toFixed(2),
          percentageChange: (((latestPrice - oldPrice) / oldPrice) * 100).toFixed(2),
        });

        setChartData({
          labels: prices.map((point) => point.x), // X-axis timestamps
          datasets: [
            {
              label: "Bitcoin Price",
              data: prices.map((point) => point.y), // Y-axis price values
              fill: false,
              backgroundColor: "#6200ee",
              borderColor: "#6200ee",
              tension: 0.1, // Smooth chart curve
            },
          ],
        });
      }
    } catch (error) {
      console.error("Error fetching price data:", error);
    } finally {
      setLoading(false);
    }
  }, [timeframe]);

  useEffect(() => {
    fetchPriceData();
  }, [fetchPriceData]);

  // Memoize PriceDisplay to avoid unnecessary re-renders when priceData changes
  const memoizedPriceDisplay = useMemo(() => (
    <PriceDisplay 
      price={priceData.price} 
      percentageChange={priceData.percentageChange} 
      priceDifference={priceData.priceDifference} 
    />
  ), [priceData]);

  // Memoize NavTabs to prevent re-rendering unless activeTab changes
  const memoizedNavTabs = useMemo(() => (
    <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
  ), [activeTab]);

  return (
    <div style={styles.container}>
      {memoizedPriceDisplay}
      {memoizedNavTabs}
      <div style={styles.separator}></div>
      {activeTab === "Chart" ? (
        <ChartSection 
          chartData={chartData} 
          loading={loading} 
          timeframe={timeframe} 
          setTimeframe={setTimeframe} 
        />
      ) : (
        <div>You are on the "{activeTab}" component</div>
      )}
    </div>
  );
};

export default CryptoDashboard;
