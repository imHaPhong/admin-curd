import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "src/components";
import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { TechstackForm } from "src/modules/tech-stack";

interface TechstackType {
  _id: string;
  name: string;
  desc: string;
  priority: string;
  status: string;
}

export default function EditTechstackPage() {
  const { id }: { id: string } = useParams();

  const [techstackData, setTechstackData] = useState<TechstackType>();

  useEffect(() => {
    async function fetchTechstackData() {
      const techstack = await apiClientBrowser.get(`${config.apiBaseUrl}tech-stack/${id}`);
      setTechstackData(techstack.data as TechstackType);
    }

    fetchTechstackData();
  }, [id]);

  return (
    <div className="w-full">
      <main className="w-full flex flex-wrap justify-center ">
        <PageLayout>
          <div className="bg-white">
            {techstackData && (
              <TechstackForm
                edit={true}
                name={techstackData?.name}
                desc={techstackData?.desc}
                priority={techstackData?.priority}
                status={techstackData?.status}
                pId={id}
              />
            )}
          </div>
        </PageLayout>
      </main>
    </div>
  );
}
