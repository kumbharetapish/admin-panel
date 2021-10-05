import React, { Component } from "react";
import Chart from "./Chart";
import getResponse from "../../Services/Services";
("../../Service/Services");
class LineChart extends Component {
  constructor(props) {
    super();
    this.state = {
      chartData: {},
    };
  }

  componentWillMount() {
    this.setState({
      chartData: {
        labels: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford"],
        type: "line",
        datasets: [
          {
            label: "Bar Dataset",
            lineColor: "#ff3aea",
            backgroundColor: "rgba(254, 25, 232, 0.50)",
            type: "line",
            data: [2594, 1045, 1360, 1519, 3162, 1072],
          },

          {
            label: "Bar Dataset",
            lineColor: "rgba(25, 24, 132)",
            backgroundColor: "rgba(250, 30, 85, 0.86)",
            type: "line",
            data: [1574, 3443, 1234, 1519, 1051, 1523],
          },
          {
            label: "Line Dataset",
            data: [2134, 1345, 1554, 1785, 2062, 2072],
            backgroundColor: "rgba(24, 009, 255, 0.86)",
            lineColor: "rgba(204, 009, 255, 0.86)",
            type: "line",
          },
        ],
        borderColor: ["rgba(255, 99, 132,)", "rgba(54, 162, 235, )", "rgba(54, 162, 235,)"],
        // fill: false,
        backgroundColor: ["rgba(255, 99, 132,)", "rgba(54, 162, 235, )", "rgba(54, 162, 235,)"],
      },
    });
  }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />
      </div>
    );
  }
}
export default LineChart;
