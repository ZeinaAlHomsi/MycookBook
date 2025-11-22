import { Link } from "react-router-dom";
import salmonImg from "../assets/salmon.jpeg";
import slidersImg from "../assets/sliders.jpeg";
import soupImg from "../assets/soup.jpeg";
import pancakeImg from "../assets/pancake.jpeg";
import "../styles/Home.css";

const recipes = [
  {
    id: 1,
    title: "Glazed Salmon with Veggies",
    image: salmonImg,
    note: "Light & healthy main course.",
  },
  {
    id: 2,
    title: "Mini Sliders Platter",
    image: slidersImg,
    note: "Perfect for sharing with friends.",
  },
  {
    id: 3,
    title: "Cozy Vegetable Soup",
    image: soupImg,
    note: "Comforting bowl for cold days.",
  },
  {
    id: 4,
    title: "Fluffy Berry Pancakes",
    image: pancakeImg,
    note: "Sweet breakfast or dessert.",
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="home-header">
        <h1 className="home-title">Discover Delicious Recipes</h1>
        <p className="home-subtitle">
          Choose from a selection of easy, cozy recipes — then filter them by the
          ingredients you already have at home.
        </p>
      </section>

      <section className="home-recipes-grid">
        {recipes.map((recipe) => (
          <article key={recipe.id} className="home-recipe-card">
            <div className="home-recipe-image-wrapper">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="home-recipe-image"
              />
            </div>

            <div className="home-recipe-content">
              <h2 className="home-recipe-title">{recipe.title}</h2>
              <p className="home-recipe-note">{recipe.note}</p>

              <div className="home-recipe-actions">
                <Link to="/recipes" className="recipe-button">
                  View recipe
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className="home-discover">
        <Link to="/recipes" className="btn-clear">
          Discover more recipes
        </Link>
      </div>
    </main>
  );
}
