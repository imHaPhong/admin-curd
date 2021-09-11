import { FormEvent, useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { routeCreateProjectBase } from "src/constants/routes";
import { useMedia } from "src/hooks/media-query";
import { apiClientBrowser } from "src/lib/request";
import queryString from "query-string";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ProjectRow } from "./project-row";
import { Projects } from "../department.type";
import { AppContext } from "src/contexts";

export function ProjectTable() {
  const isMobile = useMedia("(min-width: 768px)");
  const { setLoading, loading } = useContext(AppContext);

  const [listProjectType, setListProjectType] = useState<Projects[]>([]);
  const [page, setPage] = useState<number>(1);

  const [search, setSearch] = useState("");

  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const pageObject: { page?: number; search?: string } = queryString.parse(location.search);
    async function getProjectTypes() {
      setLoading(true);
      const projectTypes = await apiClientBrowser.get(
        `http://localhost:8080/project?${queryString.stringify(pageObject)}`,
      );
      setLoading(false);
      setListProjectType(projectTypes.data as Projects[]);
    }
    getProjectTypes();
  }, [location, setLoading]);

  function nextHandler() {
    setPage((p) => (p as number) + Number(1));
    history.push(`?page=${Number(page) + 1}`);
  }
  function prevHandler() {
    if (page < 2) return;
    setPage((p) => (p as number) - Number(1));
    history.push(`?page=${Number(page) - 1}`);
  }

  function userInputHandler(ev: FormEvent<HTMLInputElement>) {
    const pageObject: { page?: number; search?: string } = queryString.parse(location.search);
    setSearch(ev.currentTarget.value.trim());
    const a = {
      ...pageObject,
      search: ev.currentTarget.value.trim(),
    };
    // if (ev.currentTarget.value.trim() === "") {
    //   a.search = null;
    // }
    history.push(`?${queryString.stringify(a)}`);
  }

  return (
    <div className="w-full rounded p-3 bg-white text-table-light md:px-8">
      <div className="flex justify-end">
        <button className="px-2 py-1 text-sm border rounded md:my-5 md:p-2 md:text-md  border-primary text-primary hover:bg-primary hover:text-white duration-300">
          <Link to={routeCreateProjectBase}>Tạo mới</Link>
        </button>
      </div>
      <input
        onChange={userInputHandler}
        value={search}
        placeholder="Search..."
        className="border border-table-lightGray p-1 px-3 text-sm focus:outline-none rounded-sm focus:border-primary"
      />
      <table className="text-sm border-t-0 w-full md:text-lg mt-2">
        <thead className="text text-table-text font-normal">
          <tr className="">
            <td className="px-1 md:w-2/12 pb-1">Tên</td>
            <td className="w-3/6 md:w-2/12 pb-1">Loại dự án</td>
            <td className="w-3/6 md:w-2/12  pb-1">Trạng thái dự án</td>

            {isMobile && (
              <>
                <td className="w-3/6 md:w-auto  pb-1">Tech stack</td>
                <td className="w-3/6 md:w-auto  pb-1">Trung tâm phụ trách</td>
                <td className="w-3/6 md:w-2/12  pb-1">Thành viên trong dự án</td>
                <td className="w-3/6 md:w-1/12  pb-1">Hành động</td>
              </>
            )}
          </tr>
        </thead>

        <tbody>
          {listProjectType.length > 0 &&
            listProjectType.map(
              ({ _id, name, techStack, department, projectStatus, projectType, member }, index) => (
                <ProjectRow
                  member={member}
                  _id={_id}
                  key={index}
                  projectType={projectType}
                  projectStatus={projectStatus}
                  name={name}
                  techStack={techStack}
                  department={department}
                />
              ),
            )}
          {!loading && listProjectType.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center bg-table text-base">
                Không tìm thấy dự án phù hợp
              </td>
            </tr>
          )}
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
      <div className="mt-2 flex items-center justify-center md:my-10">
        <button
          className="p-2 text-sm border border-table-lightGray rounded hover:text-primary hover:bg-table"
          onClick={prevHandler}
        >
          <FaAngleLeft />
        </button>
        <span className="mx-5 text-lg">{page}</span>
        <button
          className="p-2 text-sm border border-table-lightGray rounded hover:text-primary hover:bg-table"
          onClick={nextHandler}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}