import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from "./views/home";
import injectContext from './store/context';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/'  element={<Home/>}></Route>
    </Routes>
   </BrowserRouter>


  );
}

export default injectContext(App);