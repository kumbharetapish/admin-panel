import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import getResponse from "../../Web Service/WebServices";
class Performance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
  }

  componentWillMount() {
    getResponse()
      .then((response) => {
        const dataArr = Object.values(response.dasbhoardPage.performance);
        const dataName = Object.keys(response.dasbhoardPage.performance);
        console.log(dataArr, dataName);
        this.setState({
          chartData: {
            labels: dataName,
            type: "bar",
            datasets: [
              {
                label: "# Hits",
                data: dataArr,
                lineTension: 0.3,
                barPercentage: 0.5,
                barThickness: 6,
                backgroundColor: [
                  "#00FFFF",
                  "#ADD8E6",
                  "#228B22",
                  "#FFA500",
                  "#9932CC",
                  "#FF6347",
                  "#FFFF00",
                ],
                borderColor: "rgba(255,255,255,1)",
                borderWidth: 0.4,
              },
            ],
          },
        });
        console.log(this.state.chartData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City",
    fontColor: "white",
  };

  render() {
    return (
      <div>
        <Bar
          data={this.state.chartData}
          // width={250}
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
                    min: 20,
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
            scaleSteps: 10,
            legend: {
              position: "top",
              labels: {
                fontColor: "#fff",
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Performance;
