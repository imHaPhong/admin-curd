import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiClientBrowser } from "src/lib/request";
import { ProjectType } from "..";

export function ProjectTypeCard() {
  const { id }: { id: string } = useParams();

  const [projectTypeData, setProjectTypeData] = useState<ProjectType>();

  useEffect(() => {
    async function getProjectType() {
      const projectTypeInfo = await apiClientBrowser.get(
        `http://localhost:8080/project-type/${id}`,
      );
      setProjectTypeData(projectTypeInfo.data as ProjectType);
    }

    getProjectType();
  }, [id]);

  return (
    <div className="w-full bg-white p-3 md:px-8 rounded">
      <table className="table-auto">
        <thead>
          <tr>
            <th />
            <th />
          </tr>
        </thead>
        <tbody className="font-light">
          <tr className="mt-2">
            <td className="border-r pr-20 border-table-lightGray font-bold text-table-light py-2">
              Loại dự án
            </td>
            <td className="pl-10 text-sm">{projectTypeData?.name}</td>
          </tr>
          <tr className="mt-10 ">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              Mô tả
            </td>
            <td className="pl-10 text-sm">{projectTypeData?.desc}</td>
          </tr>
          <tr className="mt-2 ">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              Trọng số ưu tiên
            </td>
            <td className="pl-10 text-sm">{projectTypeData?.priority}</td>
          </tr>
          <tr className="mt-2">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              Trạng thái
            </td>
            <td className="pl-10 text-sm">{projectTypeData?.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
