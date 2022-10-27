import "./style.css";
import {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Generator from "../generator/Generator";
import { Login } from "../auth/Login/Login";
import { LogOut } from "../auth/LogOut/LogOut";
import { Register } from "../auth/Register/Register";
import Model from "../Animations/Examples";
import { ColorProvider } from "../../context/ColorContext";
import { Header } from "../header/Header";

function App() {

  const [isLogged, setIsLogged] = useState(false);

  const RequireAuth = ({ children }) => {
    if (!localStorage.getItem("logged")) {
      return <Navigate to="/login" replace={true} />;
    }
    return children;
  };

  return (
    <ColorProvider>
      <BrowserRouter>
        {isLogged === true ? <Header/> : null}
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Generator />
              </RequireAuth>
            }
          />
          <Route
            path="card-animada"
            element={
              <RequireAuth>
                <Model />
              </RequireAuth>
            }
          />
        
          <Route path="/login" element={<Login setIsLogged={setIsLogged}/>} />
          <Route path="/log-out" element={<LogOut setIsLogged={setIsLogged} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ColorProvider>
  );
}

export default App;
