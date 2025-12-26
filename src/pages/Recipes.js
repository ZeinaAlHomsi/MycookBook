import { Link } from "react-router-dom";
import { recipes } from "../data/recipesData";
import "../styles/Recipes.css";

export default function Recipes() {
  return (
    <main className="recipes-page">
      <section className="recipes-header">
        <h1>All Recipes</h1>
        <p>Explore all the recipes available in this cooking e-book.</p>

        <Link to="/ingredients" className="recipes-filter-button">
          Choose your Available Ingredients to Filter Recipes
        </Link>
      </section>

      <section className="recipes-grid">
        {recipes.map((recipe) => (
          <article key={recipe.id} className="recipes-card">
            <div className="recipes-image-wrapper">
              <img src={recipe.image} alt={recipe.title} className="recipes-image" />
            </div>

            <div className="recipes-content">
              <h2 className="recipes-title">{recipe.title}</h2>
              <p className="recipes-description">{recipe.description}</p>

              <Link to={`/recipe/${recipe.id}`} className="recipe-button">
                View recipe
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
