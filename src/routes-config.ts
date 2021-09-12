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
    path: routeProjectTypeBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/categories/project-types"))),
  },
  {
    path: routeCreateProjectTypeBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/categories/project-types/create-project-type"))),
  },
  {
    path: routeEditProjectTypeBase,
    exact: false,
    component: loadable(lazy(() => import("./pages/categories/project-types/edit-project-type"))),
  },
  {
    path: routeProjectStatusBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/categories/project-status"))),
  },
  {
    path: routeCreateProjectStatusBase,
    exact: true,
    component: loadable(
      lazy(() => import("./pages/categories/project-status/create-project-status")),
    ),
  },
  {
    path: routeProjectStatusDetailBase,
    exact: true,
    component: loadable(
      lazy(() => import("./pages/categories/project-status/detail-project-status")),
    ),
  },
  {
    path: routeEditProjectStatusBase,
    exact: true,
    component: loadable(
      lazy(() => import("./pages/categories/project-status/edit-project-status")),
    ),
  },
  {
    path: routeCreateTechStackBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/categories/tech-stack/create-stack-stack"))),
  },
  {
    path: routeTechStackDetailBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/categories/tech-stack/detail-tech-stack"))),
  },
  {
    path: routeTechStackBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/categories/tech-stack"))),
  },
  {
    path: routeEditTechStackBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/categories/tech-stack/edit-tech-stack"))),
  },
  {
    path: routeProjectTypeDetailBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/categories/project-types/detail-project-type"))),
  },
  {
    path: routeCustomerGroupBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/categories/customer-group"))),
  },
  {
    path: routeCreateCustomerGroupBase,
    exact: true,
    component: loadable(
      lazy(() => import("./pages/categories/customer-group/create-customer-group")),
    ),
  },
  {
    path: routeDepartmentBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/mange/department"))),
  },
  {
    path: routeCreateDepartmentBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/mange/department/create-department"))),
  },
  {
    path: routeDepartmentDetailBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/mange/department/detail-department"))),
  },
  {
    path: routeEmployeeBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/mange/employee"))),
  },
  {
    path: routeProjectBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/mange/project"))),
  },
  {
    path: routeCreateProjectBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/mange/project/create-project"))),
  },
  {
    path: routeCreateEmployee,
    exact: true,
    component: loadable(lazy(() => import("./pages/mange/employee/create-employee"))),
  },
];
