/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
ReactDOM.render(<App></App>, document.getElementById('root')); */

import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App></App>)
