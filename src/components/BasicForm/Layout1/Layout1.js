import React from "react";
import NavBar1 from "../NavBar/NavBar1";
// import 'Layout1.css';

const Layout1 = (props) => {
    return (
        <>
        <NavBar1 />
        <div className="layout1">
                <div className="leftnav1">Left nav</div>
                <div className="mainpanel1">
                <main>{props.children}</main>
                </div>
            </div>
            <h2 className="footer1">Footer</h2>

        </>

    );
}
export default Layout1;