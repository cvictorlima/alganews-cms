import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserView from './views/User.view';
import NotFound from './views/NotFound404.view';
import Home from './views/Home.view';
import Calc from './views/Calc.view';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>React Router Experiment</div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path= '/usuario/:userId/' element={<UserView />} >
          <Route path=':key' element={<UserView />}/>
        </Route>
        <Route path= '*' element= {<NotFound />}/>
        <Route path= 'calc/:a/:b' element= {<Calc />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
