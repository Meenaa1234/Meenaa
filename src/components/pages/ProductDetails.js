import React from "react";
import {useParams} from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams ();
    //const queryParams = new URLSearchParams(window.location.search)
    // console.log(window.location.search);
    // console.log(params);
    let queryParams = window.location.search;

    queryParams = queryParams.slice(1);
    queryParams = queryParams.split('&');

    queryParams.forEach(param => {
        console.log(param)

    })

    // console.log(queryParams);
 return (
  <>
  <h1>Product Details Page</h1>
  <p>{params.ProductId}</p>
  
  {/* <p>{params.ProductName }</p> */}
  <p></p>
  </>
 );
}

export default ProductDetails;
