import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AddRecipe.css";

export default function AddRecipe() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    Rname: "",
    Description: "",
    Ingredients: "",
    Steps: "",
  });

  const [Photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const fd = new FormData();
      fd.append("Rname", form.Rname);
      fd.append("Description", form.Description);
      fd.append("Ingredients", form.Ingredients);
      fd.append("Steps", form.Steps);

      if (Photo) {
        fd.append("Photo", Photo); 
      }

      await axios.post("http://localhost:5000/recipe", fd);

     
      setForm({
        Rname: "",
        Description: "",
        Ingredients: "",
        Steps: "",
      });
      setPhoto(null);

     
      navigate("/recipes");
    } catch (err) {
      console.error("Error adding recipe:", err);
      alert("Failed to add recipe");
    }
  };

  return (
    <main className="add-page">
      <div className="Add-card">
        <h1 className="text-center">Your Recipe</h1>

        <form className="Add-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Rname"
            placeholder="Recipe Name"
            value={form.Rname}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="Description"
            placeholder="Short Description"
            value={form.Description}
            onChange={handleChange}
            required
          />

          <textarea
            name="Ingredients"
            placeholder="Ingredients (use commas or new lines)"
            value={form.Ingredients}
            onChange={handleChange}
            required
          />

          <textarea
            name="Steps"
            placeholder="Steps (use commas or new lines)"
            value={form.Steps}
            onChange={handleChange}
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />

          <button className="Add-button" type="submit">
            Add Recipe
          </button>
        </form>
      </div>
    </main>
  );
}
