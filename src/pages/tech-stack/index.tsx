import { PageLayout } from "src/components";
import { TechStackTable } from "src/modules/tech-stack";

export default function TechStackPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <TechStackTable />
        </PageLayout>
      </main>
    </div>
  );
}
