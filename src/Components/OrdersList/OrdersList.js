import React, { Component } from "react";
import OrderListStyle from "./OrdersList.module.css";
import getResponse from "../../Web Service/WebServices";
export class OrdersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrdersData: [],
    };
  }

  componentDidMount() {
    getResponse()
      .then((response) => {
        this.setState({
          offlineMode: false,
          OrdersData: [...response.dasbhoardPage.orders],
        });
        localStorage.setItem(
          "ordersList",
          JSON.stringify(response.dasbhoardPage.orders)
        );
      })
      .catch((error) => {
        console.log(error);
        const ordersList = JSON.parse(localStorage.getItem("ordersList"));
        this.setState({
          offlineMode: true,
          OrdersData: ordersList,
        });
      });
  }

  render() {
    const tableBody = this.state.OrdersData.map((data) => {
      return (
        <tr key={data.orderNo}>
          <td>{`#${data.orderNo}`}</td>
          <td>{data.status}</td>
          <td>{data.operators}</td>
          <td>{data.location}</td>
          <td>{data.deliveryDate}</td>
          <td>{data.distance}</td>
        </tr>
      );
    });

    return (
      <table className={OrderListStyle.tableScroll}>
        {this.state.offlineMode ? (
          <div className={OrderListStyle.offlineMessage}>
            Connection has been lost...!
          </div>
        ) : null}
        <thead>
          <tr>
            <th>ORDER NO.</th>
            <th>STATUS</th>
            <th>OPERATORS</th>
            <th>LOCATION</th>
            <th>DISTANCE </th>
            <th>START DATE</th>
          </tr>
        </thead>
        <tbody className={OrderListStyle.bodyHalfScreen}>{tableBody}</tbody>
      </table>
    );
  }
}

export default OrdersList;
