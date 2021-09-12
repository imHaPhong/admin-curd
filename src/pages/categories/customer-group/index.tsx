import { PageLayout } from "src/components";
import { CustomerGroupTable } from "src/modules/customer-group";

export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <CustomerGroupTable />
        </PageLayout>
      </main>
    </div>
  );
}
