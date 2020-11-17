import React from 'react';
import facebook from '../../../images/logos/Vector.png';
import instagram from '../../../images/logos/Vector-1.png';
import linkedin from '../../../images/logos/Vector-2.png';
import youtube from '../../../images/logos/Vector-3.png';
import location from '../../../images/logos/map-marker-alt-solid 1.png';

const Footer = () => {
    return (
        <div id="footer">
            <div className=" p-5 mt-5">
            <div className="row">
                <div className="col-md-4 d-flex">
                    <img id="location" src={location} alt=""/>
                    <div>
                    <p>H#340 (4th floor), Road #24, <br></br> new DOHS, Mohakhali, Dhaka, Bangladesh. <br/> Phone: 019XXXXXXXXXX <br/> E-mail: info@company.com</p>
                    </div>
                    </div>
                <div className="col-md-2">
                    
                    <ul>
                        <h4>Company</h4>
                        <li>About</li>
                        <li>Site Map</li>
                        <li>Service Center</li>
                        <li>Terms Conditions</li>
                        <li>Submit Listing</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    
                    <ul>
                        <h4>Quick Links</h4>
                        <li>Quick Links</li>
                        <li>Rentals</li>
                        <li>Sales</li>
                        <li>Contact</li>
                        <li>Terms Conditions</li>
                        <li>Our Blogs</li>
                    </ul>
                </div>
                <div className="col-md-4 pl-5">
                    <h4>About Us</h4>
                    <p>We are the top real estate <br/> agency in sydney. with agents <br></br> available to answer any <br/> question 24/7.</p>
                    <img src={facebook} alt=""/>
                    <img src={instagram} alt=""/>
                    <img src={linkedin} alt=""/>
                    <img src={youtube} alt=""/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;