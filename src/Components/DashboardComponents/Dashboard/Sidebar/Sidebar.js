import React from 'react';
import plus from '../../../../images/logos/plus 1.png';
import home from '../../../../images/logos/Group 33351.png';

const Sidebar = ({book, add, myRent}) => {
    return (
        <div className='mt-5 align-left dashboardNames'>
            <div onClick={book} className="bookingList d-flex">
                <img src={plus} alt=""/>
                <h6 className='ml-3'>Booking List</h6>
            </div>
            <div onClick={add} className="bookingList d-flex">
                <img src={plus} alt=""/>
                <h6 className='ml-3'>Add Rent House</h6>
            </div>
            <div onClick={myRent} className="bookingList d-flex">
                <img src={home} alt=""/>
                <h6 className='ml-3 mt-1'>My Rent</h6>
            </div>
        </div>
    );
};

export default Sidebar;