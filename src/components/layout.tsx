import classnames from "classnames";
import { ComponentPropsWithoutRef, useState } from "react";
import { useMedia } from "src/hooks/media-query";
import { Breadcrumb } from "./breadcrumb";
import { NavBar } from "./navbar";
import { Sidebar } from "./sidebar";

type PageLayoutProps = ComponentPropsWithoutRef<"div">;

export function PageLayout({ children, className, ...rest }: PageLayoutProps) {
  const isMobile = useMedia("(min-width: 768px)");
  const [mobileShow, setMobileShow] = useState<boolean>(false);

  return (
    <div
      className={classnames(
        "w-full",

        className,
      )}
      {...rest}
    >
      <div className="md:px-0 bg-light">
        <div className="flex">
          <Sidebar
            isShow={isMobile !== mobileShow}
            showSidebar={async () => setMobileShow((p) => !p)}
          />
          <div className="w-full h-screen">
            <NavBar showSidebar={async () => setMobileShow((p) => !p)} />

            <div className="w-full md:p-6">
              <Breadcrumb />
              <div className="mx-2 md:mx-0">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
