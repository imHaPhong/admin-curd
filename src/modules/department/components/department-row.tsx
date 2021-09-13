import { useCallback, useState } from "react";
import {
  AiFillEdit,
  AiFillEye,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import { Modal } from "src/components";
import { useMedia } from "src/hooks/media-query";
import { deleteCustomergroup } from "../department.service";
import { Department } from "../department.type";

export function CustomerGroupRow({ name, desc, techStack, projects, employee, _id }: Department) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isShow, setIsShow] = useState(false);
  const isMobile = useMedia("(min-width: 768px)");

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  function deleteCustomerGroupHandler(id: string) {
    deleteCustomergroup(id);
  }

  const history = useHistory();
  // const location = useLocation();

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className="m-3 rounded-md w-full md:w-4/6 max-h-screen xl:w-3/12"
      >
        <div className="">
          <div className="flex justify-between p-3 border-b items-center border-table-lightGray">
            <span className="font-medium">Xóa</span>
            <AiOutlineClose className="text-xl cursor-pointer" onClick={closeModal} />
          </div>
          <div className="border-b border-table-lightGray p-3 py-4">
            <p>
              Bạn có chắc xóa dữ liệu <span className="font-bold">{name}</span> không?
            </p>
          </div>
          <div className="p-3 float-right">
            <button
              className="p-4 py-1 border border-primary rounded mr-5 hover:bg-primary hover:text-white duration-300"
              onClick={closeModal}
            >
              Hủy
            </button>
            <button
              className="p-4 py-1 bg-primary rounded text-white"
              onClick={() => deleteCustomerGroupHandler(_id)}
            >
              Xóa
            </button>
          </div>
        </div>
      </Modal>
      <tr
        className="border border-r-0 border-l-0 border-table-lightGray text-base odd:bg-table hover:bg-table-dark font-light cursor-pointer"
        // onClick={() => setIsShow((p) => !p)}
      >
        <td className="py-2 flex items-center px-2">
          {!isMobile && (
            <>
              {isShow ? (
                <div className="text-table-light">
                  <AiFillMinusCircle className="mx-1 mr-3 " />
                </div>
              ) : (
                <div className="text-table-light">
                  <AiFillPlusCircle className="mx-1  mr-3" />
                </div>
              )}
            </>
          )}
          <span>{name}</span>
        </td>
        <td>{desc}</td>
        {isMobile && (
          <>
            <td>
              {techStack.length < 1 && "Chưa thêm tech stack"}
              {techStack.length > 0 && (
                <ul className="list-with-comma">
                  {techStack.map((tech) => (
                    <li>
                      <Link to={`tech-stack/${tech._id}`}>{tech.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </td>
            <td>
              {projects.length < 1 && "Chưa thêm dự án"}
              <ul className="list-with-comma">
                {projects.map((project) => (
                  <li>
                    <Link to={`project/${project._id}`}>{project.name}</Link>
                  </li>
                ))}
              </ul>
            </td>
            <td>
              {employee.length < 1 && "Chưa thêm nhân viên"}
              {employee.length > 0 && (
                <ul className="list-with-comma truncate overflow-ellipsis max-w-md">
                  {employee.map((emp) => (
                    <li>
                      <Link to={`employee/${emp._id}`}>{emp.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </td>
            <td>
              <div className="flex ">
                <span>
                  <Link to={`department/edit/${_id}`}>
                    <AiFillEdit />
                  </Link>
                </span>
                <span onClick={openModal} className="mx-5">
                  <BsTrash />
                </span>
                <span>
                  <AiFillEye onClick={() => history.push(`department/${_id}`)} />
                </span>
              </div>
            </td>
          </>
        )}
      </tr>
      {isShow && (
        <tr className="w-full">
          <td colSpan={2}>
            <ul className="mx-8 mr-16">
              <li className="flex border-b border-gray py-2 ">
                <span className="font-bold" style={{ minWidth: "120px" }}>
                  Trọng số ưu tiên
                </span>
                <span className="ml-5">{employee}</span>
              </li>
              <li className="flex py-2">
                <span className="font-bold" style={{ minWidth: "120px" }}>
                  Trạng thái
                </span>
                <span className=" ml-5">{techStack}</span>
              </li>
            </ul>
          </td>
        </tr>
      )}
    </>
  );
}
