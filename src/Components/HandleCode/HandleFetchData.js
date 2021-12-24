import { FetchDataAction } from "../Actions/FetchDataAction";
import Show from "../ShowFetch/Show";
import { store } from "../Store/Store";

const HandleFetchData = async (fetchData) =>{
    
      try{

        await store.dispatch(FetchDataAction(fetchData));

        const Fetch = store.getState().getFetchData;
         console.log("handle fetch message =>",Fetch.data.msg);
         Show(Fetch)

       
      }catch(ex){
        console.log(ex);
      }
  
    
    };

    export default HandleFetchData;


    