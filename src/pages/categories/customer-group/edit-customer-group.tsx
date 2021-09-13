import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "src/components";
import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { ProjectStatusForm } from "src/modules/project-status";

interface CustomerGroupType {
  _id: string;
  name: string;
  desc: string;
  priority: string;
  status: string;
}

export default function EditCustomerGroupPage() {
  const { id }: { id: string } = useParams();

  const [customerGroupData, setCustomerGroupData] = useState<CustomerGroupType>();

  useEffect(() => {
    async function fetchCustomerGroupData() {
      const customerGroup = await apiClientBrowser.get(`${config.apiBaseUrl}customer-group/${id}`);
      setCustomerGroupData(customerGroup.data as CustomerGroupType);
    }

    fetchCustomerGroupData();
  }, [id]);

  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            {customerGroupData && (
              <ProjectStatusForm
                edit={true}
                name={customerGroupData?.name}
                desc={customerGroupData?.desc}
                status={customerGroupData?.status}
                pId={id}
              />
            )}
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
