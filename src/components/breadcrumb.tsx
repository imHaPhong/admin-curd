import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { routesPath } from "src/constants/routes-path";

function pathnameToBreadcrum(pathname: string[]) {
  const currentPath = routesPath.find((el) => el.path === pathname[2]);
  switch (pathname.length - 1) {
    case 2:
      return (
        <>
          <h1 className="font-medium text-2xl text-dark"> {currentPath?.pathName}</h1>

          <div className="flex text-table-light">
            <Link to={`/${pathname[1]}/${currentPath?.path}`} className="text-blue-400">
              {currentPath?.pathTitle}
            </Link>
            <span className="block mx-2">/</span>
            {currentPath?.pathName}
          </div>
        </>
      );
    case 3:
    case 4:
      return (
        <>
          <h1 className="font-medium text-2xl text-dark">
            {currentPath?.subPath.find((el) => el.subPath === pathname[2])?.pathName || "Chi tiết"}
          </h1>

          <div className="flex text-base text-table-light">
            <Link to={"/"} className="text-blue-400">
              {currentPath?.pathTitle}
            </Link>
            <span className="block mx-2">/</span>
            <Link to={`/${pathname[1]}/${currentPath?.path}`} className="text-blue-400">
              {currentPath?.pathName}
            </Link>
            <span className="block mx-2">/</span>
            <span className="">
              {currentPath?.subPath.find((el) => el.subPath === pathname[2])?.pathName ||
                "Chi tiết"}
            </span>
          </div>
        </>
      );
    default:
      return routesPath.find((el) => el.pathName === pathname[2]) || [];
  }
}

export function Breadcrumb() {
  const location = useLocation();

  useEffect(() => {
    const c = routesPath.find((el) => el.path === location.pathname.toString().split("/")[1]);
    document.title = c?.pathName || "";
  }, [location]);

  return (
    <div className="py-2 pb-6 mx-2 md:mx-0">
      <div className="font-light">
        {pathnameToBreadcrum(location.pathname.toString().split("/"))}
      </div>
    </div>
  );
}
