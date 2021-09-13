import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { routeProjectTypeBase } from "src/constants/routes";
import { createProjectType, updateProjectType } from "../project-type.service";

export type AddProps = {
  name: string;
  desc: string;
  status: string;
  priority?: string;
  path: string;
};

enum StatusEnum {
  active = "Active",
  inactive = "Inactive",
}

enum PriorityEnum {
  priority1 = "Ưu tiên trung bình",
  priority2 = "Ưu tiên cao",
  priority3 = "Ít ưu tiên",
  priority4 = "Ưu tiên thấp",
}

interface IFormInput {
  name: String;
  desc: String;
  priority: PriorityEnum;
  status: StatusEnum;
}

type ProjectFormProps = {
  pId?: string;
  name?: string;
  desc?: string;
  priority?: string;
  status?: string;
  edit: boolean;
};

export function ProjectTypeForm({
  name,
  desc,
  priority,
  status,
  edit = false,
  pId,
}: ProjectFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      name,
      desc,
      priority: priority as PriorityEnum,
      status: status as StatusEnum,
    },
  });

  const history = useHistory();
  async function onSubmit(data: AddProps) {
    const toastId = toast.loading("Xin đợi...");

    if (edit) {
      try {
        toast.update(toastId, { render: "Đang tạo loại dự án", type: "warning", isLoading: true });
        await updateProjectType({
          ...data,
          pId,
        });
        toast.update(toastId, {
          render: "Tạo mới thành công",
          type: "success",
          isLoading: false,
          autoClose: 500,
        });
        setTimeout(() => {
          history.push(`${routeProjectTypeBase}`);
        }, 300);
        reset();
      } catch (error) {
        toast.update(toastId, {
          render: "Đã xảy ra lỗi không thể thêm dự án",
          type: "error",
          isLoading: false,
          autoClose: 500,
        });
      }
    } else {
      try {
        toast.update(toastId, { render: "Đang tạo loại dự án", type: "warning", isLoading: true });
        const projectTypeResponse = await createProjectType(data);
        toast.update(toastId, {
          render: "Tạo mới thành công",
          type: "success",
          isLoading: false,
          autoClose: 500,
        });
        setTimeout(() => {
          history.push(`${routeProjectTypeBase}/${projectTypeResponse?._id}`);
        }, 300);
        reset();
      } catch (error) {
        toast.update(toastId, {
          render: "Đã xảy ra lỗi không thể thêm dự án",
          type: "error",
          isLoading: false,
          autoClose: 500,
        });
      }
    }
  }

  return (
    <div className="2xl:flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-input font-light text-gray p-3 2xl:w-4/5"
      >
        <div className="flex flex-col">
          <label className="font-normal text-dark text-lg">Tên</label>
          <input
            className="text-base p-2 py-1 mt-2"
            {...register("name", {
              required: "Tên không được để trống",
            })}
            placeholder="Tên dự án"
          />
          {errors.name && <p className="text-red-500 font-normal mt-2">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col">
          <label className="font-normal text-dark text-lg mt-3">Mô tả</label>
          <textarea
            rows={4}
            cols={50}
            className="text-base p-2 py-1 mt-2 border border-table-lightGray resize-none"
            {...register("desc", {
              required: "Mô tả không được để trống",
            })}
            placeholder="Mô tả"
          />
          {errors.desc && <p className="text-red-500 font-normal mt-2">{errors.desc.message}</p>}
        </div>

        <div className="flex flex-col">
          <label className="font-normal text-dark text-lg mt-3">Trọng số ưu tiên</label>
          <select
            className="text-base p-2 py-1 border border-table-lightGray"
            {...register("priority", {
              required: "This is a required",
            })}
          >
            <option value={PriorityEnum.priority1}>{PriorityEnum.priority1}</option>
            <option value={PriorityEnum.priority2}>{PriorityEnum.priority2}</option>
            <option value={PriorityEnum.priority3}>{PriorityEnum.priority3}</option>
            <option value={PriorityEnum.priority4}>{PriorityEnum.priority4}</option>
          </select>
          {errors.priority && (
            <p className="text-red-500 font-normal mt-2">{errors.priority.message}</p>
          )}
        </div>
        <div className="font-normal text-dark text-lg mt-3">Trạng thái </div>
        <div className="">
          <input
            {...register("status", { required: "Cần chọn trạng thái" })}
            type="radio"
            value="Active"
            id="radio-active"
            className="mr-2"
          />
          <label className="font-normal text-dark text-lg mt-3" htmlFor="radio-active">
            Active
          </label>
        </div>

        <div>
          <input
            {...register("status", { required: "Cần chọn trạng thái" })}
            type="radio"
            className="mr-2"
            value="Inactive"
            id="radio-inactive"
          />
          <label className="font-normal text-dark text-lg mt-3" htmlFor="radio-inactive">
            Inactive
          </label>
        </div>
        {errors.status && <p className="text-red-500 font-normal mt-2">{errors.status.message}</p>}
        <div className="flex justify-end px-3 pt-5 py-3">
          <button
            className="p-2 px-3 text-base font-normal border-primary border text-primary rounded-md mr-2"
            onClick={() => {
              history.push(routeProjectTypeBase);
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
