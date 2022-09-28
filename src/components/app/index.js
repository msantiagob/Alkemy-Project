import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generator from "../generator/Generator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Generator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
