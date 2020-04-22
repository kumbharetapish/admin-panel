import React, { Component } from "react";
import getResponse from "../../Web Service/WebServices";
import NotificationStyle from "./Notification.module.css";
import Cart from "../Cart/Cart";
export class NotificationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationData: [],
    };
  }

  componentDidMount() {
    getResponse()
      .then((response) => {
        this.setState({
          notificationData: [...response.dasbhoardPage.notifications],
        });
      })
      .catch((Error) => {
        console.log(Error);
      });
  }
  render() {
    const list = this.state.notificationData.map((res, id) => {
      const msgArr = res.message.split(" ");
      const getindex = res.message.search("updates");
      const getlink = [...res.message.substr(0, getindex + 7).split(" ")];
      const getlen = getlink.indexOf("updates");
      const link = getlink[getlen - 1] + " " + getlink[getlen];

      return (
        <Cart
          key={id}
          pic={res.pic}
          link={link}
          name={msgArr.slice(0, msgArr.indexOf("and")).join(" ")}
          other={msgArr
            .slice(msgArr.indexOf("and") + 1, msgArr.indexOf("others") + 1)
            .join(" ")}
          finish={msgArr.slice(msgArr.indexOf("updates.") + 1).join(" ")}
          o={msgArr
            .slice(msgArr.indexOf("others") + 1, msgArr.indexOf("updates.") - 1)
            .join(" ")}
          time={res.time}
        />
      );
    });
    return <div className={NotificationStyle.notificationWrapper}>{list}</div>;
  }
}

export default NotificationList;
