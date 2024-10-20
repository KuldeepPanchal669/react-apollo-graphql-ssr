import App from "./App";
import HomePage from "./pages/HomePage/home-page";
import ProductListPage from "./pages/ProductListPage/product-list-page";
import NotFoundPage from "./pages/NotFoundPage/not-found-page";
import AdminPage from "./pages/AdminPage/admin-page";

const routeConfig = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // This is the default route
        element: <HomePage />,
      },
      {
        element: <AdminPage />,
        path: "/admins",
      },
      {
        element: <ProductListPage />,
        path: "/products",
      },
      {
        path: "*", // This is a catch-all route
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routeConfig;
