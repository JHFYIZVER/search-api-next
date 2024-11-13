import { authOptions } from "../../lib/auth";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Profile",
  description: "User profile page",
  keywords: "profile, user",
  robots: "index, follow",
};

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <h1>Profile {session?.user?.name}</h1>
      <p>Profile page {session?.user?.email}</p>
      <span>id {session?.user?.id}</span>
    </div>
  );
};

export default page;
