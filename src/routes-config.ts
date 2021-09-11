import { lazy } from "react";

import { loadable } from "src/components";
import {
  routeCreateCustomerGroupBase,
  routeCreateDepartmentBase,
  routeCreateEmployee,
  routeCreateProjectBase,
  routeCreateProjectStatusBase,
  routeCreateProjectTypeBase,
  routeCreateTechStackBase,
  routeCustomerGroupBase,
  routeDepartmentBase,
  routeDepartmentDetailBase,
  routeEditProjectStatusBase,
  routeEditProjectTypeBase,
  routeEditTechStackBase,
  routeEmployeeBase,
  routeHomeBase,
  routeProjectBase,
  routeProjectStatusBase,
  routeProjectStatusDetailBase,
  routeProjectTypeBase,
  routeProjectTypeDetailBase,
  routeSigninBase,
  routeSignupBase,
  routeTechStackBase,
  routeTechStackDetailBase,
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
    path: routeProjectStatusDetailBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/project-status-detail"))),
  },
  {
    path: routeEditProjectStatusBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/edit-project-status"))),
  },
  {
    path: routeCreateTechStackBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/create-tech-stack"))),
  },
  {
    path: routeTechStackDetailBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/tech-stack-detail"))),
  },
  {
    path: routeTechStackBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/tech-stack"))),
  },
  {
    path: routeEditTechStackBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/edit-teck-stack"))),
  },
  {
    path: routeProjectTypeDetailBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/project-type-detail"))),
  },
  {
    path: routeCustomerGroupBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/customer-group"))),
  },
  {
    path: routeCreateCustomerGroupBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/create-customer-group"))),
  },
  {
    path: routeDepartmentBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/department"))),
  },
  {
    path: routeCreateDepartmentBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/create-department"))),
  },
  {
    path: routeDepartmentDetailBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/department-detail"))),
  },
  {
    path: routeEmployeeBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/employee"))),
  },
  {
    path: routeProjectBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/project"))),
  },
  {
    path: routeCreateProjectBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/create-project"))),
  },
  {
    path: routeCreateEmployee,
    exact: true,
    component: loadable(lazy(() => import("./pages/create-employee"))),
  },
];
