import React from "react";
import {NavLink} from 'react-router-dom';
import image1 from '../../img/logo.jpg';
import './NavBar1.css';


const NavBar1 = () => {
    return (
        <>
        <div className="row1">
            <div className="col1">
                <img src={image1} />
            </div>
            <div className="col2">
        <ul className="nav1">
            <li className="nav2"><NavLink activeClassName="active" to ='/Home'>Home</NavLink></li>
            <li className="nav2"><NavLink activeClassName="active" to='/Product'>Product</NavLink></li>
            <li className="nav2"><NavLink activeClassName="active" to='/More'>Top Offers</NavLink></li>
            <li className="nav2"><NavLink activeClassName="active" to='/Registration'>Registration</NavLink></li>
            <li className="nav2"><NavLink activeClassName="active" to='/Contact'>Contact</NavLink></li>
        </ul>
        </div>
        </div>
        </>
    );
}
export default NavBar1;