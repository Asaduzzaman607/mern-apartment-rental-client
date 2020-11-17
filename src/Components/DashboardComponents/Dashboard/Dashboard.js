import React, { useState } from 'react';
import AddRentHouse from './AddRentHouse/AddRentHouse';
import Sidebar from './Sidebar/Sidebar';
import BookingList from './BookingList/BookingList';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import MyRent from './MyRent/MyRent';

const Dashboard = () => {

    const [dashboard, setDashboard] = useState('Booking List');

    const bookingList = () => {
        setDashboard('Booking List');
    }
    const addRentHouse = () => {
        setDashboard('Add Rent House');
    }
    const myRent = () => {
        setDashboard('My Rent');
    }

    return (
        <div>
            <DashboardHeader header={dashboard}></DashboardHeader>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar book={bookingList} add={addRentHouse} myRent={myRent}></Sidebar>
                </div>
                <div id="mainDashboard" className="col-md-10">
                    {dashboard === 'Add Rent House' && <AddRentHouse></AddRentHouse>}
                    {dashboard === 'Booking List' && <BookingList></BookingList>}
                    {dashboard === 'My Rent' && <MyRent></MyRent>}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;