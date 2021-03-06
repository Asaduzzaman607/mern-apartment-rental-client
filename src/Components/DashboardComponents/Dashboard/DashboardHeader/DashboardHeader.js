import React, { useContext } from "react";
import { UserContext } from "../../../../App";
import logo from "../../../../images/logos/Logo.png";
import "../Dashboard.scss";

const DashboardHeader = ({ header }) => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div id="dashboard">
      <div className="row">
        <div className="col-md-2">
          <img id="dashboardLogo" src={logo} alt="" />
        </div>
        <div className="col-md-10 d-flex justify-content-between mt-5">
          <h5 className="ml-5">{header}</h5>
          <h6 className="mr-5">{user.name}</h6>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
