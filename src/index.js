import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './Components/App/App';
import { store } from './Components/Store/Store';

render(<Provider store = {store}><App/></Provider> ,document.getElementById("root"));




