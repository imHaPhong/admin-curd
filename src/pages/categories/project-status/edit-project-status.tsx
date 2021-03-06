import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "src/components";
import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { ProjectStatusForm } from "src/modules/project-status";

interface ProjectStatusType {
  _id: string;
  name: string;
  desc: string;
  priority: string;
  status: string;
}

export default function EditProjectStatusPage() {
  const { id }: { id: string } = useParams();

  const [projectStatusData, setProjectStatusData] = useState<ProjectStatusType>();

  useEffect(() => {
    async function fetchProjectStatusData() {
      const projectStatus = await apiClientBrowser.get(`${config.apiBaseUrl}project-status/${id}`);
      setProjectStatusData(projectStatus.data as ProjectStatusType);
    }

    fetchProjectStatusData();
  }, [id]);

  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            {projectStatusData && (
              <ProjectStatusForm
                edit={true}
                name={projectStatusData?.name}
                desc={projectStatusData?.desc}
                status={projectStatusData?.status}
                pId={id}
              />
            )}
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
