import React from "react";
import PropTypes from "prop-types";

// Componentss
import { ReactNavLink } from "components/";

function TrendingNavList({ trendingData }) {
  function BuildRouterNavLinks() {
    if (!trendingData.length) return <div />;
    return trendingData.map((item, index) => (
      <li key={index}>
        <ReactNavLink key={item.id} url={item.url} content={item.content} />
      </li>
    ));
  }

  return (
    <nav className="trending-nav-list">
      <p>Trending:</p>
      <ul>
        <BuildRouterNavLinks />
      </ul>
    </nav>
  );
}

TrendingNavList.propsTypes = {
  trendingData: PropTypes.object.isRequired,
};

export default TrendingNavList;
