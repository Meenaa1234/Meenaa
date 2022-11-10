import React from "react";
import './More.css';
// import himage from '../../img/homeimg.jpg';
import mimg1 from '../../img/watch.jpg';
import mimg2 from '../../img/glasses.jpg';
import mimg3 from '../../img/book.jpg';
import fimg from '../../img/footerimg.jpg';


const More = () => {
    return(
        <>
         
            <div className="hrow">
                <div className="mcol1">
                <div className="mleftnav1"><br/><br/>welcome to FilpCart<br/><br/><br/>
                Biggest Deals on the widest Range<br/><br/><br/>
                 Go and check the exiciting offers<br/></div>
                </div>
                <div className="mcol2">
                <img src={mimg1} className="c1img1" />
                <img src={mimg2} className="c1img2" />
                <img src={mimg3} className="c1img3" />

                  </div>
            </div>
        
            <div className="mfooter1"><img src={fimg} className="f"/>
</div>
        
        </>

    );
}
export default More;