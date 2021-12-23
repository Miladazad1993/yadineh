// import React from 'react';
// import Yadine from '../Yadine/Yadine';
// const App = () => {
//     return ( 
//         <Yadine />
//      );
// }
 
// export default App;





import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouts from './AppRouts';

const App = () => {
    return ( 
        <BrowserRouter>
                 <AppRouts/>
        </BrowserRouter>
     );
}
 
export default App;