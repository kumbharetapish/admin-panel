import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "left",
    location: "City"
  };

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            scaleOverride: true,
            scaleStartValue: 0,
            scaleSteps: 10,
            scaleStepWidth: 90,
            title: {
              display: this.props.displayTitle,
              fontSize: 20,
              color:"red"
            },
            legend: {
              position: "top",
              display: this.props.displayLegend
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
