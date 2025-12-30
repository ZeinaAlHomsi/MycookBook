import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ingredients from "./pages/Ingredients"; 
import AddRecipe from "./pages/AddRecipe";


import "./styles/Styles.css";
import "./styles/Navbar.css";

function Header() {
 

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <p>Lets Get Cooking</p>
      </div>

  
        <nav className="navbar-links">
          <NavLink to="/recipes" end className="nav-link"> Recipes </NavLink>
          <NavLink to="/add" end className="nav-link"> Add Recipe </NavLink>
          <NavLink to="/about" className="nav-link"> About </NavLink>
          <NavLink to="/contact" className="nav-link"> Contact </NavLink>
        </nav>
      

     
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />

        <main className="main-area">
          <Routes>
                        <Route path="/" element={<Recipes />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/add" element={<AddRecipe />} />
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
