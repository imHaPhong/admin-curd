import { PageLayout } from "src/components";
import { ProjectStatusForm } from "src/modules/project-status/components/project-status-form";

export default function CreateProjectStatusPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            <ProjectStatusForm edit={false} />
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
