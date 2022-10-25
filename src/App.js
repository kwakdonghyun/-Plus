import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from './components/about';
import Home from './components/home';
import Main from './components/Main';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <h1>App</h1> */}
      <BrowserRouter>
        {/* <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul> */}
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/home" element={<Home />}></Route>
          {/* <Route path="/home" element={<Home />}></Route> */}
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;