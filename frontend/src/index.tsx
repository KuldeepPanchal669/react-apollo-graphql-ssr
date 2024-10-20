import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routeConfig from "./Routes";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";

const AppRoutes = () => (
  <Routes>
    {routeConfig.map((route, index) => (
      <Route key={index} path={route.path} element={route.element}>
        {route.children &&
          route.children.map((child, childIndex) => (
            <Route key={childIndex} path={child.path} element={child.element} />
          ))}
      </Route>
    ))}
  </Routes>
);
const rootNode = document.getElementById("root") as HTMLElement;
// const root = ReactDOM.createRoot(rootNode);
// root.render(<BrowserRouter>{<AppRoutes />}</BrowserRouter>);

hydrateRoot(rootNode, <BrowserRouter>{<AppRoutes />}</BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
