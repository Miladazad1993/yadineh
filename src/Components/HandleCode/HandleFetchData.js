import { FetchDataAction } from "../Actions/FetchDataAction";
import ShowFetch from "../ShowFetch/ShowFetch";
import { store } from "../Store/Store";

const HandleFetchData = async (fetchData) =>{
    
      try{
        await store.dispatch(FetchDataAction(fetchData));

        const Fetch = store.getState().getFetchData;
        console.log("handle fetch message =>",Fetch.data.msg);
        ShowFetch()
       
      }catch(ex){
        console.log(ex);  
      }
  
    
    };

    export default HandleFetchData;


    