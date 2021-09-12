import { PageLayout } from "src/components";
import { EmployeeTabel } from "src/modules/employee";

export default function ProjectStatus() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <EmployeeTabel />
        </PageLayout>
      </main>
    </div>
  );
}
