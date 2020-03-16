import React, { Component } from "react";
import getResponse from "../../Web Service/WebServices";
import LatestStyle from "./LatestStyle.module.css";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
export default class LatestHits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestHitsData: {
        labels: [],
        datasets: []
      },
      options: {
        title: {
          fontSize: "20px",
          display: true,
          text: "World population per region (in millions)"
        }
      }
    };
  }

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
          options={{ maintainAspectRatio: true }}
        />
      </div>
    );
  }
}
