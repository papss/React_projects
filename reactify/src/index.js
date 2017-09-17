import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SpotifyContainer from './SpotifyContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SpotifyContainer />, document.getElementById('root'));
registerServiceWorker();
