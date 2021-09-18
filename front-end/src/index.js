import React from 'react';
import {render} from 'react-dom';


import App from './App.js';

render(
    (<React.StrictMode>
        <App/>
    </React.StrictMode>)
, document.querySelector("#root"))