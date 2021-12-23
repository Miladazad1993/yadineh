import { Fragment } from "react";
import getQrcode from "../../Services/getQrcodeFromUrl";
import { CheckStatusAction } from "../Actions/CheckStatusAction";
import Show from "../ShowFetch/Show";
import ShowFetch from "../ShowFetch/ShowFetch";
import { store } from "../Store/Store";
import HandleFetchData from "./HandleFetchData";

const HandleQrCode = async (qrCode) =>{ 
    const qrCodeUser={
      qrCode
    } 
    await store.dispatch(CheckStatusAction(qrCodeUser));

    const checkData = store.getState().checkStatus;
    console.log("check data yadine =>",checkData.data.status);
    //  console.log("qrCodeuser yaadine => " , qrCodeUser);


      try{


      if(checkData.data.status==1){
          if(checkData.data.hasPassword){
             const pass = prompt("Enter password")
             if (pass != null) {
              HandleFetchData(qrCodeUser, pass)
             }
          }else{
            HandleFetchData(qrCodeUser)
          }
      }if(checkData.data.status==0){
        alert("Your qr code is not valid!")
      }


  }catch(ex){
    console.log(ex);
  }


  return(
    <Fragment>

    {(
      <div>
        <p>{checkData.data.status}</p>
        <h1>{checkData.data.status}</h1>
      </div>
        )}  

</Fragment>
)
    
  }

  export default HandleQrCode;

  


