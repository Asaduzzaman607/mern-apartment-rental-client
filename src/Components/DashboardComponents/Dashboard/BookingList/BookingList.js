import React from 'react';

const BookingList = () => {
    return (
        <div>
            <div className="">
                <div id="bookingList">
                    <div className="headings">
                        <ul className='d-flex justify-content-between'>
                            <li>Name</li>
                            <li>Email</li>
                            <li>Phone no</li>
                            <li>Message</li>
                            <li className='mr-5'>Status</li>
                        </ul>
                    </div>
                    <div className="pb-3">
                        <ul className='d-flex justify-content-between pr-2'>
                            <li>Name</li>
                            <li>Email</li>
                            <li>Phone no</li>
                            <li>Message</li>
                            <li>
                                <select class="custom-select" id="inputGroupSelect01">
                                    <option id="option-1" value="1">Pending</option>
                                    <option id="option-2" value="2">On Going</option>
                                    <option id="option-3" value="3">Done</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;