import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Axios from './Components/Axios';
import Poem from './Components/Poem';
import Recipe from "./Components/Recipe";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Axios />} />
      <Route path="/poem" element={<Poem/>} />
      <Route path="/recipe" element={<Recipe/>} />


      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
