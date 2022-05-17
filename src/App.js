import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './component/Login';
import Chart from './component/Chart';
function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chart" element={<Chart />} />
          </Routes>         
      </BrowserRouter>
    </>
  );
}

export default App;
