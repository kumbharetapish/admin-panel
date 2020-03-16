import React, { Component } from "react";
import DashboardStyle from "./Dashboard.module.css";
import NotificationList from "../../Components/NotificationList/NotificationList";
import { connect } from "react-redux";
import OrdersList from "../../Components/OrdersList/OrdersList";
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
      <div className={DashboardStyle.gridContainer}>
        <div className={DashboardStyle.item6}>
          <h2>Latest Hits </h2>
        </div>
        <div className={DashboardStyle.item1}>
          {" "}
          <h2>Latest Hits </h2>
          <LatestHits />
        </div>
        <div className={DashboardStyle.item2}>
          {" "}
          <h2>Performance </h2>
        </div>
        <div className={DashboardStyle.item3}>
          {" "}
          <h2>Storage Information </h2>
        </div>
        <div className={DashboardStyle.item4}>
          <h2>Notification List </h2>
          <NotificationList />
        </div>
        <div className={DashboardStyle.item5}>
          <h2>Order </h2>
          <OrdersList />
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
