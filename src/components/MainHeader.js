import React from "react";
import {NavLink} from 'react-router-dom';
import './MainHeader.css';


const MainHeader = () => {
    return (
        <>
        <ul className="main_header">
            <li><NavLink activeClassName="active" to ='/Home'>Home</NavLink></li>
            <li><NavLink activeClassName="active" to='/Welcome'>Welcome</NavLink></li>
            <li><NavLink activeClassName="active" to='/Products'>Products</NavLink></li>
        </ul>
        {/* <ul className="main_header">
            <li><NavLink exact to ='/'>Mobiles</NavLink></li>
            <li><NavLink exact to='/'>Laptops</NavLink></li>
            <li><NavLink exact to='/'>Toys</NavLink></li>
        </ul> */}


        </>
    )
}

export default MainHeader;