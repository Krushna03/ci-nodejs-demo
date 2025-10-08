import request from "supertest";
import app from "../src/index.js";

describe("GET /", () => {
  it("should return hello message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Hello CI/CD World 🌍");
  });
});
