import React from 'react';
import ReactDOM from 'react-dom';

//http://localhost:4242/

import App from './components/App';

ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);