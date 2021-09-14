import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  routeDepartmentBase,
  routeEmployeeBase,
  routeProjectStatusBase,
  routeProjectTypeBase,
  routeTechStackBase,
} from "src/constants/routes";
import { apiClientBrowser } from "src/lib/request";
import { Projects } from "../project.type";

export function ProjectCard() {
  const { id }: { id: string } = useParams();

  const [projectTypeData, setProjectTypeData] = useState<Projects>();

  useEffect(() => {
    async function getProjectType() {
      const projectTypeInfo = await apiClientBrowser.get(`http://localhost:8080/project/${id}`);
      // eslint-disable-next-line no-console
      console.log(projectTypeInfo);
      setProjectTypeData(projectTypeInfo.data as Projects);
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
              Tên
            </td>
            <td className="pl-10 text-sm">{projectTypeData?.name}</td>
          </tr>
          <tr className="mt-10 ">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              Trung tâm
            </td>
            <td className="pl-10 text-sm">
              <Link to={`${routeDepartmentBase}/${projectTypeData?.department._id}`}>
                {projectTypeData?.department.name}
              </Link>
            </td>
          </tr>
          <tr className="mt-10 ">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              TT dự án
            </td>
            <td className="pl-10 text-sm">
              <Link to={`${routeProjectStatusBase}/${projectTypeData?.projectStatus._id}`}>
                {projectTypeData?.projectStatus.name}
              </Link>
            </td>
          </tr>
          <tr className="mt-10 ">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              Loại dự án
            </td>
            <td className="pl-10 text-sm">
              <Link to={`${routeProjectTypeBase}/${projectTypeData?.projectType._id}`}>
                {projectTypeData?.projectType.name}
              </Link>
            </td>
          </tr>
          <tr className="mt-2 ">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              Nhân viên
            </td>
            <td className="pl-10 text-sm">
              <ul className="list-with-comma">
                {projectTypeData?.member.map((project) => (
                  <li>
                    <Link to={`${routeEmployeeBase}/${project._id}`}>{project.name}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="mt-2">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              Techstack
            </td>
            <td className="pl-10 text-sm">
              <ul className="list-with-comma">
                {projectTypeData?.techStack.map((project) => (
                  <li>
                    <Link to={`${routeTechStackBase}/${project._id}`}>{project.name}</Link>
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
