import React from "react";

const UserInfo = ({ info }: any) => {
  return <div>{info ? info : "no info"}</div>;
};

export default UserInfo;
