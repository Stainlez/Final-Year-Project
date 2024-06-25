
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import './App.css'
import Vans from "./components/pages/Vans"
// import data from "./Data"

function App() {
  
  return (
    <>
      <h1>App</h1>
      <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        {/* <Route path="/vans/:id" element={<VanDetail />} /> */}
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
