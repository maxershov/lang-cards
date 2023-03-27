import React from 'preact/compat';
import './App.css';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('preact/debug');
}

const App = () => <div>Hola Mundo</div>;

export default App;
