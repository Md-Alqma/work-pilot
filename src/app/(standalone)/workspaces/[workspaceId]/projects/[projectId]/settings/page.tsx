import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { GetProject } from "@/features/projects/queries";

interface ProjectIdSettingsPageProps {
  params: {
    projectId: string;
  };
}

const ProjectIdSettingsPage = async ({
  params,
}: ProjectIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await GetProject({ projectId: params.projectId });

  return <div className="w-full lg:max-w-xl">Settings page</div>;
};

export default ProjectIdSettingsPage;
