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
    note: "Light & healthy main course",
  },
  {
    id: 2,
    title: "Mini Cheese Burgers",
    image: slidersImg,
    note: "Perfect for sharing with friends",
  },
  {
    id: 3,
    title: "Creamy Pumpkin Soup",
    image: soupImg,
    note: "Warm and cozy bowl for cold days",
  },
  {
    id: 4,
    title: "Berry Layered Pancake",
    image: pancakeImg,
    note: "Sweet dessert to end your meal",
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="home-header">
        <p className="pill-label">Quick Look</p>
        <h1 className="hero-title">Choose something delicious to cook.</h1>
        <p className="hero-text">
          Pick a dish you like, view the recipe, and explore even more ideas.
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

            <div className="home-recipe-body">
              <h2 className="home-recipe-title">{recipe.title}</h2>
              {recipe.note && (
                <p className="home-recipe-meta">{recipe.note}</p>
              )}

              <div className="home-recipe-actions">
                <Link to="/ingredients" className="recipe-button">
                  View recipe
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className="home-discover">
        <Link to="/ingredients" className="btn-clear">
          Discover more recipes
        </Link>
      </div>
    </main>
  );
}
