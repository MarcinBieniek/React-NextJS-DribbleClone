import { ProjectInterface } from "@/common.types";
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session"

const page = async ({ params: { id } }: { params: { id : string}}) => {

  const session = await getCurrentUser();
  const result = await getProjectDetails(id) as { project?: ProjectInterface }

  if(!result?.project) {
    <p>Failed to fetch project information</p>
  }

  console.log(result?.project)

  return (
    <div>
      page
    </div>
  )
}

export default page
