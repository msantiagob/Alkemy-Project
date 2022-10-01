import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generator from "../generator/Generator";
import BackDv from '../generator/ColorDiff';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Generator />}  />
        <Route path="/lauta" element={<BackDv/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
