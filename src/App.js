// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clock from "./Components/Clocks/Clock";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import ExpenseList from "./Components/Expense/ExpenseList";
import ProgressBar from "./Components/Progress-Bar/ProgressBar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/clock" element={<Clock/>}></Route>
        <Route path="/expense" element={<ExpenseList/>}></Route>
        <Route path="/progress" element={<ProgressBar/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
