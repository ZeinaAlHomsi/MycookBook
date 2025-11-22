import { Link } from "react-router-dom";
import salmonImg from "../assets/salmon.jpeg";
import slidersImg from "../assets/sliders.jpeg";
import soupImg from "../assets/soup.jpeg";
import pancakeImg from "../assets/pancake.jpeg";
import "../styles/Recipes.css";

const recipes = [
  {
    id: 1,
    title: "Pistachio Crusted Salmon",
    image: salmonImg,
    description:
      "Salmon topped with a crunchy pistachio, panko, and Parmesan crust.",
  },
  {
    id: 2,
    title: "Mini Sliders Platter",
    image: slidersImg,
    description:
      "Juicy mini burgers with cheese, lettuce, and toasted buns.",
  },
  {
    id: 3,
    title: "Cozy Vegetable Soup",
    image: soupImg,
    description:
      "A warm and cozy vegetable soup for cold evenings.",
  },
  {
    id: 4,
    title: "Fluffy Berry Pancakes",
    image: pancakeImg,
    description:
      "Soft pancakes made with fresh berries and a touch of vanilla.",
  },
];

export default function Recipes() {
  return (
    <main className="recipes-page">
      <section className="recipes-header">
        <h1>All Recipes</h1>
        <p>Explore all the recipes available in this cooking e-book.</p>

        {/* NEW BUTTON (back to ingredients page) */}
        <Link to="/ingredients" className="recipes-filter-button">
        Choose your Available Ingredients to Filter Recipes
        </Link>
      </section>

      <section className="recipes-grid">
        {recipes.map((recipe) => (
          <article key={recipe.id} className="recipes-card">
            <div className="recipes-image-wrapper">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipes-image"
              />
            </div>

            <div className="recipes-content">
              <h2 className="recipes-title">{recipe.title}</h2>
              <p className="recipes-description">{recipe.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
