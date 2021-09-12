import { PageLayout } from "src/components";
import { EmployeeForm } from "src/modules/employee";

export default function CreateProjectStatusPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            <EmployeeForm edit={false} />
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
