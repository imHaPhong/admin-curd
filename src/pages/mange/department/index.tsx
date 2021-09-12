import { PageLayout } from "src/components";
import { DepartmentTabel } from "src/modules/department";

export default function TechStackPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <DepartmentTabel />
        </PageLayout>
      </main>
    </div>
  );
}
