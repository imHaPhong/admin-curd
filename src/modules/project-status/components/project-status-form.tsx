import React from "react";
import { useForm } from "react-hook-form";
import { createProjectStatus, updateProjectStatus } from "../project-type.service";

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
  priority1 = "Medium",
  priority2 = "Highest",
  priority3 = "Low",
  priority4 = "Lowest",
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

export function ProjectStatusForm({ name, desc, status, edit = false, pId }: ProjectFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      name,
      desc,
      status: status as StatusEnum,
    },
  });

  function onSubmit(data: AddProps) {
    if (edit) {
      updateProjectStatus({
        ...data,
        pId,
      });
    } else {
      createProjectStatus(data);
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border-input">
      <div className="flex flex-col">
        <label>Tên</label>
        <input
          {...register("name", {
            required: "This is a required",
          })}
          placeholder="Tên dự án"
        />
        {errors.name && <p className="text-red-500 font-medium mt-2">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col">
        <label>Mô tả</label>
        <input
          {...register("desc", {
            required: "This is a required",
          })}
          placeholder="Mô tả"
        />
        {errors.desc && <p className="text-red-500 font-medium mt-2">{errors.desc.message}</p>}
      </div>
      <div className="flex flex-col">
        <label>Trạng thái</label>
        <select
          {...register("status", {
            required: "This is a required",
          })}
        >
          <option value={StatusEnum.active}>{StatusEnum.active}</option>
          <option value={StatusEnum.inactive}>{StatusEnum.inactive}</option>
        </select>
        {errors.status && <p className="text-red-500 font-medium mt-2">{errors.status.message}</p>}
      </div>
      <div className="flex justify-end px-3 border-t pt-5">
        <button
          type="submit"
          className="p-2 px-3  text-white text-sm font-medium bg-warmGray-400 rounded-md mr-2"
        >
          Done
        </button>
        <button className="p-2 px-3 text-white text-sm  font-medium bg-lightBlue-500 rounded-md">
          Create
        </button>
      </div>
    </form>
  );
}
