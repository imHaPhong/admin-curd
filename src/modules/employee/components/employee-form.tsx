/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";

import {
  createEmployee,
  getEmployee,
  getProject,
  getTechstack,
  updateCustomergroup,
  updateEmployee,
} from "../employee.service";
import { Employee, EmployeeRequest, Projects, Techstack } from "../employee.type";
import { useHistory } from "react-router";
import { routeEmployeeBase } from "src/constants/routes";

export type AddProps = {
  name: string;
  desc: string;
  status: string;
  priority?: string;
  path: string;
};

type EmployeeFormProps = {
  pId?: string;
  name?: string;
  phonenumber?: string;
  project?: string[];
  DoB?: string;
  workExperienceList?: {
    techstackId: string;
    experience: string;
  }[];
  edit: boolean;
};

export function EmployeeForm({
  name,
  phonenumber,
  workExperienceList,
  edit = false,
  DoB = new Date().toString(),
  pId,
}: EmployeeFormProps) {
  const [startDate, setStartDate] = useState<Date>(new Date(DoB));
  const [listTechstack, setListechstack] = useState<Techstack[]>([]);

  const history = useHistory();

  useEffect(() => {
    async function getTechstackData() {
      const workExperience: Techstack[] = await getTechstack();
      setListechstack(workExperience);
    }
    getTechstackData();
  }, []);

  // eslint-disable-next-line no-console
  console.log(workExperienceList);

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
      phonenumber,
      workExperience: [
        ...(workExperienceList?.map((el) => ({
          techstackId: el.techstackId,
          experience: el.experience,
        })) || []),
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "workExperience",
  });

  async function onSubmit(data: React.FormEventHandler<HTMLFormElement>) {
    const toastId = toast.loading("Xin đợi...");
    if (edit) {
      try {
        toast.update(toastId, {
          render: "Đang tạo trạng thái dự án",
          type: "warning",
          isLoading: true,
        });
        const employeeResponse = await updateEmployee({
          ...data,
          DoB: startDate,
          _id: pId,
        } as EmployeeRequest);
        toast.update(toastId, {
          render: "Tạo mới thành công",
          type: "success",
          isLoading: false,
          autoClose: 500,
        });
        setTimeout(() => {
          history.push(`${routeEmployeeBase}/${employeeResponse?._id}`);
        }, 300);
        reset();
      } catch (error) {
        toast.update(toastId, {
          render: "Đã xảy ra lỗi không thể thêm trạng thái dự án",
          type: "error",
          isLoading: false,
          autoClose: 500,
        });
      }
    } else {
      try {
        toast.update(toastId, {
          render: "Đang tạo trạng thái dự án",
          type: "warning",
          isLoading: true,
        });
        const employeeResponse = await createEmployee({
          ...data,
          DoB: startDate,
        } as EmployeeRequest);
        toast.update(toastId, {
          render: "Tạo mới thành công",
          type: "success",
          isLoading: false,
          autoClose: 500,
        });
        setTimeout(() => {
          history.push(`${routeEmployeeBase}/${employeeResponse?._id}`);
        }, 300);
        reset();
      } catch (error) {
        toast.update(toastId, {
          render: "Đã xảy ra lỗi không thể thêm trạng thái dự án",
          type: "error",
          isLoading: false,
          autoClose: 500,
        });
      }
    }
  }

  return (
    <div className="2xl:flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="p-3 2xl:w-4/5">
        <div className="flex flex-col">
          <label className="font-normal text-dark text-lg">Tên nhân viên</label>
          <input
            className="text-base p-2 py-1 mt-2"
            {...register("name", {
              required: "Tên nhân viên không được bỏ trống",
            })}
            placeholder="Tên nhân viên"
          />
          {errors.name && <p className="text-red-500 font-normal mt-2">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col">
          <label className="font-normal text-dark text-lg py-2">Ngày sinh</label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            className="w-full p-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-normal text-dark text-lg py-2">Số điện thoại</label>
          <input
            type="number"
            className="text-base p-2 py-1 mt-1"
            {...register("phonenumber", {
              minLength: {
                value: 10,
                message: "Số điện thoại yêu cầu 10 số",
              },
              maxLength: {
                value: 11,
                message: "Số điện thoại tối đa 10 số",
              },
              pattern: {
                value: /^[0-9]*$/,
                message: "Invalid phone number",
              },
              required: {
                value: true,
                message: "This field required",
              },
            })}
            placeholder="Số điện thoại"
          />
          {errors.phonenumber && (
            <>
              <p className="text-red-500 font-normal mt-2">{errors.phonenumber.message}</p>
            </>
          )}
        </div>
        <div className="font-normal text-dark text-lg pt-3 pb-2 flex items-center justify-between">
          <span>Techstack</span>
          <button
            className="p-1 font-bold border rounded border-primary-light text-primary-light text-sm hover:bg-primary hover:text-white"
            type="button"
            onClick={() => {
              append({ techstackId: listTechstack[0]._id, experience: "" });
            }}
          >
            +
          </button>
        </div>
        <ul className=" mb-3">
          {fields.map((item, index) => {
            return (
              <li key={item.id} className=" mb-3">
                <div className="flex border border-table-lightGray">
                  <Controller
                    defaultValue={item.techstackId}
                    // eslint-disable-next-line object-curly-spacing
                    render={({ field: { onChange, value, name } }) => {
                      return (
                        <select
                          value={value as string}
                          onChange={(e) => {
                            onChange(e.target.value);
                          }}
                        >
                          {listTechstack.length > 0 &&
                            listTechstack.map((tech) => (
                              <option key={tech._id} value={tech._id}>
                                {tech.name}
                              </option>
                            ))}
                        </select>
                      );
                    }}
                    name={`workExperience.${index}.techstackId`}
                    control={control}
                  />

                  <Controller
                    rules={{
                      required: {
                        value: true,
                        message: "This field required",
                      },
                    }}
                    // eslint-disable-next-line object-curly-spacing
                    render={({ field: { onChange, value, name } }) => {
                      return (
                        <div className="flex-1">
                          <input
                            placeholder="Kinh nghiệm làm việc"
                            {...register(`workExperience.${index}.experience`, {
                              required: {
                                value: true,
                                message: "Trường làm việc không được bỏ trống",
                              },
                            })}
                            type="text"
                            onChange={(e) => {
                              onChange(e.target.value);
                            }}
                            className="w-full p-1 px-2 border-0"
                          />
                        </div>
                      );
                    }}
                    name={`workExperience.${index}.experience`}
                    control={control}
                    defaultValue={item.experience}
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="p-1 border-l border-table-lightGray text-sm"
                  >
                    Xóa
                  </button>
                </div>
                {errors.workExperience && (
                  <>
                    <p className="text-red-500 font-normal mt-2">{"Yeu cau"}</p>
                  </>
                )}
              </li>
            );
          })}
        </ul>
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
    </div>
  );
}
