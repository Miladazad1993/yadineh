import React, { Fragment, useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import getQrcode from "../../Services/getQrcodeFromUrl";
import HandleQrCode from "../HandleCode/HandleQrCode";
import { store } from "../Store/Store";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

import Loading from '../Common/Lodaing';
import CheckPassword from "../CheckPassword/CheckPassword";

const ShowFetch = () => {

  const [Fetch, setFetch] = useState("");
  const [pass, setPass] = useState("");
  
  useEffect(() => {

    const sendRequest = async () => {
      // SkVurYmork   KjPSq8LveT  vVdi4xn67m // => qrCode test
      const url = "https://yaadine.ir/KjPSq8LveT";
      const qrCode = getQrcode(url);
      await HandleQrCode(qrCode);
      const getPass = store.getState().checkStatus.data;
      setPass(getPass);
      const getFetch = store.getState().getFetchData.data;
      setFetch(getFetch);
    }

    sendRequest()
  }, [])

  console.log('fetch.data ==>>', Fetch);

  if (pass.hasPassword) {
    return <CheckPassword />
  } else {
    if (!Fetch) {
      return <Loading />;
    } else {
      return (
        <Fragment>

          {(
            <div className='show-fetch-container'>
              <h2 className='show-fetch-header'>یادینه</h2>

              <LazyLoadImage className='show-fetch-photo'
                src={Fetch.photo}
                effect="blur"
              />

              <p className='show-fetch-msg' >{Fetch.msg}</p>

              <ReactAudioPlayer className='show-fetch-voice'
                src={Fetch.voice}
                controls
              />
            </div>
          )}

        </Fragment>
      )
    }
  }
}

export default ShowFetch;








































































