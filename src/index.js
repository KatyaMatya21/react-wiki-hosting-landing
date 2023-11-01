import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

import './scss/normalize.css';
import './scss/main.scss';

const app =  ReactDOMClient.createRoot(document.getElementById("app"));

app.render(<App />);
