import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage/home-page";
import ProductListPage from "./pages/ProductListPage/product-list-page";
import NotFoundPage from "./pages/NotFoundPage/not-found-page";
import AdminPage from "./pages/AdminPage/admin-page";
import TestPage from "./pages/TestPage/test-page";

const routeConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/admins",
    element: <AdminPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
    children: [
      {
        path: "/test/products", // This is the default route
        element: <ProductListPage />,
      },
    ],
  },
  {
    path: "/products",
    element: <ProductListPage />,
  },
  {
    path: "*", // This is a catch-all route
    element: <NotFoundPage />,
  },
];

export default routeConfig;
