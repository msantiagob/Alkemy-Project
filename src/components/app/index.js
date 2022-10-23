import "./style.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Generator from "../generator/Generator";
import { Home } from "../Home/Home";
import { Login } from "../auth/Login/Login"
import { Register } from "../auth/Register/Register"
import Lauta from "../Animations/Examples";
import { ColorProvider } from "../../context/ColorContext";
import { Header} from "../header/Header"

function App() {


  const RequireAuth = ({children}) =>{
    if (!localStorage.getItem('logged')){
        return <Navigate to='/login' replace={true} />
    }
    return children
}  
  return (
    <ColorProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <RequireAuth>
              <Generator />
            </RequireAuth>
            }/>
          <Route path='lauta' element={
            <RequireAuth>
              <Lauta/>
            </RequireAuth>
          }/>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ColorProvider>
  );
}

export default App;
