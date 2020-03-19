import React, { Component } from "react";
import getResponse from "../../Web Service/WebServices";
import LatestStyle from "./LatestStyle.module.css";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
export default class LatestHits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  componentDidMount() {
    getResponse()
      .then(response => {
        console.log(response.dasbhoardPage.latestHits.months);
        this.setState({
          latestHitsData: {
            labels: response.dasbhoardPage.latestHits.months,
            datasets: [
              {
                data: [response.dasbhoardPage.latestHits.featured],
                label: "Featured",
                borderColor: "#3e95cd",
                fill: true
              },
              {
                data: [response.dasbhoardPage.latestHits.latest],
                label: "latest",
                borderColor: "#3cd",
                fill: true
              },
              {
                data: [response.dasbhoardPage.latestHits.popular],
                label: "popular",
                borderColor: "#4443cd",
                fill: true
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
      <div className={LatestHits.latestWrapper}>
        <Line
          className={LatestHits.cart}
          data={this.state.latestHitsData}
          options={{
            showLines:true,
            title: {
              display: this.props.displayTitle,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}
