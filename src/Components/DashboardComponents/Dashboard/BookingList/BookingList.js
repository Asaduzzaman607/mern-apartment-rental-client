import React, { useEffect, useState } from "react";

const BookingList = () => {
  const [bookingLists, setBookingLists] = useState([]);
  console.log(bookingLists);

  useEffect(() => {
    fetch(`https://apartment-hunt-simple.herokuapp.com/getBookingList`)
      .then((res) => res.json())
      .then((data) => setBookingLists(data));
  }, []);

  return (
    <div>
      <div className="">
        <div id="bookingList">
          <div className="headings">
            <ul className="d-flex justify-content-between">
              <li>Name</li>
              <li>Email</li>
              <li>Phone no</li>
              <li>Message</li>
              <li className="mr-5">Status</li>
            </ul>
          </div>
          <div className="pb-3">
            {bookingLists.map((booking) => (
              <ul className="d-flex justify-content-between pr-2">
                <li>{booking.fullName}</li>
                <li>{booking.email}</li>
                <li>{booking.phone}</li>
                <li>{booking.message}</li>

                <li>
                  <select class="custom-select" id="inputGroupSelect01">
                    <option id="option-1" value="1">
                      Pending
                    </option>
                    <option id="option-2" value="2">
                      On Going
                    </option>
                    <option id="option-3" value="3">
                      Done
                    </option>
                  </select>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
