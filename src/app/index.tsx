import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import info from "../core/utils/infor";
import EditorProfile from "./features/EditorProfile";
import EditorsListView from "./views/EditorsList.view";
import Home from "./views/Home.view";
import NotFound from "./views/NotFound404.view";
import PostCreateView from "./views/PostCreate.view";
import PostEditView from "./views/PostEdit.view";

export default function App () {
  useEffect(()=> {
    window.onunhandledrejection = (error: PromiseRejectionEvent) => {
      info({
        title: error.reason.response.data.title || 'Erro',
        description: error.reason.response.data.detail || error.reason.message
      })
    }
  },[])
  return     <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/editores' element={<EditorsListView />} />
    <Route path='/posts/criar' element={<PostCreateView />} />
    <Route path='/posts/editar/:id' element={<PostEditView />} />
    <Route path= '/editores' element={<EditorProfile />} >
      <Route path=':id' element={<EditorProfile />}/>
    </Route>
    <Route path= '*' element= {<NotFound />}/>
  </Routes>
</BrowserRouter>
}