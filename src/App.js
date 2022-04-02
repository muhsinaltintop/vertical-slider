import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Mainpage from "./components/Mainpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
