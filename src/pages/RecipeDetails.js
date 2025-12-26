import { useParams, useNavigate } from "react-router-dom";
import { getRecipeById } from "../data/recipesData";
import "../styles/Info.css";

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = getRecipeById(id);
  if (!recipe) return <p style={{ padding: 20 }}>Recipe not found.</p>;

  return (
    <main className="info-page">
      <div className="info-card">
        <button onClick={() => navigate(-1)} style={{ marginBottom: 14 }}>
          ← Back
        </button>

        <h1>{recipe.title}</h1>

        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: "100%",
            height: 300,
            objectFit: "cover",
            borderRadius: 14,
            margin: "10px 0 16px",
          }}
        />

        <p>{recipe.description}</p>

        <h3>Measurements</h3>
        <ul>
          <li>Servings: {recipe.measurements.servings}</li>
          <li>Prep Time: {recipe.measurements.prepTime}</li>
          <li>Cook Time: {recipe.measurements.cookTime}</li>
        </ul>

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>Steps</h3>
        <ul>
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
