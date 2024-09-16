import React from "react";
import { styles } from "../styles/cryptoDashboardStyles";

const NavTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Summary", "Chart", "Statistics", "Analysis", "Settings"];

  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        {tabs.map((tab) => (
          <li key={tab} style={styles.navItem}>
            <a
              href="#"
              onClick={() => setActiveTab(tab)} // Update active tab on click
              style={tab === activeTab ? styles.activeLink : styles.greyLink} // Conditional styling based on the active tab
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavTabs;
