import { PageLayout } from "src/components";
import { DepartmentForm } from "src/modules/department";

export default function CreateProjectStatusPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            <DepartmentForm edit={false} />
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
