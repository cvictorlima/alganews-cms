import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserView from './app/views/User.view';
import NotFound from './app/views/NotFound404.view';
import Home from './app/views/Home.view';
import GlobalStyles from './core/GlobalStyles'
import EditorsListView from './app/views/EditorsList.view';
import PostCreateView from './app/views/PostCreate.view';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <div>React Router Experiment</div> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editores' element={<EditorsListView />} />
        <Route path='/posts/criar' element={<PostCreateView />} />
        <Route path= '/usuario' element={<UserView />} >
          <Route path=':userId' element={<UserView />}/>
        </Route>
        <Route path= '*' element= {<NotFound />}/>
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
