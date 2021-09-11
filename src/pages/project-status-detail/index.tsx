import { PageLayout } from "src/components";
import { ProjectStatusCard } from "src/modules/project-status";

export default function ProjectStatusDetailPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <ProjectStatusCard />
        </PageLayout>
      </main>
    </div>
  );
}
