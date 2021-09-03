import { useCallback, useState } from "react";
import { AiFillEdit, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Modal } from "src/components";
import { useMedia } from "src/hooks/media-query";
import { deleteProjectType } from "../project-type.service";
import { ProjectType } from "./project-type-table";

export function ProjectTypeRow({ name, desc, priority, status, _id }: ProjectType) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isShow, setIsShow] = useState(false);
  const isMobile = useMedia("(min-width: 768px)");

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  function deleteProjectTypeHandler(id: string) {
    deleteProjectType(id);
  }

  const history = useHistory();
  const location = useLocation();

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className="m-3 rounded-md w-full md:w-4/6 max-h-screen xl:w-3/12"
      >
        {/* <div className="flex flex-col h-full">
        <div className="my-3 flex justify-between">
          <div className="px-3 flex pb-5 border-b w-full justify-between items-center">
            <h5 className="font-bold text-xl">{modalTitle}</h5>
            <AiOutlineClose className="text-xl cursor-pointer" onClick={onClose}/>
          </div>
        </div>
        <div className="flex-1 overflow-y-scroll md:max-h-3/4 xl:max-h-3/4 px-3 pb-5">
          {children}
        </div>
      </div> */}
        <div>
          <button onClick={() => deleteProjectTypeHandler(_id)}>Xóa</button>
          <button onClick={closeModal}>Hủy</button>
        </div>
      </Modal>
      <tr
        className="border border-r-0 border-l-0 border-table-lightGray text-base odd:bg-table hover:bg-table-dark font-light cursor-pointer"
        // onClick={() => setIsShow((p) => !p)}
        onClick={() => history.push(`${location.pathname}/asd`)}
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
            <td>{priority}</td>
            <td>{status}</td>
            <td>
              <div className="flex ">
                <span className="mr-5">
                  <Link to={`project-type/edit/${_id}`}>
                    <AiFillEdit />
                  </Link>
                </span>
                <span onClick={openModal}>
                  <BsTrash />
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
                <span className="ml-5">{priority}</span>
              </li>
              <li className="flex py-2">
                <span className="font-bold" style={{ minWidth: "120px" }}>
                  Trạng thái
                </span>
                <span className=" ml-5">{status}</span>
              </li>
            </ul>
          </td>
        </tr>
      )}
    </>
  );
}
