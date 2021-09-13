import { PageLayout } from "src/components";
import { CustomerGroupCard } from "src/modules/customer-group";

export default function ProjectStatusDetailPage() {
  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <CustomerGroupCard />
        </PageLayout>
      </main>
    </div>
  );
}
