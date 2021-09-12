import { PageLayout } from "src/components";
import { DepartmentCard } from "src/modules/department";

export default function ProjectStatusDetailPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <DepartmentCard />
        </PageLayout>
      </main>
    </div>
  );
}
