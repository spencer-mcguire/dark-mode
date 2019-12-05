import React from "react";
import { Link } from "react-router-dom";
const CoinList = ({ coinData }) => {
  return (
    <div>
      {coinData.map(i => (
        <div key={i.id}>
          <Link to={`/${coinData.id}`}>{i.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default CoinList;
