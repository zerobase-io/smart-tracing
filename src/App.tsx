/* eslint-disable import/first */

/* React */
import React, { Suspense, lazy, LazyExoticComponent } from "react";

/* Routing */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* Routes */
const routeLazyFunc = (
  routeName: string
): LazyExoticComponent<() => JSX.Element> =>
  lazy(
    () =>
      import(
        `@/pages/${routeName === "/" ? "home" : routeName.substring(1)}/index`
      )
  );

const Routes = [
  "/",
  "/about",
  "/contact",
  "/info/businesses",
  "/info/communities",
  "/info/individuals",
  "/info/testingSites",
  "/policies/privacy",
  "/policies/terms",
  "/team",
];

/* Local Components */
import SiteNav from "@/components/Site/SiteNav/SiteNav";
import SiteFooter from "./components/Site/SiteFooter/SiteFooter";

const App = () => (
  <Router>
    <SiteNav />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {Routes.map((route) => (
          <Route
            key={route}
            exact={route === "/"}
            path={route}
            component={routeLazyFunc(route)}
          />
        ))}
      </Switch>
    </Suspense>
    <SiteFooter />
  </Router>
);

export default App;
