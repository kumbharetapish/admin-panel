import React, { Component } from "react";
import DashboardStyle from "./Dashboard.module.css";
import NotificationList from "../../Components/NotificationList/NotificationList";
import OrdersList from "../../Components/OrdersList/OrdersList";
import Performance from "../../Components/Performance/Performance";
import Storage from "../../Components/Storage/Store";
import { connect } from "react-redux";
import LatestHits from "../../Components/LatestHits/LatestHits";

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
            Welcome back, <h2>{this.props.userName}</h2>
          </p>
        </div>
        <div className={DashboardStyle.rowFirst}>
          <div>
            <h2>Latest Hits </h2>
            <LatestHits />
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

const mapStateToProps = state => {
  return { userName: state.userName, loginStatus: state.status };
};
export default connect(mapStateToProps)(Dashboard);
