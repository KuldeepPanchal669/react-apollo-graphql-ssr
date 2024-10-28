import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import AppRoutes from "./route-renderer";
// import reportWebVitals from "./reportWebVitals";

const rootNode = document.getElementById("root") as HTMLElement;
// const root = createRoot(rootNode);
// root.render(
//   <BrowserRouter>
//     {
//       <Provider store={store}>
//         <AppRoutes />
//       </Provider>
//     }
//   </BrowserRouter>
// );

hydrateRoot(
  rootNode,
  <BrowserRouter>
    {
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    }
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
