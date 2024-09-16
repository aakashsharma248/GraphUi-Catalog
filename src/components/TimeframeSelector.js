import React from "react";
import { styles } from "../styles/cryptoDashboardStyles";

const TimeframeSelector = ({ timeframe, setTimeframe }) => {
  const timeframes = ["1d", "1w", "1m", "6m", "1y", "max"];

  return (
    <div style={styles.timeframeSelector}>
      {timeframes.map((tf) => (
        <a
          key={tf}
          href="#"
          // Apply active or inactive styles based on the selected timeframe
          style={tf === timeframe ? styles.activeButton : styles.inactiveButton}
          // Change the selected timeframe when clicked
          onClick={() => setTimeframe(tf)}
        >
          {tf}
        </a>
      ))}
    </div>
  );
};

export default TimeframeSelector;
