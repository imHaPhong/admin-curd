import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { routeEmployeeBase, routeTechStackBase } from "src/constants/routes";
import { apiClientBrowser } from "src/lib/request";
import { Department } from "../department.type";

export function DepartmentCard() {
  const { id }: { id: string } = useParams();

  const [projectTypeData, setProjectTypeData] = useState<Department>();

  useEffect(() => {
    async function getProjectType() {
      const projectTypeInfo = await apiClientBrowser.get(`http://localhost:8080/department/${id}`);
      setProjectTypeData(projectTypeInfo.data as Department);
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
          <tr className="mt-10 ">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              Tech stack
            </td>
            <td className="pl-10 text-sm">
              <ul className="flex list-with-comma">
                {projectTypeData?.techStack.map((el, index) => (
                  <li key={index}>
                    <Link to={`${routeTechStackBase}/${el._id}`}>{el.name}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="mt-2 ">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              Các dự án
            </td>
            <td className="pl-10 text-sm">{projectTypeData?.projects.map((el) => el.name)}</td>
          </tr>
          <tr className="mt-2">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              Danh sách nhân viên
            </td>
            <td className="pl-10 text-sm">
              <ul className="flex">
                {projectTypeData?.employee.map((el, index) => (
                  <li key={index}>
                    <Link to={`${routeEmployeeBase}${el._id}`}>{el.name}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
