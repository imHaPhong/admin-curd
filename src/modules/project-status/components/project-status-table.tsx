import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routeCreateProjectStatusBase } from "src/constants/routes";
import { useMedia } from "src/hooks/media-query";
import { apiClientBrowser } from "src/lib/request";
import { ProjectStatusRow } from "./project-status-row";
export interface ProjectStatus {
  _id: string;
  name: string;
  desc: string;
  status: string;
}
export function ProjectStatusTable() {
  const isMobile = useMedia("(min-width: 768px)");
  const [listProjectStatus, setListProjectStatus] = useState<ProjectStatus[]>([]);

  useEffect(() => {
    async function getProjectStatuss() {
      const ProjectStatuss = await apiClientBrowser.get("http://localhost:8080/project-status");
      setListProjectStatus(ProjectStatuss.data as ProjectStatus[]);
    }
    getProjectStatuss();
  }, []);
  return (
    <div className="w-full rounded p-3 bg-white text-table-light md:px-8 ">
      <div className="flex justify-end">
        <button className="px-2 py-1 text-sm border rounded">
          <Link to={routeCreateProjectStatusBase}>Tạo mới</Link>
        </button>
      </div>
      <table className="text-sm table-auto border-t-0 w-full md:text-lg">
        <thead className="text font-medium">
          <tr className="">
            <td className="px-1">Tên</td>
            <td className="w-3/6 md:w-4/12 px-1">Mô tả</td>
            {isMobile && (
              <>
                <td className="w-3/6 md:w-auto px-1">Trạng thái</td>
                <td className="w-3/6 md:w-1/12 px-1">Hành động</td>
              </>
            )}
          </tr>
        </thead>

        <tbody>
          {listProjectStatus.length > 0 &&
            listProjectStatus.map(({ _id, name, status, desc }, index) => (
              <ProjectStatusRow _id={_id} key={index} name={name} status={status} desc={desc} />
            ))}
          {!isMobile && (
            <>
              <tr className="font-medium mx-1">
                <td>Tên</td>
                <td>Mô tả</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      <div className="mt-2 flex items-center justify-center">
        <button className="p-1 text-sm border rounded">Previos</button>
        <span className="mx-5">1</span>
        <button className="p-1 text-sm border rounded">Next</button>
      </div>
    </div>
  );
}
