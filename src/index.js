import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/responsive.css';
// import App from './App';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
//import redux
import {reduxStore, persistor} from './redux';
//import language
import InitProvider from './hoc/InitProviderWrapper';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <InitProvider>
        <App persistor={persistor}/>
      </InitProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
