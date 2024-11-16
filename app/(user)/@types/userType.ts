type userType = {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
  id: string;
  email: string;
  name: string;
};

export type userInfoProps = {
  info: {
    id: number;
    name: string;
    email: string;
  };
};

export default userType;
