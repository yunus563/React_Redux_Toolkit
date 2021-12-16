import React from "react";
import { publicRouter, privateRouter } from "../router/routes";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector} from "react-redux";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

const RouterController = () => {
  const auth = useSelector(state => state.authSlice.auth)

  const useParam = useLocation();
  return auth ? (
    <Routes>
      {publicRouter.map(
        (route, index) => {
          if (route.path.toString() !== useParam.pathname.toString()) {
            return <Route path="/*" exact={true} element={<Login />} />;
          } else {
            return (
              <Route
                element={route.element}
                path={route.path}
                exact={route.exact}
                key={Math.random(5)}
              />
            );
          }
        }
      )}
    </Routes>
  ) : (
    <Routes>
    {privateRouter.map((route, index) => {
      if (route.path.toString() !== useParam.pathname.toString()) {
        return <Route path="/*" exact={true} element={<Home />} />;
      } else {
        return (
          <Route
            element={route.element}
            path={route.path}
            exact={route.exact}
            key={Math.random(5)}
          />
        );
      }
    })}
  </Routes>
  );
};

export default RouterController;
