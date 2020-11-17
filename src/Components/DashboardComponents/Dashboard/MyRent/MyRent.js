import React from 'react';

const MyRent = () => {
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
                        <ul className="d-flex justify-content-around">
                            <li className='ml-2'>House name</li>
                            <li className='ml-5'>Price</li>
                            <li><button className="allButtons">View details</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRent;