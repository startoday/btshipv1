import React from 'react';
import ReactDOM from 'react-dom';
import allReducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Prep from './preparation/Prep';
import Play from './play/Play';
import Rule from './rule/Rule';
import App from './App';
import CustNav from './CustNav';
import Result from './result/Result';

const store = createStore(allReducers);
ReactDOM.render(

  <Provider store={store}>

    <Router >
      <CustNav />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/preparation" element={<Prep />} />
        <Route exact path="/result" element={<Result />} />
        <Route exact path="/rule" element={<Rule />} />
        <Route exact path="/play" element={<Play />} />
      </Routes>
    </Router>
  </Provider>,


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
