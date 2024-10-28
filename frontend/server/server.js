import express from "express";
import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import AppRoutes from "../src/route-renderer.tsx";

import fs from "fs";
import path from "path";
import { Provider } from "react-redux";
import store from "../src/store/index.ts";

const app = express();

// Serve specific static assets
app.use("/static", express.static(path.join(__dirname, "../build/static")));

// Serve manifest and favicon files
app.get("/manifest.json", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "manifest.json"));
});
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "favicon.ico"));
});
app.get("/logo192.png", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "logo192.png"));
});

app.get("/*", async (req, res) => {
  const context = {};

  
  //Write logic to fetch data for api inside the nested comoponents


  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <AppRoutes />
      </StaticRouter>
    </Provider>
  );
  // res.send(content);

  // Load the `index.html` template from the build directory
  const indexFile = path.resolve("build", "index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading index.html file", err);
      return res.status(500).send("An error occurred");
    }

    // Inject the rendered React app and Apollo Client state into the template
    const html = data.replace(
      '<div id="root"></div>',
      `<div id="root">${content}</div>`
    );

    // Send the final HTML back to the client
    res.send(html);
  });
});

app.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});
