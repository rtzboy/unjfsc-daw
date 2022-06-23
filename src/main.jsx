// ----- REACT 18 -----
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

import ReactDOM from 'react-dom/client';
import './index.css';

const app = <h1>jhosephPoma</h1>;

const a = 2;
if (a === 2) {
	console.log('ga');
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(app);
