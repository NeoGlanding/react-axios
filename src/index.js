import React from 'react';
import ReactDOM from 'react-dom';
import ExampleComponent from './components/ExampleComponent'

ReactDOM.render(
  <React.StrictMode>
    <ExampleComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
