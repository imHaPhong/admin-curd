import { PageLayout } from "src/components";
import { ListProjectType } from "src/modules/project-type";

export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <ListProjectType />
        </PageLayout>
      </main>
    </div>
  );
}
