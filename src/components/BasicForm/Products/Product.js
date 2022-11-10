import React from "react";
import './Product.css';
import c1img1 from '../../img/laptop.jpg';
import c1img2 from '../../img/tv.jpg';
import c1img3 from '../../img/projector.jpg';
import c2img1 from '../../img/cycle.jpg';
import c2img2 from '../../img/gitur.jpg';
import c2img3 from '../../img/light.jpg';
import fimg from '../../img/footerimg.jpg';



const Product =() =>{
    return(
        <>
        
        <div className="prow">
            <div className="pcol1">
                <div className="pleftnav1"><br/><br/>welcome to FilpCart<br/><br/><br/>
                Biggest Deals on the widest Range<br/><br/><br/>
                 Go and check the exiciting offers<br/></div>
                </div>
                <div className="pcol2">
                    <div className="prow1">
                     <div className="pclon1-lg-4">
                        <img src={c1img1} className="c1i1" />
                        <img src ={c1img2} className="c1i2" />
                        <img src={c1img3} className="c1i3"/>
                     </div>
                    </div>
                     <div className="prow2">
                     <div className="pclon2-lg-4">
                     <img src={c2img1} className="c2i1" />
                     <img src={c2img2} className="c2i2" />
                     <img src={c2img3} className="c2i3" />

                     </div>
                    </div>
                </div>
            </div>
            <div className="pfooter1"> <img src={fimg} claassName="f" />
</div>
        
        </>

    );
}
export default Product;