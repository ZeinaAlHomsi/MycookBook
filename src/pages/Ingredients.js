import { useState } from "react";
import "../styles/Ingredients.css";

const allIngredients = [
  "Salmon",
  "Pistachios",
  "Panko bread crumbs",
  "Parmesan cheese",
  "Butter",
  "Olive oil",
  "Dijon mustard",
  "Lemon",
  "Garlic",
  "Mixed veggies",
];

export default function Ingredients() {
  const [selected, setSelected] = useState([]);

  const toggleIngredient = (name) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const clearSelection = () => setSelected([]);

  return (
    <main className="ingredients-page">
      <section className="ingredients-card">
        <h1>Filter by Ingredients</h1>
        <p className="ingredients-intro">
          Select the ingredients you have at home. This helps you see which
          recipes might work for you.
        </p>

        <form className="ingredients-form" onSubmit={(e) => e.preventDefault()}>
          <div className="ingredients-grid">
            {allIngredients.map((ingredient) => (
              <label key={ingredient} className="ingredient-option">
                <input
                  type="checkbox"
                  checked={selected.includes(ingredient)}
                  onChange={() => toggleIngredient(ingredient)}
                />
                <span>{ingredient}</span>
              </label>
            ))}
          </div>

          <div className="ingredients-actions">
            <button
              type="button"
              className="btn-clear-selection"
              onClick={clearSelection}
            >
              Clear selection
            </button>
          </div>

          <p className="selected-hint">
            {selected.length === 0
              ? "No ingredients selected yet."
              : `Selected: ${selected.join(", ")}`}
          </p>
        </form>
      </section>
    </main>
  );
}
