import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserView from './app/views/User.view';
import NotFound from './app/views/NotFound404.view';
import Home from './app/views/Home.view';
import Calc from './app/views/Calc.view';
import Navbar from './app/components/NavBar';
import GlobalStyles from './core/GlobalStyles'
import Article from './app/views/Article.view';
import Portfolio from './app/views/Portfolio.view';
import Storage from './app/views/Storage.view';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>React Router Experiment</div>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artigo' element={<Article />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/storage' element={<Storage />} />
        <Route path= '/usuario' element={<UserView />} >
          <Route path=':userId' element={<UserView />}/>
        </Route>
        <Route path= '*' element= {<NotFound />}/>
        <Route path= 'calc/:a/:b' element= {<Calc />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
