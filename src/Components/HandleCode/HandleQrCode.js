import { CheckStatusAction } from "../Actions/CheckStatusAction";
import CheckPassword from "../CheckPassword/CheckPassword";
import { store } from "../Store/Store";
import HandleFetchData from "./HandleFetchData";

const HandleQrCode = async (qrCode) =>{ 
  
    const qrCodeUser={
      qrCode
    } 
    await store.dispatch(CheckStatusAction(qrCodeUser));
    const checkData =await store.getState().checkStatus;
    await handleFetch();
    
        async function handleFetch() {
          try{
            if(checkData.data.status==1){
                if(checkData.data.hasPassword){
                   console.log('has pass =>' ,checkData.data.status);
                   return <CheckPassword />
                }else{
                 await HandleFetchData(qrCodeUser)
                }
            }if(checkData.data.status==0){
              alert("Your qr code is empty !")
            }
      
      
        }catch (error) {
            console.error(error);
          }
        }

    
        
    console.log("check data yadine =>",checkData.data.status);


  }

export default HandleQrCode;

  


