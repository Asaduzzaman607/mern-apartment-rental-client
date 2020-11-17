import React from "react";
import "./ServiceAndFooter.scss";
import icon1 from "../../../images/logos/apartment 1.png";
import icon2 from "../../../images/logos/affordable 1.png";
import icon3 from "../../../images/logos/lessee 1.png";

const Service = () => {
  return (
    <div className="text-center container" id="service">
      <h5 className="mt-5">Service</h5>
      <h1 id="serviceHeading">
        We're agency tailored to all <br /> clients' needs that always delivers
      </h1>
      <div className="row align-items-center mt-5">
        <div className="serviceBox col-6 col-md-4 mt-3">
          <img src={icon1}></img>
          <h4 className="mt-3 subHeading">Wide range of properties</h4>
          <p className="text-muted">
            With a robust selection of popular properties on hand, as well as
            leading properties from experts.
          </p>
        </div>
        <div className="serviceBox col-6 col-md-4">
          <img src={icon2}></img>
          <h4 className="mt-3 subHeading">Financing Made easy</h4>
          <p className="text-muted">
            Our stress-free finance department that can find financial to save
            your money.
          </p>
        </div>
        <div className="serviceBox col-6 col-md-4">
          <img src={icon3}></img>
          <h4 className="mt-3 subHeading">Trusted by thousands</h4>
          <p className="text-muted">
            10 new offers every day. 350 offers on site, trusted by a community
            of thousands of users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
