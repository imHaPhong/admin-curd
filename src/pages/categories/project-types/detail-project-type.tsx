import { PageLayout } from "src/components";
import { ProjectTypeCard } from "src/modules/project-type";

export default function ProjectTypePage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <ProjectTypeCard />
        </PageLayout>
      </main>
    </div>
  );
}
