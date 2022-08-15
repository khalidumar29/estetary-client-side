import "./App.css";
import Navbar from "./Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UpComingPage from "./Pages/UpComingPage";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div className='bg-base-200'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<UpComingPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
