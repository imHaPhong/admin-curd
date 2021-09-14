import { PageLayout } from "src/components";
import { EmployeeCard } from "src/modules/employee";

export default function ProjectStatusDetailPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <EmployeeCard />
        </PageLayout>
      </main>
    </div>
  );
}
