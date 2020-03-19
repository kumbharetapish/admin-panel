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

        const key = Object.keys(response.dasbhoardPage.storage).map(keys => {
          return keys + " Store";
        });

        this.setState({
          chartData: {
            labels: key,
            datasets: [
              {
                label: "Population",
                data: dataArr,
                backgroundColor: [
                  "rgba(255, 99, 132)",
                  "rgba(54, 162, 235)",
                  "rgba(255, 206, 86)"
                ],

                options: {
                    legend: {
                        labels: {
                            fontColor: 'white'
                        }
                    }
                },
           
              }
            ]
          }
        });
      })
      .catch(Error => {
        console.log(Error);
      });
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City",
    FontColor:"white"
  };

  render() {
    return (
      <div>
        <Pie
          data={this.state.chartData}
          width={250}
          options={{
            title: {
              display: this.props.displayTitle,
              fontSize: 14
            },
            legend: {
              display: this.props.displayLegend,
              position: "top"
            }
          }}
        />
      </div>
    );
  }
}

export default PaiChart;
