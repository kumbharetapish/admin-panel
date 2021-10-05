import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import getResponse from "../../Services/Services";
class LatestHits extends Component {
  constructor(props) {
    super();
    this.state = {
      chartData: {
        labels: [],
        type: "line",
        datasets: [],
      },
    };
  }

  componentWillMount() {
    const option = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Hits",
              fontColor: "#fff",
            },
            ticks: {
              beginAtZero: true,
              min: 10,
              fontColor: "#fff",
            },
          },
        ],

        xAxes: [
          {
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: "#fff",
            },
          },
        ],
      },
      legend: {
        position: "top",

        labels: {
          display: false,
          fontColor: "#fff",
          textTransform: "capitalize",
          backgroundColor: false,
        },
      },
      toolTip: {
        enabled: false,
      },
      scaleOverride: true,
      scaleStartValue: 10,
      scaleSteps: 10,
    };
    getResponse()
      .then((response) => {
        const dataArr = Object.values(response.dasbhoardPage.latestHits);
        const dataName = Object.keys(response.dasbhoardPage.latestHits);
        const borderColor = ["#00FFFF", "#FF6347", "#9932CC", "#fff"];
        const datasets = Object.values(response.dasbhoardPage.latestHits).map((el, i) => {
          return {
            label: dataName[i] + " Hits",
            data: el,
            fill: false,
            lineTension: 0.5,
            borderColor: borderColor[i],
            borderWidth: 2,
          };
        });

        this.setState({
          chartData: {
            labels: [...dataArr[2]],
            type: "line",
            datasets: datasets,
          },
          scaleSteps: 10,
          options: option,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Line
          location={this.props.location}
          legendPosition={this.props.legendPosition}
          data={this.state.chartData}
          options={this.state.options}
        />
      </div>
    );
  }
}

export default LatestHits;
