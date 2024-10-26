import React from "react";
import { Route, Routes } from "react-router-dom";
import routeConfig from "./Routes";

const AppRoutes = () => {
  const renderRoutes = (routeConfig: any) => {
    return routeConfig.map((route: any, index: number) => {
      return (
        <Route key={index} path={route.path} element={route.element}>
          {route.children &&
            route.children.map((child: any, childIndex: number) => (
              <Route
                key={childIndex}
                path={child.path}
                element={child.element}
              />
            ))}
        </Route>
      );
    });
  };
  return <Routes>{renderRoutes(routeConfig)}</Routes>;
};

export default AppRoutes;
