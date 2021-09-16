import { useEffect, useState } from "react";
import { getProjectReport } from "../project.service";
import { ProjectChart } from "./project-chart";

export function ProjectChartContainer() {
  const [isShow, setIsShow] = useState(false);
  const [chartData, setChartData] = useState<{}>();
  const [filter] = useState<{
    projectStatus: string;
    projectType: string;
    techstack: string;
  }>();

  useEffect(() => {
    async function getData() {
      const a = await getProjectReport();
      setChartData(a);
    }
    getData();
  }, []);
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
              <select value={filter?.projectStatus}>
                <option>sad</option>
                <option>sad</option>
                <option>sad</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Loại dự án</label>
              <select>
                <option>sad</option>
                <option>sad</option>
                <option>sad</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="">Tech stack</label>
            <select>
              <option>sad</option>
              <option>sad</option>
              <option>sad</option>
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
