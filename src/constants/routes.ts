export const routeHomeBase = "/";

export const routeSigninBase = "/signin";
export const routeSignupBase = "/signup";

export const routeCategoryBase = "/category";

export const routeProjectTypeBase = `${routeCategoryBase}/project-type`;
export const routeProjectTypeDetailBase = `${routeCategoryBase}/project-type/:id`;
export const routeCreateProjectTypeBase = `${routeCategoryBase}/project-type/add`;
export const routeEditProjectTypeBase = `${routeCategoryBase}/project-type/edit/:id`;

export const routeProjectStatusBase = `${routeCategoryBase}/project-status`;
export const routeProjectStatusDetailBase = `${routeCategoryBase}/project-status/:id`;
export const routeCreateProjectStatusBase = `${routeCategoryBase}/project-status/add`;
export const routeEditProjectStatusBase = `${routeCategoryBase}/project-status/edit/:id`;

export const routeTechStackBase = `${routeCategoryBase}/tech-stack`;
export const routeTechStackDetailBase = `${routeCategoryBase}/tech-stack/:id`;
export const routeEditTechStackBase = `${routeCategoryBase}/tech-stack/edit/:id`;
export const routeCreateTechStackBase = `${routeCategoryBase}/tech-stack/add`;

export const routeCustomerGroupBase = `${routeCategoryBase}/customer-group`;
export const routeCustomerGroupDetailBase = `${routeCategoryBase}/customer-group/:id`;
export const routeEditCustomerGroupBase = `${routeCategoryBase}/customer-group/edit/:id`;
export const routeCreateCustomerGroupBase = `${routeCategoryBase}/customer-group/add`;

export const routeManageBase = "/manage";

export const routeDepartmentBase = `${routeManageBase}/department`;
export const routeCreateDepartmentBase = `${routeManageBase}/department/add`;
export const routeDepartmentDetailBase = `${routeManageBase}/department/:id`;
export const routeDepartmentEditBase = `${routeManageBase}/department/edit/:id`;

export const routeEmployeeBase = `${routeManageBase}/employee`;
export const routeCreateEmployee = `${routeManageBase}/employee/add`;
export const routeEditEmployee = `${routeManageBase}/employee/edit/:id`;
export const routeEmployeeDetail = `${routeManageBase}/employee/:id`;

export const routeProjectBase = `${routeManageBase}/project`;
export const routeCreateProjectBase = `${routeManageBase}/project/add`;
export const routeEditProject = `${routeManageBase}/project/edit/:id`;
export const routeProjectDetail = `${routeManageBase}/project/:id`;

export const routeReportBase = "/report";
export const routeProjectReport = `${routeReportBase}/project`;
