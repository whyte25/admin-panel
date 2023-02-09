import React from "react";
import "./WidgetLg.css";

export const WidgetLg = () => {
  const Button = ({ type }) => (
    <button className={"widgetLgButton " + type}>{type}</button>
  );

  return (
    <div className="widgetLg">
      <div className="widgetLgTitle">Latest transactions</div>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/14267227/pexels-photo-14267227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan</span>
          </td>
          <td className="widgetLgDate">16 Nov 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/14267227/pexels-photo-14267227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan</span>
          </td>
          <td className="widgetLgDate">16 Nov 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/14267227/pexels-photo-14267227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan</span>
          </td>
          <td className="widgetLgDate">16 Nov 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/14267227/pexels-photo-14267227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan</span>
          </td>
          <td className="widgetLgDate">16 Nov 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};
