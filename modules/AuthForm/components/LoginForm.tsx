import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { loginFormType } from "../@types/formType";
import BtnSubmit from "./BtnSubmit";
const LoginForm = () => {
  const clazz = "input rounded-lg bg-[#EBEDF0] text-[#818C99] py-2 px-3 outline-none";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormType>();

  const submit: SubmitHandler<loginFormType> = (data: loginFormType) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<loginFormType> = (errors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(submit, error)} className="flex flex-col gap-4">
      <input
        className={errors.email ? clazz + " border border-red-500 shake" : clazz}
        type="email"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        className={errors.password ? clazz + " border border-red-500 shake" : clazz}
        type="password"
        placeholder="Пароль"
        {...register("password", { required: true, minLength: 6 })}
      />
      <BtnSubmit title="Войти" />
    </form>
  );
};

export default LoginForm;