import { Fragment, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { FetchDataAction } from "../Actions/FetchDataAction";
import Show from "../ShowFetch/Show";
import ShowFetch from "../ShowFetch/ShowFetch";
import { store } from "../Store/Store";

const HandleFetchData = async (fetchData) =>{
    
    // console.log("fetchData => " , fetchData);
      try{

        await store.dispatch(FetchDataAction(fetchData));

        const Fetch = store.getState().getFetchData;
         console.log("handle fetch message =>",Fetch.data.msg);
         Show(Fetch)

        // await <show />;
        //   return(<Show/>)

      }catch(ex){
        console.log(ex);
      }
  

      return(
        <Fragment>
            {/* <BrowserRouter>
              <Routes>
                <Route path="/" />
              </Routes>
            </BrowserRouter> */}

            {/* <Show /> */}

        {/* {(
            <div>
              <p>{Fetch.data.msg}</p>
              <img src={Fetch.data.photo} />
              <p>{Fetch.data.voice}</p>

            </div>
              )} */}


    </Fragment>                     
      )
    
    };

    export default HandleFetchData;


    