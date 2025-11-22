import { useState } from "react";
import "../styles/Ingredients.css";

export default function Ingredients() {
  const [selected, setSelected] = useState([]);

  const ingredients = [
    "Chicken",
    "Beef",
    "Fish",
    "Pasta",
    "Rice",
    "Eggs",
    "Potato",
    "Tomato",
    "Onion",
    "Garlic",
    "Mushroom",
    "Spinach",
  ];

  const toggleIngredient = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected.length === 0) return;
    // For now: just show a message. In a real app you’d go to a results page.
    alert(`Show recipes for: ${selected.join(", ")}`);
  };

  return (
    <main className="main-area">
      <section className="recipe-card">
        <header className="recipe-header">
          <p className="pill-label">Ingredient filters</p>
          <h1 className="recipe-title">Choose your ingredients</h1>
          <p className="recipe-subtitle">
            Select one or more ingredients you have, and we’ll filter the recipe
            eBook to show you matching ideas.
          </p>
        </header>

        <form className="ingredient-form" onSubmit={handleSubmit}>
          <fieldset className="ingredient-fieldset">
            <legend className="ingredient-legend">
              Select ingredients:
            </legend>

            <div className="ingredient-list">
              {ingredients.map((item) => (
                <label key={item} className="ingredient-option">
                  <input
                    type="checkbox"
                    value={item}
                    checked={selected.includes(item)}
                    onChange={() => toggleIngredient(item)}
                  />
                  <span className="custom-checkbox" />
                  <span className="ingredient-label-text">{item}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="ingredient-actions">
            <button
              type="submit"
              className="recipe-button"
              disabled={selected.length === 0}
            >
              Show recipes
            </button>

            <button
              type="button"
              className="btn-clear"
              onClick={() => setSelected([])}
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
