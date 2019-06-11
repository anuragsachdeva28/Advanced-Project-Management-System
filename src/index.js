import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './components/SignIn/SignIn';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignIn />, document.getElementById('root'));
registerServiceWorker();
