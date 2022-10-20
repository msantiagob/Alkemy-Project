import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generator from "../generator/Generator";
import { Home } from "../Home/Home";
import { Login } from "../auth/Login/Login"
import { Register } from "../auth/Register/Register"
import Lauta from "../Animations/Examples";
import { ColorProvider } from "../../context/ColorContext";

function App() {
  return (
    <ColorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Generator />} />
          <Route path='lauta' element={<Lauta/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ColorProvider>
  );
}

export default App;
