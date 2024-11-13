import User from "@/modules/AuthForm/components/User";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <h1>Client page</h1>
      <User />
      <h2>Server page</h2>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
}
