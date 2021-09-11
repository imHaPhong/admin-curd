import { PageLayout } from "src/components";
import { ProjectForm } from "src/modules/project";

export default function CreateProjectStatusPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            <ProjectForm edit={false} />
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
