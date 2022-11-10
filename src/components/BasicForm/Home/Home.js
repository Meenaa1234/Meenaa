import React from "react";
import './Home.css';
import himage from '../../img/homeimg.jpg';
import fimg from '../../img/footerimg.jpg';

const Home = () => {
    return(
        <>
         
            <div className="hrow">
                <div className="hcol1">
                <div className="hleftnav1"><br/><br/>welcome to FilpCart<br/><br/><br/>
                Biggest Deals on the widest Range<br/><br/><br/>
                 Go and check the exiciting offers<br/>

                </div>
                </div>
                <div className="hcol2">
                {/* <div className="hmainpanel1"> */}
                    <img src={himage} className="imgh1"/>
                {/* </div> */}

                
                {/* <main>{props.children}</main> */}
                </div>
            </div>
        <div className="hfooter1">
        
            <img src={fimg} claassName="f" />
            </div>
        
        </>

    );
}
export default Home;