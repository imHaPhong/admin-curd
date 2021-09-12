import { PageLayout } from "src/components";
import { TechstackForm } from "src/modules/tech-stack";

export default function CreateTechstackPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            <TechstackForm edit={false} />
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
