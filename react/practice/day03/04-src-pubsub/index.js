/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App></App>, document.getElementById('root')); */

import { createRoot } from 'react-dom/client';
import App from './App';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App></App>)