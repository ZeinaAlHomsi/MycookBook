import salmonImg from "../assets/salmon.jpeg";
import slidersImg from "../assets/sliders.jpeg";
import soupImg from "../assets/soup.jpeg";
import pancakeImg from "../assets/pancake.jpeg";

export const recipes = [
  {
    id: 1,
    title: "Pistachio Crusted Salmon",
    image: salmonImg,
    description: "Salmon topped with a crunchy pistachio, panko, and Parmesan crust.",
    measurements: { servings: 2, prepTime: "10 min", cookTime: "15 min" },
    ingredients: [
      "2 salmon fillets",
      "1/3 cup pistachios (crushed)",
      "2 tbsp panko",
      "2 tbsp parmesan",
      "1 tbsp olive oil",
      "Salt & pepper"
    ],
    steps: [
      "Preheat oven to 200°C.",
      "For the crust mix pistachios & panko & parmesan & olive oil.",
      "Season salmon, top with crust.",
      "Bake 12–15 minutes until cooked.",
      "Sauté in a pan your fav veggies to serve with.",
      "Serve salmon with veggies."
    ],
  },
  {
    id: 2,
    title: "Mini Sliders Platter",
    image: slidersImg,
    description: "Juicy mini burgers with cheese, lettuce, and toasted buns.",
    measurements: { servings: 4, prepTime: "15 min", cookTime: "12 min" },
    ingredients: ["Mini buns",
                  "250g Ground beef",
                   "1 Onion",
                   "Cheese slices",
                   "1/2 a Lettuce",
                   "Pickles",
                   "Salt & pepper"],
    steps: ["In a bowl add the ground beef with some salt and pepper mix them well and shape them into small patties.",
            "Cook patties on high heat with some butter on a pan for 4 minutes on each side.",
            "Toast buns in the same pan you cooked the patties in with all the butter and sauce from the meat.",
            "Assemble sliders add your fav sauce (mayo, ketshup, BBQ sauce...) and serve."],
  },
  {
    id: 3,
    title: "Cozy Vegetable Soup",
    image: soupImg,
    description: "A warm and cozy vegetable soup for cold evenings.",
    measurements: { servings: 4, prepTime: "15 min", cookTime: "25 min" },
    ingredients: ["1 Onion",
                  "2 Carrot",
                  "2 Potato",
                  "1 Zucchini",
                  "1 Celery",
                  "2 tbs melted Butter",
                  "1 tbs Olive oil",
                  "2 cups Vegetable stock",
                  "Salt & pepper"],
    steps: ["Chop veggies into small cubes (easy to boil).",
            "Sauté onion in a pot with some butter and olive oil.",
            "Add veggies and let them sauté.",
            "Add vegetables stock and bring to a boil.",
            "Simmer 25 min.",
            "Blend till soft and serve warm."],
  },
  {
    id: 4,
    title: "Fluffy Pancakes",
    image: pancakeImg,
    description: "Soft pancakes with a golden finish and fluffy texture.",
    measurements: { servings: 3, prepTime: "15 min", cookTime: "10 min" },
    ingredients: ["2 cups Flour",
                  "1 cup Milk",
                  "1 Egg",
                  "2 tsp Baking powder",
                  "1/4 cup Sugar",
                  "2 tbsp Butter"],
    steps: ["Mix dry alone and then add the wet.",
            "Rest 5 min.", 
            "Cook on pan with a little butter and medium heat.",
            "Serve warm with syrup or even cream and some fruits."],
  },
];

export const getRecipeById = (id) => recipes.find((r) => r.id === Number(id));
