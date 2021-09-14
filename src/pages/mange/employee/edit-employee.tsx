import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "src/components";
import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { EmployeeForm } from "src/modules/employee";

interface EmployeeType {
  _id: string;
  name?: string;
  phonenumber: string;
  project?: string[];
  DoB?: string;
  workExperience?: {
    techstackId: string;
    experience: string;
  }[];
  edit: boolean;
}

export default function EditCustomerGroupPage() {
  const { id }: { id: string } = useParams();

  const [employee, setEmployee] = useState<EmployeeType>();

  useEffect(() => {
    async function fetchEmployeeData() {
      const employeeData = await apiClientBrowser.get(`${config.apiBaseUrl}employee/${id}`);
      setEmployee(employeeData.data as EmployeeType);
    }
    fetchEmployeeData();
  }, [id]);

  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            {employee && (
              <EmployeeForm
                edit={true}
                name={employee?.name}
                pId={id}
                phonenumber={employee.phonenumber}
                workExperienceList={employee?.workExperience}
                project={employee?.project}
              />
            )}
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
