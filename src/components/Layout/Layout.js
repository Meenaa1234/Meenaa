import React from "react";
import MainHeader from "../MainHeader";
import './Layout.css';
const Layout = (props) => {
    return (
        <>
            <MainHeader />
            <div className="layout">
                <div className="leftnav">Left nav</div>
                <div className="mainpanel">
                <main>{props.children}</main>
                </div>
            </div>
            <h2 className="footer">Footer</h2>
        </>
    );
}

export default Layout;