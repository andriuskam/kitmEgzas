import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import { Main } from "./components/Main";
import { GlobalProvider } from "./context/GlobalState";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  return (
    // Leidžia „Redux“ naudotis bet kokiais įdėtais komponentais
    <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="main" element={<Main />}></Route>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
