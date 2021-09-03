import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "src/components";
import { apiClientBrowser } from "src/lib/request";
import { ProjectStatusForm } from "src/modules/project-status";

interface ProjectType {
  _id: string;
  name: string;
  desc: string;
  priority: string;
  status: string;
}

export default function CreateProjectStatusPage() {
  const { id }: { id: string } = useParams();

  const [projectTypeData, setProjectTypeData] = useState<ProjectType>();

  useEffect(() => {
    async function getProjectType() {
      const projectTypeInfo = await apiClientBrowser.get(
        `http://localhost:8080/project-status/${id}`,
      );
      setProjectTypeData(projectTypeInfo.data as ProjectType);
      // eslint-disable-next-line no-console
      console.log(projectTypeInfo);
    }

    getProjectType();
  }, [id]);

  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            {projectTypeData && (
              <ProjectStatusForm
                edit={true}
                name={projectTypeData?.name}
                desc={projectTypeData?.desc}
                status={projectTypeData?.status}
                pId={id}
              />
            )}
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
