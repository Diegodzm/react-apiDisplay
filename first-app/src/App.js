import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from "./views/home";
import injectContext from './store/context';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home/>}></Route>
    </Routes>
   </BrowserRouter>


  );
}

export default injectContext(App);