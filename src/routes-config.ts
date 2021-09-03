import { lazy } from "react";

import { loadable } from "src/components";
import {
  routeCreateProjectStatusBase,
  routeCreateProjectTypeBase,
  routeEditProjectStatusBase,
  routeEditProjectTypeBase,
  routeHomeBase,
  routeProjectStatusBase,
  routeProjectTypeBase,
  routeProjectTypeDetailBase,
  routeSigninBase,
  routeSignupBase,
  routeTechStackBase,
} from "./constants/routes";

export const routesConfig = [
  {
    path: routeHomeBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/index"))),
  },
  {
    path: routeSigninBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/signin"))),
  },
  {
    path: routeSignupBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/signup"))),
  },
  {
    path: routeProjectTypeBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/project-type"))),
  },
  {
    path: routeCreateProjectTypeBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/create-project-type"))),
  },
  {
    path: routeEditProjectTypeBase,
    exact: false,
    component: loadable(lazy(() => import("./pages/edit-project-type"))),
  },
  {
    path: routeProjectStatusBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/project-status"))),
  },
  {
    path: routeCreateProjectStatusBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/create-project-status"))),
  },
  {
    path: routeEditProjectStatusBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/edit-project-status"))),
  },
  {
    path: routeTechStackBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/tech-stack"))),
  },
  {
    path: routeProjectTypeDetailBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/project-type-detail"))),
  },
];
