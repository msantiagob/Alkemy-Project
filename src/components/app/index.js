import "./style.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Generator from "../generator/Generator";
import { Home } from "../Home/Home";
import { Login } from "../auth/Login/Login";
import { LogOut } from "../auth/LogOut/LogOut";
import { Register } from "../auth/Register/Register";
import Model from "../Animations/Examples";
import { ColorProvider } from "../../context/ColorContext";
import { Header } from "../header/Header";

function App() {
  const RequireAuth = ({ children }) => {
    if (!localStorage.getItem("logged")) {
      return <Navigate to="/login" replace={true} />;
    }
    return children;
  };
  return (
    <ColorProvider>
      <BrowserRouter>
        <Header />
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
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/log-out" element={<LogOut />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ColorProvider>
  );
}

export default App;
