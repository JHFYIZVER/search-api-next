import { userInfoProps } from "../@types/userType";
const UserInfo = ({ info }: userInfoProps) => {
  return (
    <div className="user-info" key={info.id}>
      <h2>{info.name}</h2>
      <p>{info.email}</p>
    </div>
  );
};

export default UserInfo;
