import React, {useEffect}from "react";
import {Link , NavLink, useHistory} from 'react-router-dom';
const Home = (props) => {
    const history = useHistory();
    
        useEffect(() => {
            // console.log(props)
            // history.push('/Welcome')
         },[]);
        return (
        <>
    <div>Home Page</div>
    <a href='/Products'>Products href</a>
    <br/>
    <Link to='/Products'>Products Link</Link>
    <br/>
    <NavLink to = '/Products'>products navlink</NavLink>
    </>
    );
}
 export default Home;
 