import React from 'react';
import ReactDOM from 'react-dom';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditorProfile from './app/views/EditorProfile.view';
import NotFound from './app/views/NotFound404.view';
import Home from './app/views/Home.view';
import GlobalStyles from './core/GlobalStyles'
import EditorsListView from './app/views/EditorsList.view';
import PostCreateView from './app/views/PostCreate.view';

async function getDataFromAPI() {
  try{
    const response = await fetch ('http://localhost:8080/posts', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Olá, mundo',
        body: 'Lorem Ipsum dolor sit amet'
      })
    })
    console.log('Response:', response)
    if (response.status >= 400) { //Define which response code you consider as error, instead of relying on what the fetch API considers as error
      throw new Error(await response.json())
    }
    const posts = await response.json()
    console.log('Sucesso')
    console.log(posts)
  } catch (error) {
    console.log('Houve erro')
    console.log(error.message)
  }
}


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <div>React Router Experiment</div> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editores' element={<EditorsListView />} />
        <Route path='/posts/criar' element={<PostCreateView />} />
        <Route path= '/editores' element={<EditorProfile />} >
          <Route path=':userId' element={<EditorProfile />}/>
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
