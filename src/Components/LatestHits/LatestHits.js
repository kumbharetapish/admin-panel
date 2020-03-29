import React, { Component } from "react";
import Chart from "./Chart";

class LatestHits extends Component {
  render() {
    return (
      <div>
        <Chart location="Massachusetts" legendPosition="bottom" />
      </div>
    );
  }
}

export default LatestHits;
