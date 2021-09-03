import { PageLayout } from "src/components";
import { ProjectStatusTable } from "src/modules/project-status";

export default function ProjectStatus() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <ProjectStatusTable />
        </PageLayout>
      </main>
    </div>
  );
}
