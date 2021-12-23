
import { isEmpty } from 'lodash';
import { Fragment } from 'react';
import {Routes,Route, Navigate } from 'react-router-dom';
import Show from '../ShowFetch/Show';
import ShowFetch from '../ShowFetch/ShowFetch';
import { store } from '../Store/Store';
import Yadine from '../Yadine/Yadine';




const AppRouts = () => {



    return ( 
        <Routes>
           <Route path="/fetchdata" element={<ShowFetch/>} />
           <Route path="/" element={<Yadine/>} />

           {/* {Fetch ? <Redirect } */}

            

          {/* <Route path="/" render={() => isEmpty(Fetch) ? <navigate to="/"/> : <ShowFetch/> } /> */}

            {/* <Route path="/" element={<Show/>} />     */}




         {/* <Route exact path="/" element={<><Yadine/><Show/></>}/> */}

            {/* <Route path='/' exact render={() =>
            <Fragment>
                 <Yadine />
                 <Show />
            </Fragment>
        } /> */}

        </Routes>


     );
}
 
export default AppRouts;