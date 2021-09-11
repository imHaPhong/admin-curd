import classnames from "classnames";
import { ComponentPropsWithoutRef } from "react";
import { useMedia } from "src/hooks/media-query";
import { Breadcrumb } from "./breadcrumb";
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
              <Breadcrumb />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
