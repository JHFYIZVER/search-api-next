import React from "react";
import UserInfo from "../components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import axios from "axios";

export const getStaticProps = async () => {
  const session = await getServerSession(authOptions);
  const id = session?.user?.id;

  const response = await axios.get(`/api/user/?${id}`);

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: { info: response.data.user },
  };
};

const page = ({ info }: any) => {
  return (
    <div>
      <UserInfo info={info} />
    </div>
  );
};

export default page;
