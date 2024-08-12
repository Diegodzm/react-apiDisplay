import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from "./views/home";
import injectContext from './store/context';
import NavReact from './components/navbar';
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
    <NavReact></NavReact>
    <Routes>
      <Route path='/'  element={<Home/>}></Route>
      <Route path='/login'  element={<Login/>}></Route>
    </Routes>
   </BrowserRouter>


  );
}

export default injectContext(App);