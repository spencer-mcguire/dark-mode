import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin?markey_data=true")
      .then(res => console.log(res.data))
      .catch(err => console.log("SERVER ERROR", err));
  }, []);

  //   const formattedData = data
  //     .map((price, idx) => {
  //       if (idx % 6 === 0) {
  //         const timeToSubtract = 168 - idx;
  //         const date = moment()
  //           .subtract(timeToSubtract, "hours")
  //           .format("ddd h:mma");
  //         return { value: price, date };
  //       } else if (idx === data.length - 1) {
  //         const date = moment().format("ddd h:mma");
  //         return { value: price, date };
  //       }
  //       return null;
  //     })
  //     .filter(data => data);

  return (
    <LineChart width={1100} height={300}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" interval={3} />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};
//data={formattedData}
export default Chart;
