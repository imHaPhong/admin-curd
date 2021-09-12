import { PageLayout } from "src/components";
import { TechstackTable } from "src/modules/tech-stack";

export default function TechStackPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <TechstackTable />
        </PageLayout>
      </main>
    </div>
  );
}
