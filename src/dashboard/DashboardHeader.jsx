import React from "react";
import "./DashboardHeader.css";

class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a className="active">Business Overview</a>
        </li>
        <li>
          <a>Schedule</a>
        </li>
        <li>
          <a>Reports</a>
        </li>
      </ul>
    );
  }
}

export default DashboardHeader;
