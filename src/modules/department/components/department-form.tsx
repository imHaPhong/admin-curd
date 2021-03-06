import React, { FocusEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { routeDepartmentBase } from "src/constants/routes";
import { ProjectType } from "src/modules/project/project.type";
import { TechstackType } from "src/modules/tech-stack";
import {
  createDepartment,
  getEmployee,
  getProject,
  getTechstack,
  updateDepartment,
} from "../department.service";
import { Employee, Projects, Techstack } from "../department.type";
import { DepartmentTag } from "./department-tag";

export type AddProps = {
  name: string;
  desc: string;
  status: string;
  priority?: string;
  path: string;
};

interface IFormInput {
  name: String;
  desc: String;
  project: String[];
}

type DepartmentFormProps = {
  pId?: string;
  name?: string;
  desc?: string;
  project?: ProjectType[];
  employee?: Employee[];
  techstack?: TechstackType[];
  edit: boolean;
};

type DepartmentFormStateType = {
  listTechstack: Techstack[];
  listProject: Projects[];
  listEmployee: Employee[];
};

export function DepartmentForm({
  name,
  desc,
  edit = false,
  pId,
  techstack,
  employee,
  project,
}: DepartmentFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      name,
      desc,
    },
  });

  const [techstackSelected, setTechstackSelected] = useState<{
    idSelectd: string[];
    seletedList: { _id: string; name: string }[];
  }>({
    idSelectd: techstack?.map((el) => el._id) || [],
    seletedList:
      [
        ...(techstack?.map((el) => ({
          _id: el._id,
          name: el.name,
        })) || []),
      ] || [],
  });

  const [projectSelected, setProjectSelected] = useState<{
    idSelectd: string[];
    seletedList: { _id: string; name: string }[];
  }>({
    idSelectd: project?.map((el) => el._id) || [],
    seletedList:
      [
        ...(project?.map((el) => ({
          _id: el._id,
          name: el.name,
        })) || []),
      ] || [],
  });
  const [employeeSelected, setEmployeeSelected] = useState<{
    idSelectd: string[];
    seletedList: { _id: string; name: string }[];
  }>({
    idSelectd: employee?.map((el) => el._id) || [],
    seletedList:
      [
        ...(employee?.map((el) => ({
          _id: el._id,
          name: el.name,
        })) || []),
      ] || [],
  });

  const history = useHistory();

  async function onSubmit(data: AddProps) {
    const toastId = toast.loading("Xin ?????i...");

    if (edit) {
      try {
        toast.update(toastId, {
          render: "??ang t???o tr???ng th??i d??? ??n",
          type: "warning",
          isLoading: true,
        });
        const departmentResponse = await updateDepartment({
          ...data,
          projects: projectSelected?.idSelectd,
          techStack: techstackSelected?.idSelectd,
          employee: employeeSelected?.idSelectd,
          _id: pId || "",
        });
        toast.update(toastId, {
          render: "T???o m???i th??nh c??ng",
          type: "success",
          isLoading: false,
          autoClose: 500,
        });
        setTimeout(() => {
          history.push(`${routeDepartmentBase}/${departmentResponse?._id}`);
        }, 300);
        reset();
      } catch (error) {
        toast.update(toastId, {
          render: "???? x???y ra l???i kh??ng th??? th??m tr???ng th??i d??? ??n",
          type: "error",
          isLoading: false,
          autoClose: 500,
        });
      }
    } else {
      const departmentData = {
        ...data,
        projects: projectSelected?.idSelectd,
        techStack: techstackSelected?.idSelectd,
        employee: employeeSelected?.idSelectd,
      };
      try {
        toast.update(toastId, {
          render: "??ang t???o tr???ng th??i d??? ??n",
          type: "warning",
          isLoading: true,
        });
        const projectStatusResponse = await createDepartment(departmentData);
        toast.update(toastId, {
          render: "T???o m???i th??nh c??ng",
          type: "success",
          isLoading: false,
          autoClose: 500,
        });
        setTimeout(() => {
          history.push(`${routeDepartmentBase}/${projectStatusResponse?._id}`);
        }, 300);
        reset();
      } catch (error) {
        toast.update(toastId, {
          render: "???? x???y ra l???i kh??ng th??? th??m tr???ng th??i d??? ??n",
          type: "error",
          isLoading: false,
          autoClose: 500,
        });
      }
    }
  }

  const [listData, setListData] = useState<DepartmentFormStateType>({
    listTechstack: [],
    listProject: [],
    listEmployee: [],
  });

  const [techstackInput, setTechstackInput] = useState("");
  const [projectInput, setProjectInput] = useState("");
  const [employeeInput, setEmployeeInput] = useState("");
  const [clicked, setClicked] = useState({
    techstackClicked: false,
    projectClicked: false,
    employeeClicked: false,
  });

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

  function projectInputHandler(ev: React.FormEvent<HTMLInputElement>) {
    setProjectInput(ev.currentTarget.value);
    const data = ev.currentTarget.value;
    async function findTechstack() {
      const project: Projects[] = await getProject(data);
      setListData((p) => ({
        ...p,
        listProject: project,
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
      const porjects: Projects[] = await getProject();
      const employee: Employee[] = await getEmployee();
      setListData((p) => ({
        ...p,
        listTechstack: techstack,
        listProject: porjects,
        listEmployee: employee,
      }));
    }
    getTechstackData();
  }, []);

  function clickHandler(clickedId: string) {
    setClicked((p) => ({
      ...p,
      [clickedId]: true,
    }));
  }

  const selectRef = useRef<HTMLSelectElement>(null);

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
    <div className="2xl:flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-input font-light text-gray p-3 2xl:w-4/5"
      >
        <div className="flex flex-col">
          <label className="font-normal text-dark text-lg">T??n</label>
          <input
            className="text-base p-2 py-1 mt-2"
            {...register("name", {
              required: "This is a required",
            })}
            placeholder="T??n d??? ??n"
          />
          {errors.name && <p className="text-red-500 font-normal mt-2">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col">
          <label className="font-normal text-dark text-lg mt-3">M?? t???</label>
          <textarea
            rows={4}
            cols={50}
            className="text-base p-2 py-1 mt-2 border border-table-lightGray resize-none"
            {...register("desc", {
              required: "M?? t??? kh??ng ???????c ????? tr???ng",
            })}
            placeholder="M?? t???"
          />
          {errors.desc && <p className="text-red-500 font-normal mt-2">{errors.desc.message}</p>}
        </div>

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
                placeholder="Nh???p t??n tech stack"
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
          <label className="font-normal text-dark text-lg mt-3">D??? ??n</label>
          <div
            className={`${clicked.projectClicked ? "border border-table-lightGray" : ""} rounded `}
          >
            <div
              className={`flex items-center p-2 py-1 ${
                !clicked.projectClicked ? "border" : ""
              } border-table-lightGray`}
            >
              {projectSelected?.seletedList.map((el) => (
                <DepartmentTag
                  content={el.name}
                  onClose={() => {
                    setProjectSelected({
                      idSelectd: projectSelected.idSelectd.filter((id) => id !== el._id) || [],
                      seletedList:
                        projectSelected.seletedList.filter((id) => id._id !== el._id) || [],
                    });
                  }}
                />
              ))}
              <input
                onBlur={(e) => onBlurHandler(e, "projectClicked")}
                onFocus={() => clickHandler("projectClicked")}
                type="text"
                className=" border-0 focus:border-0 font-light"
                value={projectInput}
                onChange={projectInputHandler}
                placeholder="Nh???p t??n d??? ??n"
              />
            </div>
            {clicked.projectClicked && (
              <select
                ref={selectRef}
                className={`w-full text-base p-2 py-1  ${
                  projectSelected?.idSelectd.length === listData.listProject.length ? "hidden" : ""
                }`}
                multiple
              >
                {listData.listProject.length > 0 &&
                  listData.listProject.map((el, index) => {
                    if (!projectSelected?.idSelectd.includes(el._id)) {
                      return (
                        <option
                          key={index}
                          value={el._id}
                          className="w-full cursor-pointer hover:bg-table-dark"
                          onClick={() => {
                            setTechstackInput("");
                            setProjectSelected({
                              idSelectd: projectSelected?.idSelectd.concat(el._id) || [],
                              seletedList: projectSelected?.seletedList.concat(el) || [],
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
          <label className="font-normal text-dark text-lg mt-3">Danh s??ch nh??n vi??n</label>
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
                placeholder="Nh???p t??n nh??n vi??n"
              />
            </div>
            {clicked.employeeClicked && (
              <select
                ref={selectRef}
                className={`w-full text-base p-2 py-1  ${
                  employeeSelected?.idSelectd.length === listData.listEmployee.length
                    ? "hidden"
                    : ""
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

        <div className="flex justify-end px-3 pt-5 py-3">
          <button
            className="p-2 px-3 text-base font-normal border-primary border text-primary rounded-md mr-2"
            onClick={() => {
              history.push("/department");
            }}
          >
            H???y
          </button>
          <button
            type="submit"
            className="p-2 px-3 text-white text-base  font-normal bg-primary rounded-md"
          >
            {edit ? "C???p nh???t" : "T???o m???i"}
          </button>
        </div>
      </form>
    </div>
  );
}
