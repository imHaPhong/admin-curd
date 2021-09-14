import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiClientBrowser } from "src/lib/request";
import { EmployeeDetail } from "../employee.type";

export function EmployeeCard() {
  const { id }: { id: string } = useParams();

  const [employee, setEmployee] = useState<EmployeeDetail>();

  useEffect(() => {
    async function getEmployeeData() {
      const employeeData = await apiClientBrowser.get(`http://localhost:8080/employee/${id}`);
      setEmployee(employeeData.data as EmployeeDetail);
    }

    getEmployeeData();
  }, [id]);

  return (
    <div className="w-full bg-white p-3 md:px-8 rounded">
      <table className="table-auto">
        <thead>
          <tr>
            <th />
            <th />
          </tr>
        </thead>
        <tbody className="font-light">
          <tr className="mt-2">
            <td className="border-r pr-20 border-table-lightGray font-bold text-table-light py-2">
              Tên nhân viên
            </td>
            <td className="pl-10 text-sm">{employee?.name}</td>
          </tr>
          <tr className="mt-2">
            <td className="border-r pr-20 border-table-lightGray font-bold text-table-light py-2">
              Ngày tháng năm sinh
            </td>
            <td className="pl-10 text-sm">{new Date(employee?.DoB || "").toUTCString()}</td>
          </tr>
          <tr className="mt-2">
            <td className="border-r pr-20 border-table-lightGray font-bold text-table-light py-2">
              Số điện thoại
            </td>
            <td className="pl-10 text-sm">{employee?.phonenumber}</td>
          </tr>
          <tr className="mt-10 ">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              Tech stack
            </td>
            <td className="pl-10 text-sm">
              <ul>
                {employee?.techStack?.map((el, index) => (
                  <li>
                    {el.name} - {employee.workExperience[index].experience}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="mt-2 ">
            <td className="border-r border-table-lightGray font-bold text-table-light py-2">
              Các dự án đã tham gia
            </td>

            <td className="pl-10 text-sm">
              {employee?.projects.length === 0 && "Chưa tham gia vào dự án"}
              {employee?.projects.map((el) => el.name)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
