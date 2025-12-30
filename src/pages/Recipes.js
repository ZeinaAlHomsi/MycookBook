import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Recipes.css";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/recipe");
      setRecipes(res.data);
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <main className="recipes-page">
      <section className="recipes-header">
        <h1>All Recipes</h1>
        <p>Explore all the recipes available in this cooking e-book.</p>
{/* 
        <Link to="/ingredients" className="recipes-filter-button">
          Choose your Available Ingredients to Filter Recipes
        </Link> */}
      </section>

      <section className="recipes-grid">
        {recipes.map((recipe) => (
          <article key={recipe.ID} className="recipes-card">
            <div className="recipes-image-wrapper">
              <img
                src={recipe.Photo || "https://via.placeholder.com/400x250?text=No+Image"}
                alt={recipe.Rname}
                className="recipes-image"
              />
            </div>

            <div className="recipes-content">
              <h2 className="recipes-title">{recipe.Rname}</h2>
              <p className="recipes-description">{recipe.Description}</p>

              <Link to={`/recipe/${recipe.ID}`} className="recipe-button">
                View recipe
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
