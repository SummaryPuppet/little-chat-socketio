import supertest = require("supertest");
// import {serverL} from "../index";
import server from "../app";

const api = supertest(server);

describe("app express", () => {
  test("GET /", async () => {
    await api.get("/").expect(200);
  });

  test("GET /chat redirect to /", async () => {
    await api.get("/chat").expect(302);
  });

  test("GET unknown route ", async () => {
    await api.get("/ofwje").expect(404);
  });

  afterAll(() => {
    server.close();
  });
});
