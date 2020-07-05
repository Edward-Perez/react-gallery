import React, { useState } from "react";

import { AppData } from "app/AppData";
import "app/App.css";

// Route Controller
import RouteController from "RouteController";

// Container
import SearchInputForm from "containers/SearchInputForm";
import TrendingNavList from "containers/TrendingNavList";

// Components
import Header from "components/Header";

function App() {
  const [appData] = useState(AppData);
  return (
    <div className="App">
      <RouteController userSearchInput={appData.initialSearch}>
        <Header title={appData.title}>
          <SearchInputForm />
          <TrendingNavList trendingData={appData.trendingData} />
        </Header>
      </RouteController>
    </div>
  );
}

export default App;
