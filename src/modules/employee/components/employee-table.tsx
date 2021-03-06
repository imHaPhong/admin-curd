import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { routeCreateEmployee } from "src/constants/routes";
import { useMedia } from "src/hooks/media-query";
import { apiClientBrowser } from "src/lib/request";
import queryString from "query-string";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Employee } from "../employee.type";
import { EmployeeRow } from "./employee-row";
import { AppContext } from "src/contexts";

export function EmployeeTabel() {
  const isMobile = useMedia("(min-width: 768px)");
  const { setLoading, loading } = useContext(AppContext);

  const [listEmployee, setListEmployee] = useState<Employee[]>([]);
  const [page, setPage] = useState<number>(1);

  const [search, setSearch] = useState("");
  const [isNext, setIsNext] = useState(false);
  const typingRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const pageObject: { page?: number; search?: string } = queryString.parse(location.search);
    setLoading(true);
    async function getProjectTypes() {
      const projectTypes = await apiClientBrowser.get(
        `http://localhost:8080/employee?${queryString.stringify(pageObject)}`,
      );
      setListEmployee(projectTypes.data.data.projectTypes as Employee[]);
      setLoading(false);
      setIsNext(projectTypes.data.isNext);
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
    const value = ev.currentTarget.value.trim();
    setSearch(ev.currentTarget.value.trim());
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }
    typingRef.current = setTimeout(() => {
      const pageObject: { page?: number; search?: string } = queryString.parse(location.search);
      const a = {
        ...pageObject,
        search: value,
        page: 1,
      };

      history.push(`?${queryString.stringify(a)}`);
    }, 300);
  }

  return (
    <div className="w-full rounded p-3 bg-white text-table-light md:px-8">
      <div className="flex justify-end">
        <button className="px-2 py-1 text-sm border rounded md:my-5 md:p-2 md:text-md  border-primary text-primary hover:bg-primary hover:text-white duration-300">
          <Link to={routeCreateEmployee}>T???o m???i</Link>
        </button>
      </div>
      <input
        onChange={userInputHandler}
        value={search}
        placeholder="T??m ki???m..."
        className="border border-table-lightGray p-1 px-3 text-sm focus:outline-none rounded-sm focus:border-primary"
      />
      <table className="text-sm border-t-0 w-full md:text-lg mt-2">
        <thead className="text text-table-text font-normal">
          <tr className="">
            <td className="px-1 md:w-auto pb-1">T??n</td>
            <td className="w-3/6 md:w-auto pb-1">Ng??y sinh</td>
            <td className="w-3/6 md:w-auto pb-1">S??? ??i???n tho???i</td>
            {isMobile && (
              <>
                <td className="w-3/6 md:w-3/12  pb-1">Tech stack</td>
                <td className="w-3/6 md:w-3/12  pb-1">D??? ??n ???? tham gia</td>
                <td className="w-3/6 md:w-1/12  pb-1">H??nh ?????ng</td>
              </>
            )}
          </tr>
        </thead>

        <tbody>
          {listEmployee.length > 0 &&
            listEmployee.map(({ _id, name, techStack, projects, DoB, phonemumber }, index) => (
              <EmployeeRow
                _id={_id}
                key={index}
                name={name}
                phonemumber={phonemumber}
                DoB={DoB}
                techStack={techStack}
                projects={projects}
              />
            ))}
          {!loading && listEmployee.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center bg-table text-base">
                Kh??ng t??m th???y d??? ??n ph?? h???p
              </td>
            </tr>
          )}
          {!isMobile && (
            <>
              <tr className="font-medium mx-1">
                <td>T??n</td>
                <td>M?? t???</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      <div className="mt-2 flex items-center justify-center md:my-10">
        <button
          className={`p-2 text-sm border border-table-lightGray rounded hover:text-primary hover:bg-table ${
            page > 1 ? "" : "opacity-20"
          }`}
          onClick={prevHandler}
        >
          <FaAngleLeft />
        </button>
        <span className="mx-5 text-lg">{page}</span>
        <button
          className={`p-2 text-sm border border-table-lightGray rounded hover:text-primary hover:bg-table ${
            isNext ? "" : "opacity-20"
          }`}
          onClick={nextHandler}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
