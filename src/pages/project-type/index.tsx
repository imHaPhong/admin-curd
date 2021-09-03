import { PageLayout } from "src/components";
import { ProjectTypeTable } from "src/modules/project-type";

export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <ProjectTypeTable />
        </PageLayout>
      </main>
    </div>
  );
}
