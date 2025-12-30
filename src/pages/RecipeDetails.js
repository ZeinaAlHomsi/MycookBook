import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Info.css";

function splitToList(text) {
  if (!text) return [];
  const byNewLine = text.split("\n").map((s) => s.trim()).filter(Boolean);
  if (byNewLine.length > 1) return byNewLine;
  return text.split(",").map((s) => s.trim()).filter(Boolean);
}

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/recipe/${id}`);
        setRecipe(res.data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
        setRecipe(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchRecipe();
    else setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <main className="info-page">
        <div className="info-card">
          <button onClick={() => navigate(-1)} className="back-button">
            ← Back
          </button>
          <p style={{ marginTop: 14 }}>Loading recipe...</p>
        </div>
      </main>
    );
  }

  if (!recipe) {
    return (
      <main className="info-page">
        <div className="info-card">
          <button onClick={() => navigate(-1)} className="back-button">
            ← Back
          </button>
          <p style={{ marginTop: 14 }}>Recipe not found.</p>
        </div>
      </main>
    );
  }

  const ingredientsList = splitToList(recipe.Ingredients);
  const stepsList = splitToList(recipe.Steps);

  return (
    <main className="info-page">
      <div className="info-card">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>

        <h1 style={{ marginTop: 12 }}>{recipe.Rname}</h1>

        <img
          src={recipe.Photo || "https://via.placeholder.com/700x300?text=No+Image"}
          alt={recipe.Rname}
          style={{
            width: "100%",
            height: 300,
            objectFit: "cover",
            borderRadius: 14,
            margin: "10px 0 16px",
          }}
        />

        <p>{recipe.Description}</p>

        <h3>Ingredients</h3>
        <ul>
          {ingredientsList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>Steps</h3>
        <ul>
          {stepsList.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
