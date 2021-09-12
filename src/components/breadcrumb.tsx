import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { routesPath } from "src/constants/routes-path";

function pathnameToBreadcrum(pathname: string[]) {
  const currentPath = routesPath.find((el) => el.path === pathname[1]);
  switch (pathname.length - 1) {
    case 1:
      return (
        <>
          <h1 className="font-medium text-2xl text-dark"> {currentPath?.pathName}</h1>

          <div className="flex">
            <Link to={`/${currentPath?.path}`} className="text-blue-400">
              {currentPath?.pathTitle}
            </Link>
            <span className="block mx-2">/</span>
            {currentPath?.pathName}
          </div>
        </>
      );
    case 2:
    case 3:
      return (
        <>
          <h1 className="font-medium text-2xl text-dark">
            {currentPath?.subPath.find((el) => el.subPath === pathname[2])?.pathName || "Chi tiết"}
          </h1>

          <div className="flex text-base">
            <Link to={"/"} className="text-blue-400">
              {currentPath?.pathTitle}
            </Link>
            <span className="block mx-2">/</span>
            <Link to={`/${currentPath?.path}`} className="text-blue-400">
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
  //   const [breadcrum, setBreadcrum] =
  //     useState<{ pathTitle: string; path: string; pathname: string }[]>();
  const location = useLocation();

  useEffect(() => {
    const c = routesPath.find((el) => el.path === location.pathname.toString().split("/")[1]);
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
