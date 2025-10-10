import dotenv from "dotenv";
dotenv.config({ path: "./.env"})

import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello CI/CD World 🌍" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
