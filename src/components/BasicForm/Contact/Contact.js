import React from "react";
import './Contact.css';
import fimg from '../../img/footerimg.jpg';
import lastimg from '../../img/lastfooter.jpg';



const Contact = (props) => {
    return (
        <>
            <div className="crow">
                <div className="ccol1">
                    <div className="cleftnav1"><br/><br/>welcome to FilpCart<br/><br/><br/>
                Biggest Deals on the widest Range<br/><br/><br/>
                 Go and check the exiciting offers<br/></div>
                    </div>
                <div className="ccol2">
                <img src={lastimg} className="limg"/>
                    {/* <main>{props.children}</main> */}
                </div>
            </div>
            <div className="cfooter1"><img src={fimg} className="imgh2"/></div>
        </>
    );
}
export default Contact;