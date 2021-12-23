import React, { Fragment } from 'react';
import { FetchDataAction } from '../Actions/FetchDataAction';
import { store } from '../Store/Store';

const ShowFetch =  () => {
    // event.preventDefault()
    // try{

    //   await store.dispatch(FetchDataAction(fetchData));

    //   let Fetch = store.getState().getFetchData;
    //    console.log("saraaaa message =>",Fetch.data.msg);

        

    // }catch(ex){
    //   console.log(ex);
    // }
    const Fetch = store.getState().getFetchData;
    console.log("show fetch message => " , Fetch);

    return ( 
        <Fragment>

            {(
                <div>
                  <img src={Fetch.data.photo} />
                  <p>{Fetch.data.msg}</p>
                  <p>{Fetch.data.voice}</p>

                </div>
                  )}


        </Fragment>
     );
}
 
export default ShowFetch;