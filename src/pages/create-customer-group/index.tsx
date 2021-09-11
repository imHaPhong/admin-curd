import { PageLayout } from "src/components";
import { CustomerGroupForm } from "src/modules/customer-group";

export default function CreateProjectStatusPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            <CustomerGroupForm edit={false} />
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
