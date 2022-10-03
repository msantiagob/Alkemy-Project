import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lauta from "../Animations/Examples";
import Generator from "../generator/Generator";
import "./style.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Generator />} />
        <Route path='lauta' element={<Lauta/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
