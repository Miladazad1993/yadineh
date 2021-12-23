import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import getQrcode from "../../Services/getQrcodeFromUrl";
import HandleFetchData from "../HandleCode/HandleFetchData";
import HandleQrCode from "../HandleCode/HandleQrCode";
import Show from "../ShowFetch/Show";
import ShowFetch from "../ShowFetch/ShowFetch";
import { store } from "../Store/Store";

const Yadine = () =>{
  const url = "https://yaadine.ir/SkVurYmork"// window.location.href
  const qrCode =  getQrcode(url);


  useEffect(() =>{
    HandleQrCode(qrCode);
    
  },[])
  // var Fetch = store.getState().getFetchData;
  // console.log("show fetch Yaadine => " , Fetch.data.msg);
  
  // HandleFetchData()
  // Show();

    
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
          

          {/* {HandleQrCode()} */}
          {/* <HandleFetchData /> */}
          {/* <ShowFetch /> */}
          {/* <Show /> */}
          {/* {Show()} */}




             {/* {(
                <div>
                  <img src={Fetch.data.photo} />
                  <p>{Fetch.data.msg}</p>
                  <p>{Fetch.data.voice}</p>

                </div>
                  )} */}
    </Fragment>
  );

}

export default Yadine;
