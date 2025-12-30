const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "uploads")),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cookbook_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected");
});


app.get("/recipe", (req, res) => {
  db.query("SELECT * FROM recipe ", (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const mapped = results.map((r) => ({
      ...r,
      Photo: r.Photo ? `http://localhost:5000/uploads/${r.Photo}` : null,
    }));

    res.json(mapped);
  });
});


app.get("/recipe/:id", (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM recipe WHERE id = ? LIMIT 1", [id], (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!results || results.length === 0) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    const r = results[0];
    res.json({
      ...r,
      Photo: r.Photo ? `http://localhost:5000/uploads/${r.Photo}` : null,
    });
  });
});


app.post("/recipe", upload.single("Photo"), (req, res) => {
  const { Rname, Description, Ingredients, Steps } = req.body;

  const photoName = req.file ? req.file.filename : null;

  const sql =
    "INSERT INTO recipe (Rname, Description, Ingredients, Steps, Photo) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [Rname, Description, Ingredients, Steps, photoName], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ error: "Error inserting recipe" });
    }

    res.json({
      id: result.insertId,
      Rname,
      Description,
      Ingredients,
      Steps,
      Photo: photoName ? `http://localhost:5000/uploads/${photoName}` : null,
    });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
