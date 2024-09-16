import React from "react";
import { styles } from "../styles/cryptoDashboardStyles";

const PriceDisplay = ({ price, percentageChange, priceDifference }) => {
  return (
    <div style={styles.priceDisplay}>
      <div style={styles.priceContainer}>
        <div style={styles.priceRow}>
          <h1 style={styles.priceText}>${price}</h1>
          <span style={styles.usdText}>USD</span>
        </div>
        <h3 style={styles.percentageChange}>
          {/* Add "+" sign for positive percentage change */}
          {percentageChange > 0 ? "+" : ""}
          {priceDifference}
          {` (${percentageChange})`}%
        </h3>
      </div>
    </div>
  );
};

export default PriceDisplay;
