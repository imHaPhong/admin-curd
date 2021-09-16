import { ReactNode } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  routeCustomerGroupBase,
  routeDepartmentBase,
  routeEmployeeBase,
  routeProjectBase,
  routeProjectReport,
  routeProjectStatusBase,
  routeProjectTypeBase,
  routeTechStackBase,
} from "src/constants/routes";

type SidebarProps = {
  isShow: boolean;
};

type CustomLinkProps = {
  exact?: boolean;
  to: string;
  children: ReactNode;
};

export function Sidebar({ isShow }: SidebarProps) {
  function CustomLink({ exact, to, children }: CustomLinkProps) {
    const match = useRouteMatch({
      exact,
      path: to,
    });

    return (
      <Link to={to} className={match ? "text-white font-base" : ""}>
        {children}
      </Link>
    );
  }

  return (
    <nav className={`bg-darkBlue h-screen ${isShow ? " w-2/12" : "hidden"} text-gray`}>
      <div className="md:h-16 bg-primary font-bold text-white text-xl flex items-center pl-5">
        <span className="">REMARK</span>
      </div>
      <div className="w-full flex justify-center">
        <ul className="mt-5 text-base font-light">
          <li className="font-normal mb-2 uppercase">Danh mục</li>
          <li>
            <CustomLink to={routeProjectTypeBase}>Loại dự án</CustomLink>
          </li>
          <li>
            <CustomLink to={routeProjectStatusBase}>Trạng thái dự án</CustomLink>
          </li>
          <li>
            <CustomLink to={routeTechStackBase}>Tech Stack</CustomLink>
          </li>
          <li>
            <CustomLink to={routeCustomerGroupBase}>Nhóm khách hàng</CustomLink>
          </li>
          <li className="font-normal mt-5 mb-2 uppercase">Quản lý</li>
          <li>
            <CustomLink to={routeDepartmentBase}>Trung tâm, bộ phận, phòng ban </CustomLink>
          </li>
          <li>
            <CustomLink to={routeEmployeeBase}>Nhân sự </CustomLink>
          </li>
          <li>
            <CustomLink to={routeProjectBase}>Dự án</CustomLink>
          </li>
          <li className="font-normal mt-5 mb-2 uppercase">Báo cáo</li>
          <li>
            <CustomLink to={routeProjectReport}>Số lượng dự án</CustomLink>
          </li>
          <li>Số lượng nhân sự</li>
        </ul>
      </div>
    </nav>
  );
}
