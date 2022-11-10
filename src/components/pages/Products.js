import React from "react";
import {Link , NavLink} from 'react-router-dom'

const Products = () => {
    return (
        <>
        <h1>Product Page</h1>
        <div><Link to='/product-details/1234'>Product1</Link></div>
        <div><Link to='/product-details/5678'>Product2</Link></div>
<br />
    <a href='/Products'>Products href</a>
    <br/>
    <Link to='/Products'>Products Link</Link>
    <br/>
    <NavLink to = '/Products'>products navlink</NavLink>
        </>
    )
    

}

export default Products;