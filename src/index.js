import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>
), ...)  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);
