import React, { FocusEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import {
  createProject,
  // createProject,
  getDepartment,
  getEmployee,
  getProjectStatus,
  getProjectType,
  getTechstack,
} from "../department.service";
import { Employee, ProjectStatus, ProjectType, Projects, Techstack } from "../department.type";
import { DepartmentTag } from "./department-tag";

export type AddProps = {
  name: string;
  projectType: string;
  projectStatus: string;
  techStack: string[];
  department: string;
  member: string[];
};

interface IFormInput {
  name: String;
  projectType: String;
  projectStatus: String;
  department: String;
}

type TechStackFormProps = {
  pId?: string;
  name?: string;
  projectType?: string;
  projectStatus?: string;
  edit: boolean;
};

type DepartmentFormStateType = {
  listTechstack: Techstack[];
  listProject: Projects[];
  listEmployee: Employee[];
  listProjectType: ProjectType[];
  listProjectStatus: ProjectStatus[];
};

export function ProjectForm({
  name,
  projectStatus,
  projectType,
  edit = false,
}: // pId,
TechStackFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      name,
      projectStatus,
      projectType,
    },
  });

  const [techstackInput, setTechstackInput] = useState("");
  const [employeeInput, setEmployeeInput] = useState("");

  const [techstackSelected, setTechstackSelected] =
    useState<{ idSelectd: string[]; seletedList: { _id: string; name: string }[] }>();

  const [employeeSelected, setEmployeeSelected] =
    useState<{ idSelectd: string[]; seletedList: { _id: string; name: string }[] }>();

  const history = useHistory();
  const selectRef = useRef<HTMLSelectElement>(null);

  function onSubmit(data: AddProps) {
    if (edit) {
      // updateCustomergroup({
      //   ...data,
      //   pId,
      // });
    } else {
      // eslint-disable-next-line no-console
      const departmentData = {
        ...data,
        techStack: techstackSelected?.idSelectd,
        member: employeeSelected?.idSelectd,
      };

      createProject(departmentData);

      reset();
    }
  }

  const [listData, setListData] = useState<DepartmentFormStateType>({
    listTechstack: [],
    listProject: [],
    listEmployee: [],
    listProjectType: [],
    listProjectStatus: [],
  });

  function clickHandler(clickedId: string) {
    setClicked((p) => ({
      ...p,
      [clickedId]: true,
    }));
  }

  function techstackInputHandler(ev: React.FormEvent<HTMLInputElement>) {
    setTechstackInput(ev.currentTarget.value);
    const data = ev.currentTarget.value;
    async function findTechstack() {
      const techstack: Techstack[] = await getTechstack(data);
      setListData((p) => ({
        ...p,
        listTechstack: techstack,
      }));
    }
    findTechstack();
  }

  function employeeInputHandler(ev: React.FormEvent<HTMLInputElement>) {
    setEmployeeInput(ev.currentTarget.value);
    const data = ev.currentTarget.value;
    async function findTechstack() {
      const employee: Employee[] = await getEmployee(data);
      setListData((p) => ({
        ...p,
        listEmployee: employee,
      }));
    }
    findTechstack();
  }

  useEffect(() => {
    async function getTechstackData() {
      const techstack: Techstack[] = await getTechstack();
      const porjects: Projects[] = await getDepartment();
      const employee: Employee[] = await getEmployee();
      const projectStatus: ProjectStatus[] = await getProjectStatus();
      const projectType: ProjectType[] = await getProjectType();
      setListData({
        listTechstack: techstack,
        listProject: porjects,
        listEmployee: employee,
        listProjectStatus: projectStatus,
        listProjectType: projectType,
      });
    }
    getTechstackData();
  }, []);
  const [clicked, setClicked] = useState({
    techstackClicked: false,
    projectClicked: false,
    employeeClicked: false,
  });

  function onBlurHandler(event: FocusEvent<HTMLInputElement>, clickedId: string) {
    if (event.relatedTarget === selectRef.current) {
      return;
    }
    setClicked((p) => ({
      ...p,
      [clickedId]: false,
    }));
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border-input font-light text-gray p-3 ">
      <div className="flex flex-col">
        <label className="font-normal text-dark text-lg">Tên</label>
        <input
          className="text-base p-2 py-1 mt-2"
          {...register("name", {
            required: "This is a required",
          })}
          placeholder="Tên dự án"
        />
        {errors.name && <p className="text-red-500 font-normal mt-2">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col">
        <label className="font-normal text-dark text-lg mt-3 ">Loại dự án</label>
        <select
          className="text-base p-2 py-1 border-table-lightGray border"
          {...register("projectType", {
            required: "This is a required",
          })}
        >
          {listData.listProjectType?.map((el) => (
            <option value={el._id}>{el.name}</option>
          ))}
        </select>
        {errors.projectType && (
          <p className="text-red-500 font-normal mt-2">{errors.projectType.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="font-normal text-dark text-lg mt-3">Trung tâm phụ trách</label>
        <select
          className="text-base p-2 py-1 border-table-lightGray border"
          {...register("department", {
            required: "This is a required",
          })}
        >
          {listData.listProject?.map((el) => (
            <option value={el._id}>{el.name}</option>
          ))}
        </select>
        {errors.department && (
          <p className="text-red-500 font-normal mt-2">{errors.department.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="font-normal text-dark text-lg mt-3">Trạng thái dự án</label>
        <select
          className="text-base p-2 py-1 border-table-lightGray border"
          {...register("projectStatus", {
            required: "This is a required",
          })}
        >
          {listData.listProjectStatus?.map((el) => (
            <option value={el._id}>{el.name}</option>
          ))}
        </select>
        {errors.projectType && (
          <p className="text-red-500 font-normal mt-2">{errors.projectType.message}</p>
        )}
      </div>

      {/* <div className="flex flex-col">
        <label className="font-normal text-dark text-lg mt-3">Tech stack</label>
        <div className="flex">
          {techstackSelected?.seletedList.map((el) => (
            <DepartmentTag
              content={el.name}
              onClose={() => {
                setTechstackSelected({
                  idSelectd: techstackSelected.idSelectd.filter((id) => id !== el._id) || [],
                  seletedList:
                    techstackSelected.seletedList.filter((id) => id._id !== el._id) || [],
                });
              }}
            />
          ))}
          <input
            type="text"
            className="border-0 focus:border-0 font-light"
            value={techstackInput}
            onChange={techstackInputHandler}
          />
        </div>
        <select className="text-base p-2 py-1" multiple>
          {listData.listTechstack.length > 0 &&
            listData.listTechstack.map((el, index) => {
              if (!techstackSelected?.idSelectd.includes(el._id)) {
                return (
                  <option
                    key={index}
                    value={el._id}
                    className="cursor-pointer hover:bg-table-dark"
                    onClick={() => {
                      setTechstackInput("");
                      setTechstackSelected({
                        idSelectd: techstackSelected?.idSelectd.concat(el._id) || [],
                        seletedList: techstackSelected?.seletedList.concat(el) || [],
                      });
                    }}
                  >
                    {el.name}
                  </option>
                );
              }
              return <></>;
            })}
        </select>
      </div> */}

      <div className="flex flex-col ">
        <label className="font-normal text-dark text-lg mt-3">Tech stack</label>
        <div
          className={`${clicked.techstackClicked ? "border border-table-lightGray" : ""} rounded`}
        >
          <div
            className={`flex items-center p-2 py-1 ${
              !clicked.techstackClicked ? "border border-table-lightGray" : ""
            }`}
          >
            {techstackSelected?.seletedList.map((el) => (
              <DepartmentTag
                content={el.name}
                onClose={() => {
                  setTechstackSelected({
                    idSelectd: techstackSelected.idSelectd.filter((id) => id !== el._id) || [],
                    seletedList:
                      techstackSelected.seletedList.filter((id) => id._id !== el._id) || [],
                  });
                }}
              />
            ))}
            <input
              onBlurCapture={(e) => onBlurHandler(e, "techstackClicked")}
              onFocus={() => clickHandler("techstackClicked")}
              type="text"
              className="border-0 focus:border-0 font-light"
              value={techstackInput}
              onChange={techstackInputHandler}
              placeholder="Nhập tên tech stack"
            />
          </div>
          {clicked.techstackClicked && (
            <select
              ref={selectRef}
              className={`w-full text-base p-2 py-1 ${
                techstackSelected?.idSelectd.length === listData.listTechstack.length
                  ? "hidden"
                  : ""
              }`}
              multiple
            >
              {listData.listTechstack.length > 0 &&
                listData.listTechstack.map((el, index) => {
                  if (!techstackSelected?.idSelectd.includes(el._id)) {
                    return (
                      <option
                        key={index}
                        value={el._id}
                        className="cursor-pointer hover:bg-table-dark"
                        onClick={() => {
                          setTechstackInput("");
                          setTechstackSelected({
                            idSelectd: techstackSelected?.idSelectd.concat(el._id) || [],
                            seletedList: techstackSelected?.seletedList.concat(el) || [],
                          });
                        }}
                      >
                        {el.name}
                      </option>
                    );
                  }
                  return <></>;
                })}
            </select>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label className="font-normal text-dark text-lg mt-3">Danh sách nhân viên</label>
        <div
          className={`${clicked.employeeClicked ? "border border-table-lightGray" : ""} rounded `}
        >
          <div
            className={`flex items-center p-2 py-1 ${
              !clicked.employeeClicked ? "border" : ""
            } border-table-lightGray`}
          >
            {employeeSelected?.seletedList.map((el) => (
              <DepartmentTag
                content={el.name}
                onClose={() => {
                  setEmployeeSelected({
                    idSelectd: employeeSelected.idSelectd.filter((id) => id !== el._id) || [],
                    seletedList:
                      employeeSelected.seletedList.filter((id) => id._id !== el._id) || [],
                  });
                }}
              />
            ))}
            <input
              onFocus={() => clickHandler("employeeClicked")}
              onBlur={(e) => onBlurHandler(e, "employeeClicked")}
              type="text"
              className=" border-0 focus:border-0 font-light"
              value={employeeInput}
              onChange={employeeInputHandler}
              placeholder="Nhập tên nhân viên"
            />
          </div>
          {clicked.employeeClicked && (
            <select
              ref={selectRef}
              className={`w-full text-base p-2 py-1  ${
                employeeSelected?.idSelectd.length === listData.listEmployee.length ? "hidden" : ""
              }`}
              multiple
            >
              {listData.listEmployee.length > 0 &&
                listData.listEmployee.map((el, index) => {
                  if (!employeeSelected?.idSelectd.includes(el._id)) {
                    return (
                      <option
                        key={index}
                        value={el._id}
                        className="w-full cursor-pointer hover:bg-table-dark"
                        onClick={() => {
                          setTechstackInput("");
                          setEmployeeSelected({
                            idSelectd: employeeSelected?.idSelectd.concat(el._id) || [],
                            seletedList: employeeSelected?.seletedList.concat(el) || [],
                          });
                        }}
                      >
                        {el.name}
                      </option>
                    );
                  }
                  return <></>;
                })}
            </select>
          )}
        </div>
      </div>
      {/* <div className="flex flex-col">
        <label className="font-normal text-dark text-lg mt-3">Thành viên trong dự án</label>
        <div className="flex">
          {employeeSelected?.seletedList.map((el) => (
            <DepartmentTag
              content={el.name}
              onClose={() => {
                setEmployeeSelected({
                  idSelectd: employeeSelected.idSelectd.filter((id) => id !== el._id) || [],
                  seletedList: employeeSelected.seletedList.filter((id) => id._id !== el._id) || [],
                });
              }}
            />
          ))}
          <input
            type="text"
            className="border-0 focus:border-0 font-light"
            value={employeeInput}
            onChange={employeeInputHandler}
          />
        </div>
        <select className="text-base p-2 py-1" multiple />
        {listData.listEmployee.length > 0 &&
          listData.listEmployee.map((el, index) => {
            if (!employeeSelected?.idSelectd.includes(el._id)) {
              return (
                <div
                  key={index}
                  dat-value={el._id}
                  className="cursor-pointer hover:bg-table-dark"
                  onClick={() => {
                    setEmployeeInput("");
                    setEmployeeSelected({
                      idSelectd: employeeSelected?.idSelectd.concat(el._id) || [],
                      seletedList: employeeSelected?.seletedList.concat(el) || [],
                    });
                  }}
                >
                  {el.name}
                </div>
              );
            }
            return <></>;
          })}
      </div> */}
      <div className="flex justify-end px-3 pt-5 py-3">
        <button
          className="p-2 px-3 text-base font-normal border-primary border text-primary rounded-md mr-2"
          onClick={() => {
            history.push("/employee");
          }}
        >
          Hủy
        </button>
        <button
          type="submit"
          className="p-2 px-3 text-white text-base  font-normal bg-primary rounded-md"
        >
          {edit ? "Cập nhật" : "Tạo mới"}
        </button>
      </div>
    </form>
  );
}
