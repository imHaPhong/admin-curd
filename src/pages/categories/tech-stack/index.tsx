import { PageLayout } from "src/components";
import { TechstackList } from "src/modules/tech-stack";

export default function TechStackPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <TechstackList />
        </PageLayout>
      </main>
    </div>
  );
}
