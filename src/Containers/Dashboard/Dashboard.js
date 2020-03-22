import React, { Component } from "react";
import DashboardStyle from "./Dashboard.module.css";
import NotificationList from "../../Components/NotificationList/NotificationList";
import { connect } from "react-redux";
import OrdersList from "../../Components/OrdersList/OrdersList";
import LatestHits from "../../Components/LatestHits/LatestHits";
import Performance from "../../Components/Performance/Performance"
import LineChart from "../../Components/LineChart/LineChart";
import Storage from "../../Components/Storage/Store"
export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestHits: {},
      performanceData: {},
      storageInfoData: {},
      orderData: {},
      notificationData: []
    };
  }

  render() {
    return (
      <div className={DashboardStyle.Container}>
        <div className={DashboardStyle.headingRow}>
          <p>
            Welcome back, <h2>Admin</h2>{" "}
          </p>
        </div>

        <div className={DashboardStyle.rowFirst}>
          <div>
            <h2>Latest Hits </h2>
            <LineChart />
          </div>
          <div>
            <h2> Performance</h2>
            <Performance />
          </div>
        </div>
        <div className={DashboardStyle.rowSecond}>
          <div>
            <h2>Storage Information</h2>
            <Storage />
          </div>
          <div>
            <h2>Notification List</h2>
            <NotificationList />
          </div>
        </div>

        <div className={DashboardStyle.rowThird}>
          <div>
            <h2>Order </h2>
            <OrdersList />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    NOTIFICATION: data =>
      dispatch({
        type: "GET-NOTIFICATION-DATA",
        notificationResponse: data
      })
  };
};
export default connect(null, mapDispatchToProps)(Dashboard);
