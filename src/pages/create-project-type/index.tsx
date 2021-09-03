import { PageLayout } from "src/components";
import { ProjectTypeForm } from "src/modules/project-type/components/project-type-form";

export default function CreateProjectStatusPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            <ProjectTypeForm edit={false} />
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
