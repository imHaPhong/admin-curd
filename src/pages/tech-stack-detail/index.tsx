import { PageLayout } from "src/components";
import { TechstackCard } from "src/modules/tech-stack";

export default function ProjectStatusDetailPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <TechstackCard />
        </PageLayout>
      </main>
    </div>
  );
}
