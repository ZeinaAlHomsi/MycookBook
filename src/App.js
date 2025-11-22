import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Ingredients from "./pages/Ingredients";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./styles/Styles.css";
import "./styles/Navbar.css";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <header className="navbar">
          <div className="navbar-logo">
            <p>Lets Get Cooking</p>
          </div>

          <nav className="navbar-links">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/recipes" className="nav-link">
              Recipes
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </nav>
        </header>

        <main className="main-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 My Cooking Book</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
