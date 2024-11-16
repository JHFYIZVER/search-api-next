import React from "react";

const UserInfo = ({ info }: any) => {
  return (
    <div className="user-info" key={info.id}>
      <h2>{info.name}</h2>
      <p>{info.email}</p>
    </div>
  );
};

export default UserInfo;
