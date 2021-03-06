import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "src/components";
import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { ProjectTypeForm } from "src/modules/project-type/components/project-type-form";

interface ProjectType {
  _id: string;
  name: string;
  desc: string;
  priority: string;
  status: string;
}

export default function EditProjectTypePage() {
  const { id }: { id: string } = useParams();

  const [projectTypeData, setProjectTypeData] = useState<ProjectType>();

  useEffect(() => {
    async function getProjectType() {
      const projectTypeInfo = await apiClientBrowser.get(`${config.apiBaseUrl}project-type/${id}`);
      setProjectTypeData(projectTypeInfo.data as ProjectType);
    }

    getProjectType();
  }, [id]);

  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            {projectTypeData && (
              <ProjectTypeForm
                edit={true}
                name={projectTypeData?.name}
                desc={projectTypeData?.desc}
                priority={projectTypeData?.priority}
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
