import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import TimeframeSelector from "./TimeframeSelector";
import { AiOutlineFullscreen, AiOutlineLineChart } from "react-icons/ai";
import { styles } from "../styles/cryptoDashboardStyles";

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,    // For the x-axis as a category
  LinearScale,      // For the y-axis
  PointElement,     // For points on the line chart
  LineElement,      // For the line itself
  Title,            // For the chart title
  Tooltip,          // For tooltips
  Legend            // For the legend
);

const ChartSection = ({ chartData, loading, timeframe, setTimeframe }) => {
  return (
    <>
      <div style={styles.actionRow}>
        <div style={styles.leftButtons}>
          <a href="#" style={styles.fullscreenButton}>
            <AiOutlineFullscreen style={styles.icon} /> Fullscreen
          </a>
          <a href="#" style={styles.compareButton}>
            <AiOutlineLineChart style={styles.icon} /> Compare
          </a>
        </div>
        {/* Timeframe selector allows users to change the time range */}
        <TimeframeSelector timeframe={timeframe} setTimeframe={setTimeframe} />
      </div>
      <div style={styles.chartContainer}>
        {/* Conditional rendering for loading state or data availability */}
        {loading ? (
          <p>Loading...</p>
        ) : chartData ? (
          <Line data={chartData} /> // Renders the chart when data is available
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
};

export default ChartSection;
