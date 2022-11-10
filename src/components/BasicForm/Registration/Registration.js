import React from "react";
import {Link , useHistory }from 'react-router-dom';
import './Registration.css';
import NewRegistrationForm from '../../NewRegister/NewRegistrationForm';
import fimg from '../../img/footerimg.jpg';


const Regist =() =>{
    const history = useHistory();
    return(
        <>
        <div className="rrow">
        <div className="rcol1">
        <div className="rleftnav1"><br/><br/>welcome to FilpCart<br/><br/><br/>
                Biggest Deals on the widest Range<br/><br/><br/>
                 Go and check the exiciting offers<br/></div>
        </div>
        <div className="rcol2">
            <div className="style1">
        <h2 className="p1">Welcome to Registration Page</h2>
        <h3 className="p2">Go to registration Link</h3>
        </div>
        <div className="ul1">
            <ul>
                <li>
                    <button type="submit" onClick={()=> history.push('/NewRegistrationForm')}>Register Here</button>
                {/* <Link to='/NewRegistrationForm' className="regbtn">Register Here</Link> */}

                </li>
            </ul>
        </div>
        </div>
        <br/>
        </div>
        <div className="rfooter1"><img src={fimg} claassName="f" />
</div>
        </>

    );
}
export default Regist;