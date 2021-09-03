import { useCallback, useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Modal } from "src/components";
import { useMedia } from "src/hooks/media-query";
import { deleteProjectStatus } from "../project-type.service";
import { ProjectStatus } from "./project-status-table";

export function ProjectStatusRow({ name, desc, status, _id }: ProjectStatus) {
  const [isShow, setIsShow] = useState(false);
  const isMobile = useMedia("(min-width: 768px)");

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  function deleteProjectTypeHandler(id: string) {
    deleteProjectStatus(id);
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        className="m-3 rounded-md w-full md:w-4/6 max-h-screen xl:w-3/12"
      >
        <div>
          <button onClick={() => deleteProjectTypeHandler(_id)}>Xóa</button>
          <button onClick={closeModal}>Hủy</button>
        </div>
      </Modal>
      <tr
        className="border border-r-0 border-l-0 border-gray odd:bg-table"
        onClick={() => setIsShow((p) => !p)}
      >
        <td className="py-2 flex items-center">
          {isShow ? <AiFillMinusCircle className="mx-1" /> : <AiFillPlusCircle className="mx-1" />}
          <span>{name}</span>
        </td>
        <td>{desc}</td>
        {isMobile && (
          <>
            <td>{status}</td>
            <td>
              <div>
                <span>
                  <Link to={`/project-status/edit/${_id}`}>Sua</Link>
                </span>
                <span onClick={openModal}>Xóa</span>
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
