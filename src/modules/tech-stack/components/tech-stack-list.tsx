import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { routeCreateTechStackBase } from "src/constants/routes";
import { useMedia } from "src/hooks/media-query";
import queryString from "query-string";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TechstackRow } from "./tech-stack-item";
import { AppContext } from "src/contexts";
import { getTechstack } from "../tech-stack.service";

export interface TechstackType {
  _id: string;
  name: string;
  desc: string;
  priority: string;
  status: string;
}

export function TechstackList() {
  const isMobile = useMedia("(min-width: 768px)");
  const { setLoading, loading } = useContext(AppContext);

  const [listTechstack, setListTechstack] = useState<TechstackType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isNext, setIsNext] = useState(false);

  const [search, setSearch] = useState("");

  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    const pageObject: { page?: string; search?: string } = queryString.parse(location.search);

    async function fetchTechstackData() {
      setLoading(true);
      const techstack = await getTechstack(pageObject);
      setLoading(false);
      setListTechstack(techstack.data.projectTypes as TechstackType[]);
      setIsNext(techstack.isNext);
    }
    fetchTechstackData();
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

  const typingRef = useRef<null | ReturnType<typeof setTimeout>>(null);

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
          <Link to={routeCreateTechStackBase}>Tạo mới</Link>
        </button>
      </div>
      <input
        onChange={userInputHandler}
        value={search}
        placeholder="Tìm kiếm..."
        className="border border-table-lightGray p-1 px-3 text-sm focus:outline-none rounded-sm focus:border-primary"
      />
      <table className="text-sm border-t-0 w-full md:text-lg mt-2">
        <thead className="text text-table-text font-normal">
          <tr className="">
            <td className="px-1 md:w-2/12 pb-1">Tên</td>
            <td className="w-3/6 md:w-4/12  pb-1">Mô tả</td>
            {isMobile && (
              <>
                <td className="w-3/6 md:w-auto  pb-1">Trạng thái</td>
                <td className="w-3/6 md:w-1/12  pb-1">Hành động</td>
              </>
            )}
          </tr>
        </thead>

        <tbody>
          {!loading &&
            listTechstack.length > 0 &&
            listTechstack.map(({ _id, name, status, desc, priority }, index) => (
              <TechstackRow
                _id={_id}
                key={index}
                name={name}
                status={status}
                desc={desc}
                priority={priority}
              />
            ))}
          {listTechstack.length === 0 && (
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
