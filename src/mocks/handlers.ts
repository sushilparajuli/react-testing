// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a GET /users request
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "Sushil Parajuli",
        },
        {
          name: "Puja Bhattarai",
        },
        {
          name: "Sushil Bhattarai",
        },
      ])
    );
  }),
];
