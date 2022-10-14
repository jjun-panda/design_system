import React from 'react';
import ReactDOM from 'react-dom/client';

// common
import './components/common/css/colors.css';
import './components/common/css/common.css';
import './components/common/css/fonts.css';
import './components/common/css/reset.css';

// main home
import App from './pages/home/home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
