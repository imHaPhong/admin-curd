import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "src/components";
import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { DepartmentForm } from "src/modules/department";
import { Employee } from "src/modules/department/department.type";
import { ProjectType } from "src/modules/project/project.type";
import { TechstackType } from "src/modules/tech-stack";

interface DepartmentType {
  _id: string;
  name: string;
  desc: string;
  techStack: TechstackType[];
  projects: ProjectType[];
  employee: Employee[];
}

export default function EditCustomerGroupPage() {
  const { id }: { id: string } = useParams();

  const [departmentData, setDepartmentData] = useState<DepartmentType>();

  useEffect(() => {
    async function fetchDepartmentData() {
      const department = await apiClientBrowser.get(`${config.apiBaseUrl}department/${id}`);
      setDepartmentData(department.data as DepartmentType);
    }
    fetchDepartmentData();
  }, [id]);

  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            {departmentData && (
              <DepartmentForm
                edit={true}
                name={departmentData?.name}
                desc={departmentData?.desc}
                pId={id}
                techstack={departmentData.techStack}
                project={departmentData.projects}
                employee={departmentData.employee}
              />
            )}
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
