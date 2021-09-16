import { PageLayout } from "src/components";
import { ProjectChartContainer } from "src/modules/project";

export default function ProjectReportPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white py-36 pt-20">
            <ProjectChartContainer />
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
