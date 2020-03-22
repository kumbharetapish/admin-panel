import React, { Component } from "react";
import { Pie, Line, Bar } from "react-chartjs-2";
import getResponse from "../../Web Service/WebServices";
class Performance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    getResponse()
      .then(response => {
        const dataArr = Object.values(response.dasbhoardPage.performance).map(
          element => {
            return element * 100;
          }
        );
        console.log(response.dasbhoardPage.performance);

        const key = Object.keys(response.dasbhoardPage.performance).map(
          keys => {
            return keys;
          }
        );

        this.setState({
          chartData: {
            type: "horizontalBar",
            data: dataArr,
            options: {
              scales: {
                yAxes: [
                  {
                    barThickness: 20,
                    ticks: {
                      beginAtZero: true,
                      mirror: true
                    }
                  }
                ]
              },
              responsive: true,
              legend: {
                display: false
              },
              title: {
                display: true,
                text: "Horizontal Bar Chart"
              },
              animation: {
                duration: 1,
                // onComplete () {
                //   const chartInstance = this.chart;
                //   const ctx = chartInstance.ctx;
                //   const dataset = this.data.datasets[0];
                //   const meta = chartInstance.controller.getDatasetMeta(0);
            
                //   Chart.helpers.each(meta.data.forEach((bar, index) => {
                //     const label = this.data.labels[index];
                //     const labelPositionX = 20;
                //     const labelWidth = ctx.measureText(label).width + labelPositionX;
            
                //     ctx.textBaseline = 'middle';
                //     ctx.textAlign = 'left';
                //     ctx.fillStyle = '#333';
                //     ctx.fillText(label, labelPositionX, bar._model.y);
                //   }));
                // }
              }
            }
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
    FontColor: "white"
  };

  render() {
    return (
      <div>
        <Bar
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

export default Performance;
