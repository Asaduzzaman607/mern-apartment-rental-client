import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";

const MyRent = () => {
  //   const [user, setUser] = useContext(UserContext);
  const [singleUserBooking, setSingleUserBooking] = useState([]);
  //   const { email } = user;

  console.log(singleUserBooking);

  useEffect(() => {
    fetch(`https://apartment-hunt-simple.herokuapp.com/getAllServices/`)
      .then((res) => res.json())
      .then((data) => setSingleUserBooking(data));
  }, []);

  return (
    <div>
      <div className="">
        <div className="myRent">
          <div className="headings">
            <ul className="d-flex justify-content-around">
              <li>House name</li>
              <li>Price</li>
              <li>Action</li>
            </ul>
          </div>
          <div className="ml-3 pb-3">
            {singleUserBooking.map((item) => (
              <ul className="d-flex justify-content-around">
                <li className="ml-2">{item.title}</li>
                <li className="ml-5">{item.price}</li>
                <li>
                  <button className="allButtons">View details</button>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRent;
