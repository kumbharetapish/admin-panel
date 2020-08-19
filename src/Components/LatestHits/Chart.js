import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import getResponse from "../../Web Service/WebServices";
class Chart extends Component {
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
    getResponse()
      .then((response) => {
        const dataArr = Object.values(response.dasbhoardPage.latestHits);
        const dataName = Object.keys(response.dasbhoardPage.latestHits);
        this.setState({
          chartData: {
            labels: dataArr[2],
            type: "line",

            datasets: [
              {
                label: dataName[1] + " Hits",
                data: dataArr[1],
                fill: false,
                lineTension: 0.5,
                borderColor: "#00FFFF",
                borderWidth: 2,
              },
              {
                label: dataName[3] + " Hits",
                data: dataArr[3],
                fill: false,
                borderColor: "#FF6347",
                type: "line",
                borderWidth: 2,
                lineTension: 0.5,
              },
              {
                label: dataName[0],
                data: dataArr[0],
                fill: false,
                borderColor: "#9932CC",
                type: "line",
                borderWidth: 2,
                lineTension: 0.5,
              },
            ],
          },
          scaleSteps: 10,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
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
                    fontColor: "#fff", // this here
                  },
                },
              ],

              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                  },
                  ticks: {
                    fontColor: "#fff", // this here
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
          }}
        />
      </div>
    );
  }
}

export default Chart;
