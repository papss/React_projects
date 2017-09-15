import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CharSelect from './CharSelect';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CharSelect />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('info'));
registerServiceWorker();
