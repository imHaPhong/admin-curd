import { PageLayout } from "src/components";
import { ProjectTable } from "src/modules/project";

export default function ProjectStatus() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <ProjectTable />
        </PageLayout>
      </main>
    </div>
  );
}
