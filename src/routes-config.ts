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
  routeCustomerGroupDetailBase,
  routeDepartmentBase,
  routeDepartmentDetailBase,
  routeDepartmentEditBase,
  routeEditCustomerGroupBase,
  routeEditEmployee,
  routeEditProject,
  routeEditProjectStatusBase,
  routeEditProjectTypeBase,
  routeEditTechStackBase,
  routeEmployeeBase,
  routeEmployeeDetail,
  routeHomeBase,
  routeProjectBase,
  routeProjectDetail,
  routeProjectReport,
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
    path: routeEditCustomerGroupBase,
    exact: true,
    component: loadable(
      lazy(() => import("./pages/categories/customer-group/edit-customer-group")),
    ),
  },
  {
    path: routeCustomerGroupDetailBase,
    exact: true,
    component: loadable(
      lazy(() => import("./pages/categories/customer-group/detail-customer-group")),
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
    path: routeDepartmentEditBase,
    exact: true,
    component: loadable(lazy(() => import("./pages/mange/department/edit-department"))),
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
  {
    path: routeEditEmployee,
    exact: true,
    component: loadable(lazy(() => import("./pages/mange/employee/edit-employee"))),
  },
  {
    path: routeEmployeeDetail,
    exact: true,
    component: loadable(lazy(() => import("./pages/mange/employee/detail-employee"))),
  },
  {
    path: routeEditProject,
    exact: true,
    component: loadable(lazy(() => import("./pages/mange/project/edit-project"))),
  },
  {
    path: routeProjectDetail,
    exact: true,
    component: loadable(lazy(() => import("./pages/mange/project/detail-project"))),
  },
  {
    path: routeProjectReport,
    exact: true,
    component: loadable(lazy(() => import("./pages/reports/projects"))),
  },
];
