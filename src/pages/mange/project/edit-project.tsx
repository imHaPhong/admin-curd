import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "src/components";
import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { ProjectForm } from "src/modules/project";
import { Projects } from "src/modules/project/project.type";

export default function EditCustomerGroupPage() {
  const { id }: { id: string } = useParams();

  const [project, setProject] = useState<Projects>();

  useEffect(() => {
    async function fetchEmployeeData() {
      const employeeData = await apiClientBrowser.get(`${config.apiBaseUrl}project/${id}`);
      setProject(employeeData.data as Projects);
    }
    fetchEmployeeData();
  }, [id]);

  // eslint-disable-next-line no-console
  console.log(project);

  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            {project && (
              <ProjectForm
                member={project.member}
                techStack={project.techStack}
                projectStatus={project.projectStatus}
                projectType={project.projectType}
                department={project.department}
                edit={true}
                name={project?.name}
                pId={id}
              />
            )}
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
