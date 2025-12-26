import { BrowserRouter, Routes, Route, NavLink, useLocation ,useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

import Recipes from "./pages/Recipes";
import Ingredients from "./pages/Ingredients";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import RecipeDetails from "./pages/RecipeDetails";

import { getSession, logOut } from "./utils/server";

import "./App.css";
import "./styles/Styles.css";
import "./styles/Navbar.css";


function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  
  useEffect(() => {
    setSession(getSession());
  }, [location.pathname]);

  // Hide nav links on these pages
  const isAuthPage =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/account";

  return (
<header className={`navbar ${isAuthPage ? "center-logo" : ""}`}>      <div className="navbar-logo">
        <div
        className="navbar-logo"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(isAuthPage ? "/" : "/recipes")}
      ></div>
        <p>Lets Get Cooking</p>
      </div>

      {!isAuthPage && (
        <nav className="navbar-links">
          <NavLink to="/recipes" end className="nav-link">
            Recipes
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      )}
      {!isAuthPage && session && (
          <div className="navbar-user">
          <span className="navbar-username">
            {session.name}
          </span>

          <button
            className="logout-btn"
            onClick={() => {
              logOut();
              setSession(null);
              navigate("/account");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <main className="main-area">
          <Routes>
            <Route path="/" element={<Account />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
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
