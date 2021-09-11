import { ComponentType, Suspense } from "react";
import { PageLayout } from ".";

export function loadable(Component: ComponentType) {
  return function Loadable({ ...rest }) {
    return (
      <div className="w-full">
        <Suspense fallback={<PageLayout />}>
          <Component {...rest} />
        </Suspense>
      </div>
    );
  };
}
