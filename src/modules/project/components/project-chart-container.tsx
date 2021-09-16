import { ChangeEvent, useEffect, useState } from "react";
import {
  getProjectReport,
  // getProjectReport,
  getProjectReportAll,
  getProjectStatus,
  getProjectType,
  getTechstack,
} from "../project.service";
import { ProjectStatus, ProjectType, Techstack } from "../project.type";
import { ProjectChart } from "./project-chart";

export function ProjectChartContainer() {
  const [isShow, setIsShow] = useState(false);
  const [chartData, setChartData] = useState<{}>();
  const [chartFilter, setChartFilter] = useState<{
    projectStatus: ProjectStatus[];
    projectType: ProjectType[];
    techStack: Techstack[];
  }>();
  const [filter, setFilter] = useState<{
    projectStatus?: string;
    projectType?: string;
    techStack?: string;
  }>();

  useEffect(() => {
    async function getChartData() {
      const chartData = await getProjectReportAll();
      setChartData(chartData);
      const projectStatusData = await getProjectStatus();
      const projectTypeData = await getProjectType();
      const techstackData = await getTechstack();
      setChartFilter({
        projectStatus: projectStatusData,
        projectType: projectTypeData,
        techStack: techstackData,
      });
    }
    getChartData();
  }, []);

  async function onChangeHandler(e: ChangeEvent<HTMLSelectElement>, changedId: string) {
    setChartData((p) => ({
      ...p,
      [changedId]: e.target.value,
    }));
    setFilter((p) => ({
      ...p,
      [changedId]: e.target.value,
    }));
    const chart = await getProjectReport({
      ...filter,
      [changedId]: e.target.value,
    });
    setChartData(chart);
  }

  return (
    <div className="flex items-center flex-col">
      <div className="mb-5 w-3/6">
        <div onClick={() => setIsShow((p) => !p)} className="cursor-pointer select-none">
          Lọc theo
        </div>
        <div className={`flex justify-between ${isShow ? "h-auto" : "hidden"} duration-100 `}>
          <div>
            <div>
              <label htmlFor="">Trạng thái dự án</label>
              <select
                value={filter?.projectStatus}
                onChange={(e) => onChangeHandler(e, "projectStatus")}
              >
                <option value="">Tất cả</option>
                {chartFilter?.projectStatus.map((el) => (
                  <option value={el._id}>{el.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="">Loại dự án</label>
              <select
                value={filter?.projectType}
                onChange={(e) => onChangeHandler(e, "projectType")}
              >
                <option value="">Tất cả</option>
                {chartFilter?.projectType.map((el) => (
                  <option value={el._id}>{el.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="">Tech stack</label>
            <select value={filter?.techStack} onChange={(e) => onChangeHandler(e, "techStack")}>
              <option value="">Tất cả</option>

              {chartFilter?.techStack.map((el) => (
                <option value={el._id}>{el.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="w-3/6">
        <ProjectChart data={chartData || {}} />
      </div>
    </div>
  );
}
