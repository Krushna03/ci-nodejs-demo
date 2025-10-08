import request from "supertest"
import app from "../src/index.js"

descibe("GET /", () => {
  it("Should return the hello message", async () => {

    const res = await request(app).get("/");

    expect(res.statusCode).toBE(200);
    expect(req.body).toHaveProperty("message", "Hello CI/CD World 🌍");
  });
});