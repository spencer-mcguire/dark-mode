import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import CoinList from "./components/CoinList";
import Charts from "./components/Charts";
import SingleChart from "./components/SingleChart";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  console.log(coinData);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      {/* <Route
        exact
        path="/"
        render={props => <CoinList {...props} coinData={coinData} />}
      />
      <Route path="/:id" render={props => <SingleChart {...props} />} /> */}
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
