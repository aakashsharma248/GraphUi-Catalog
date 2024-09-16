export const styles = {
    container: {
      padding: "35px",
      fontFamily: "'Roboto', sans-serif",
    },
    priceDisplay: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      fontSize: "35px",
    },
    priceContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    priceRow: {
      display: "flex",
      alignItems: "center",
    },
    priceText: {
      fontSize: "50px",
      fontWeight: "bold",
    },
    usdText: {
      fontSize: "20px",
      color: "grey",
      marginLeft: "5px",
      position: "relative", // Positioning to align 'USD' text next to the price
      top: "-12px", // Adjusts vertical positioning
      left: "5px", // Adjusts horizontal positioning
      fontWeight: "bold",
    },
    percentageChange: {
      color: "green", // Display positive percentage in green
      fontSize: "18px",
      marginTop: "5px",
      marginLeft: "0px",
      fontWeight: "normal",
    },
    nav: {
      marginBottom: "0px",
    },
    navList: {
      display: "flex",
      listStyleType: "none", // Removes default bullet points from list
      padding: 0,
      gap: "30px", // Provides spacing between navigation items
    },
    navItem: {
      padding: 0,
    },
    greyLink: {
      textDecoration: "none",
      color: "grey",
      fontSize: "18px",
      paddingBottom: "10px", // Adds space between link and underline
      borderBottom: "3px solid transparent", // Invisible underline for hover effect
    },
    activeLink: {
      textDecoration: "none",
      color: "#6200ee", // Purple color for active tab
      fontSize: "18px",
      paddingBottom: "10px",
      borderBottom: "3px solid #6200ee", // Purple underline to indicate active tab
    },
    separator: {
      height: "1px", // Thin separator line
      backgroundColor: "#e0e0e0",
      marginBottom: "50px",
    },
    actionRow: {
      display: "flex",
      justifyContent: "space-between", // Aligns buttons and selector on opposite sides
      alignItems: "center",
      marginBottom: "20px",
    },
    leftButtons: {
      display: "flex",
      gap: "15px", // Spacing between the fullscreen and compare buttons
    },
    fullscreenButton: {
      display: "flex",
      alignItems: "center",
      padding: "10px 15px",
      backgroundColor: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
      color: "#666",
      fontWeight: "bold",
    },
    compareButton: {
      display: "flex",
      alignItems: "center",
      padding: "10px 15px",
      backgroundColor: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
      color: "#666",
      fontWeight: "bold",
    },
    icon: {
      marginRight: "8px", // Space between icon and text
      fontSize: "20px",
    },
    timeframeSelector: {
      display: "flex",
      gap: "15px", // Spacing between timeframe buttons
    },
    activeButton: {
      padding: "10px 15px",
      backgroundColor: "#6200ee", // Active button color
      color: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
      fontWeight: "bold",
    },
    inactiveButton: {
      padding: "10px 15px",
      backgroundColor: "#fff", // Inactive button background
      textDecoration: "none",
      borderRadius: "5px",
      color: "#666",
      fontWeight: "bold",
    },
    chartContainer: {
      width: "100%",
      height: "600px", // Chart height
      padding: "20px",
      borderRadius: "5px",
    },
  };
  