import React, { Component } from "react";
import OrderListStyle from "./OrdersList.module.css";
import getResponse from "../../Web Service/WebServices";
export class OrdersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrdersData: []
    };
  }

  componentDidMount() {
    getResponse()
      .then(response => {
        this.setState({
          OrdersData: [...response.dasbhoardPage.orders]
        });
      })
      .catch(Error => {
        console.log(Error);
        alert("Wait For Process", Error);
      });
  }

  render() {
    const tableBody = this.state.OrdersData.map(data => {
      return (
        <tr key={data.orderNo}>
          <td> #{data.orderNo}</td>
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
