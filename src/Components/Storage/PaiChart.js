import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import getResponse from "../../Web Service/WebServices";
class PaiChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    getResponse()
      .then(response => {
        const dataArr = Object.values(response.dasbhoardPage.storage).map(
          element => {
            return element * 100;
          }
        );

        const key = Object.keys(response.dasbhoardPage.storage).map(
          (keys, i) => {
            return (
              keys +
              " Store" +
              `${" ( " +
                Object.values(response.dasbhoardPage.storage + " )")[i]}`
            );
          }
        );

        this.setState({
          chartData: {
            labels: key,
            datasets: [
              {
                label: "Population",
                data: dataArr,
                borderWidth: 1,
                backgroundColor: [
                  "rgba(255, 99, 132)",
                  "rgba(54, 162, 235)",
                  "rgba(255, 206, 86)"
                ],

                options: {
                  legend: {
                    position: "top",
                    itemMaxWidth: 150,
                    maxHeight: 40,
                    itemWrap: true,
                    labels: {
                      maxHeight: 40,
                      display: false,
                      fontColor: "#fff",
                      textTransform: "capitalize",
                      backgroundColor: false
                    }
                  }
                }
              }
            ]
          }
        });
      })
      .catch(Error => {
        console.log(Error);
      });
  }

  render() {
    return (
      <Pie
        data={this.state.chartData}
        options={{
          legend: {
            position: "top",
            labels: {
              display: false,
              fontColor: "#fff",
              textTransform: "capitalize",
              backgroundColor: false
            }
          }
        }}
      />
    );
  }
}

export default PaiChart;
