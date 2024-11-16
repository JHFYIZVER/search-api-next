import axios from "axios";
import UserInfo from "../components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import Link from "next/link";

async function getUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}

async function getMetadata() {
  const title = await getUser().then((user) => user?.name);
  return {
    title,
    description: "Просмотр пользователя",
    openGraph: {
      title,
      description: "Просмотр пользователя",
    },
  };
}

export const metadata = getMetadata();

export default async function UserPage() {
  const id = await getUser().then((user) => user?.id);

  const user = await axios.get(`http://localhost:3000/api/user?id=${id}`);

  if (!user) {
    return <div>Пользователь не найден</div>;
  }

  if (user.status !== 200) {
    return <div>Произошла ошибка при получении данных</div>;
  }

  return (
    <div>
      <h1>Пользователь</h1>
      <Link href={`/user/${id}`}>Подробнее</Link>
      <UserInfo info={user.data.user} />
    </div>
  );
}
