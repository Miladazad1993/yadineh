import React, { Fragment } from 'react';

const Show =  (Fetch) => {
     console.log("show message => " , Fetch.data.msg);
 
    return ( 
        <Fragment>
          <h1>milad</h1>
           
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
 
export default Show;