import classnames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";
import { routeHomeBase } from "src/constants/routes";
import { useMedia } from "src/hooks/media-query";
import { NavBar } from "./navbar";
import { Sidebar } from "./sidebar";

type PageLayoutProps = ComponentPropsWithoutRef<"div">;

export function PageLayout({ children, className, ...rest }: PageLayoutProps) {
  const isMobile = useMedia("(min-width: 768px)");

  return (
    <div
      className={classnames(
        "w-full",

        className,
      )}
      {...rest}
    >
      <div className="px-2 md:px-0 bg-light">
        <div className="flex">
          <Sidebar isShow={isMobile} />
          <div className="w-full h-screen">
            <NavBar />

            <div className="w-full md:p-6">
              <div className="py-2 pb-6">
                <h1 className="font-medium text-2xl text-dark">Home Page</h1>
                <div className="font-light">
                  <Link to={routeHomeBase} className="text-blue-400">
                    Danh mục
                  </Link>
                  / Loại dự án
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
