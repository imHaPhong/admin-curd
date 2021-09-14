import { PageLayout } from "src/components";
import { ProjectCard } from "src/modules/project";

export default function ProjectStatusDetailPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <ProjectCard />
        </PageLayout>
      </main>
    </div>
  );
}
