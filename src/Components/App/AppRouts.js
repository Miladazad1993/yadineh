
import {Routes,Route } from 'react-router-dom';
import ShowFetch from '../ShowFetch/ShowFetch';

const AppRouts = () => {

    return ( 
        <Routes>
           <Route path="/" element={<ShowFetch/>} />
        </Routes>
     );
}
 
export default AppRouts;

