import "./App.css";
import Navbar from "./Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UpComingPage from "./Pages/UpComingPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<UpComingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
