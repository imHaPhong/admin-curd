import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const a = [
  {
    pathTitle: "Danh mục",
    path: "project-type",
    pathName: "Loại dự án",
    subPath: [
      {
        subPath: "add",
        pathName: "Thêm dự án",
      },
      {
        subPath: "edit",
        pathName: "Sửa dự án",
      },
    ],
  },
  {
    pathTitle: "Danh mục",
    path: "project-status",
    pathName: "Trạng thái dự án",
    subPath: [
      {
        subPath: "add",
        pathName: "Thêm dự trạng thái dự án",
      },
      {
        subPath: "edit",
        pathName: "Sửa trạng thái dự án",
      },
    ],
  },
  {
    pathTitle: "Danh mục",
    path: "tech-stack",
    pathName: "Tech stack",
    subPath: [
      {
        subPath: "add",
        pathName: "Thêm tech stack",
      },
      {
        subPath: "edit",
        pathName: "Sửa tech stack",
      },
    ],
  },
  {
    pathTitle: "Danh mục",
    path: "customer-group",
    pathName: "Nhóm khách hàng",
    subPath: [
      {
        subPath: "add",
        pathName: "Thêm nhóm khách hàng",
      },
      {
        subPath: "edit",
        pathName: "Sửa nhóm khách hàng",
      },
    ],
  },
  {
    pathTitle: "Quản lý",
    path: "department",
    pathName: "Trung tâm phòng ban",
    subPath: [
      {
        subPath: "add",
        pathName: "Thêm nhóm trung tâm phòng ban",
      },
      {
        subPath: "edit",
        pathName: "Sửa nhóm trung tâm phòng ban",
      },
    ],
  },
  {
    pathTitle: "Quản lý",
    path: "employee",
    pathName: "Nhân sự",
    subPath: [
      {
        subPath: "add",
        pathName: "Thêm nhóm nhân sự",
      },
      {
        subPath: "edit",
        pathName: "Sửa nhóm nhân sự",
      },
    ],
  },
  {
    pathTitle: "Quản lý",
    path: "project",
    pathName: "Dự án",
    subPath: [
      {
        subPath: "add",
        pathName: "Thêm nhóm dự án",
      },
      {
        subPath: "edit",
        pathName: "Sửa nhóm dự án",
      },
    ],
  },
];

function pathnameToBreadcrum(pathname: string[]) {
  // eslint-disable-next-line no-console
  console.log(pathname);
  switch (pathname.length - 1) {
    case 1:
      const b = a.find((el) => el.path === pathname[1]);
      return (
        <>
          <h1 className="font-medium text-2xl text-dark"> {b?.pathName}</h1>

          <div className="flex">
            <Link to={`/${b?.path}`} className="text-blue-400">
              {b?.pathTitle}
            </Link>
            <span className="block mx-2">/</span>
            {b?.pathName}
          </div>
        </>
      );
    case 2:
    case 3:
      const c = a.find((el) => el.path === pathname[1]);
      return (
        <>
          <h1 className="font-medium text-2xl text-dark">
            {c?.subPath.find((el) => el.subPath === pathname[2])?.pathName}
          </h1>

          <div className="flex">
            <Link to={"/"} className="text-blue-400">
              {c?.pathTitle}
            </Link>
            <span className="block mx-2">/</span>
            <Link to={`/${c?.path}`} className="text-blue-400">
              {c?.pathName}
            </Link>
            <span className="block mx-2">/</span>
            {c?.subPath.find((el) => el.subPath === pathname[2])?.pathName}
          </div>
        </>
      );
    default:
      return a.find((el) => el.pathName === pathname[2]) || [];
  }
}

export function Breadcrumb() {
  //   const [breadcrum, setBreadcrum] =
  //     useState<{ pathTitle: string; path: string; pathname: string }[]>();
  const location = useLocation();

  useEffect(() => {
    const c = a.find((el) => el.path === location.pathname.toString().split("/")[1]);
    // eslint-disable-next-line no-console
    console.log(c);
    document.title = c?.pathName || "";
  }, [location]);

  return (
    <div className="py-2 pb-6">
      <div className="font-light">
        {pathnameToBreadcrum(location.pathname.toString().split("/"))}
      </div>
    </div>
  );
}
