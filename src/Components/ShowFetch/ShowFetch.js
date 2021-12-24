import React, { Fragment } from 'react';
import { store } from '../Store/Store';

import ReactAudioPlayer from 'react-audio-player';

const ShowFetch =  () => {
 
    const Fetch = store.getState().getFetchData;
    console.log("show fetch message => " , Fetch);

    return ( 
        <Fragment>

            {(
                <div className='show-fetch-container'>
                  <img className='show-fetch-photo' src={Fetch.data.photo} />
                  <p className='show-fetch-msg' >{Fetch.data.msg}</p>

                  <ReactAudioPlayer
                    src={Fetch.data.voice}
                    autoPlay
                    controls
                  />
                </div>
                  )}


        </Fragment>
     );
}
 
export default ShowFetch;