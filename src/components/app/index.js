import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lauta from "../animations/Examples";
import Generator from "../generator/Generator";
import { Home } from "../Home/Home";
import { Login } from "../auth/Login/Login"
import { Register } from "../auth/Register/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Generator />} />
        <Route path='lauta' element={<Lauta/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
