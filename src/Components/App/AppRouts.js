
import {Routes,Route } from 'react-router-dom';
import ShowFetch from '../ShowFetch/ShowFetch';
import Yadine from '../Yadine/Yadine';

const AppRouts = () => {

    return ( 
        <Routes>
           <Route path="/fetchdata" element={<ShowFetch/>} />
           <Route path="/" element={<Yadine/>} />
        </Routes>
     );
}
 
export default AppRouts;