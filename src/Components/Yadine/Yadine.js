import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import getQrcode from "../../Services/getQrcodeFromUrl";
import HandleQrCode from "../HandleCode/HandleQrCode";

const Yadine = () =>{
  const url = "https://yaadine.ir/SkVurYmork";
  const qrCode =  getQrcode(url);


  useEffect(() =>{
    HandleQrCode(qrCode);
    
  },[])
 
    
  document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function(){
      document.getElementById('fetchData').click();
    },1500);


 });


  return (
    <Fragment>
          <Helmet>
            <title>
              Yaadine
            </title>
          </Helmet>
          <Link id="fetchData" to="/fetchdata" ></Link>
    </Fragment>
  );

}

export default Yadine;
